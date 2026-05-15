<template>
    <div v-floating-vue-tooltip="tooltipDirective" :style="{ ...measurableStyles }">
        <WtgPopover
            v-model="active"
            :disabled="!props.editable"
            location="bottom left"
            nudge-bottom="8px"
            :transition="false"
        >
            <template #activator="{ props: activatorProps }">
                <component
                    :is="editable ? 'button' : 'div'"
                    :class="computedClasses"
                    :style="computedStyle"
                    v-bind="editable ? activatorProps : undefined"
                    data-testid="wtg_status"
                >
                    <div class="wtg-status__content">
                        <WtgLabel v-if="label">
                            {{ label }}
                        </WtgLabel>
                        <slot v-else />
                        <WtgLabel v-if="count !== undefined" class="wtg-status__count">({{ count }}) </WtgLabel>
                    </div>
                    <WtgIcon v-if="editable" size="s">
                        {{ computedTrailingIcon }}
                    </WtgIcon>
                </component>
            </template>
            <WtgList data-testid="wtg_status_popover">
                <WtgListItem
                    v-for="item in items"
                    :key="item.label"
                    :active="item.label !== '' && item.value === value"
                    class="wtg-status__popover-item"
                    @click="onClickPopoverItem(item)"
                >
                    <template v-if="item.label">
                        <div class="wtg-status__swatch-container">
                            <div class="wtg-status__swatch" :class="getStatusClasses(item.sentiment, item.variant)" />
                        </div>
                        <div>
                            <div class="wtg-status__content">
                                {{ item.label }}
                            </div>
                        </div>
                    </template>
                    <div v-else>
                        <span style="visibility: hidden">&nbsp;</span>
                    </div>
                </WtgListItem>
            </WtgList>
        </WtgPopover>
    </div>
</template>

<script setup lang="ts">
import { WtgIcon } from '@components/WtgIcon';
import WtgLabel from '@components/WtgLabel/WtgLabel.vue';
import { WtgList, WtgListItem } from '@components/WtgList';
import { WtgPopover } from '@components/WtgPopover';
import { useColor } from '@composables/color';
import { makeMeasureProps, useMeasure } from '@composables/measure';
import { makeTooltipProps, useTooltip } from '@composables/tooltip';
import { PropType, computed, onUnmounted, ref, watch } from 'vue';
import type { EditableStatusItem, StatusSentiment, StatusVariant } from './types';

//
// Properties
//
const props = defineProps({
    /**
     * The name of the color to apply from the design system or a custom color.
     * This only applies when the `sentiment` property is not set.
     * If `sentiment` is insufficient, you can hardcode a color (e.g., hex or rgba values), but use this sparingly.
     */
    color: {
        type: String,
        default: undefined,
    },

    /**
     * The current value of the status, used for two-way binding.
     */
    value: {
        type: String,
        default: '',
    },

    /**
     * The label text to display inside the status component.
     */
    label: {
        type: String,
        default: '',
    },

    /**
     * The variant of the status component.
     * Options include 'default', 'fill', 'outline', or other custom variants.
     */
    variant: {
        type: String as PropType<'fill' | 'outline'>,
        default: undefined,
    },

    /**
     * The sentiment or visual style of the status component.
     * Options include 'primary', 'info', 'success', 'warning', 'critical' or 'neutral'.
     */
    sentiment: {
        type: String as PropType<StatusSentiment>,
        default: undefined,
    },

    /**
     * If true, the status component will be editable, allowing users to select a value from a list.
     */
    editable: {
        type: Boolean,
        default: false,
    },

    /**
     * The list of items available for selection in the editable status component.
     */
    items: {
        type: Array as PropType<Array<EditableStatusItem>>,
        default: () => [],
    },

    /**
     * The count value to display next to the label in the status component.
     */
    count: {
        type: Number,
        default: undefined,
    },

    ...makeMeasureProps(),
    ...makeTooltipProps(),
});

//
// Emits
//
const emit = defineEmits<{
    'update:modelValue': [value: EditableStatusItem];
    'update:menu': [value: boolean];
}>();

//
// State
//
const active = ref(false);

//
// Composables
//
const { measurableStyles } = useMeasure(props);
const { tooltipDirective } = useTooltip(props);

const colorOptions = computed(() => {
    return { background: props.variant !== 'outline' };
});

const { colorClasses, colorStyles } = useColor(props, colorOptions);

//
// Computed
//
const computedTrailingIcon = computed(() => {
    return active.value ? 's-icon-caret-up' : 's-icon-caret-down';
});

const hasCssStyleColor = computed(() => {
    return !props.sentiment && (colorStyles.value.backgroundColor || colorStyles.value.color);
});

const hasCssClassColor = computed(() => {
    return !props.sentiment && colorClasses.value.length > 0;
});

const computedClasses = computed(() => {
    let classes = [
        ...getStatusBaseClasses(props.sentiment),
        ...getStatusVariantClasses(props.variant),
        'wtg-status__root',
        {
            'wtg-status--editable': props.editable,
            'wtg-status--active': active.value,
            'wtg-status--color': hasCssClassColor.value || hasCssStyleColor.value,
        },
    ];
    if (hasCssClassColor.value && props.color) {
        classes = [...classes, ...colorClasses.value];
    }
    return classes;
});

const computedStyle = computed(() => {
    if (hasCssStyleColor.value) {
        return { ...colorStyles.value, borderColor: colorStyles.value.color };
    }

    if (hasCssClassColor.value) {
        return { borderColor: 'currentColor' };
    }

    return {};
});

//
// Watchers
//
watch(
    () => active.value,
    (value) => {
        emit('update:menu', value);
    }
);

//
// Event Handlers
//
function onClickPopoverItem(item: EditableStatusItem) {
    emit('update:modelValue', item);
}

//
// Helpers
//
function getStatusBaseClasses(sentiment?: StatusSentiment) {
    return ['wtg-status', sentiment ? { [`wtg-status--${sentiment}`]: true } : undefined].filter(Boolean);
}

function getStatusVariantClasses(variant?: StatusVariant) {
    return [variant ? { [`wtg-status--${variant}`]: true } : undefined].filter(Boolean);
}

function getStatusClasses(sentiment?: StatusSentiment, variant?: StatusVariant) {
    return [...getStatusBaseClasses(sentiment), ...getStatusVariantClasses(variant)];
}

//
// Lifecycle
//
onUnmounted(() => {
    if (active.value) {
        emit('update:menu', false);
    }
});
</script>

<style lang="scss">
.wtg-status {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: var(--s-padding-xs) var(--s-padding-s);
    font: var(--s-text-sm-strong);
    border-radius: var(--s-radius-xl);

    --status-color: var(--s-neutral-bg-weak-default);
    --status-background: var(--s-neutral-bg-inv-default);

    color: var(--status-color);
    background: var(--status-background);

    &.wtg-status__root {
        position: relative;

        --status-color: var(--s-neutral-bg-weak-default);
        --status-background: var(--s-neutral-bg-inv-default);

        --status-color-hover: var(--s-neutral-txt-inv-hover);
        --status-background-hover: var(--s-neutral-bg-hover);

        --status-color-active: var(--s-neutral-txt-inv-active);
        --status-background-active: var(--s-neutral-bg-active);

        --status-color-hover-outline: var(--s-neutral-txt-hover);
        --status-background-hover-outline: var(--s-neutral-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-neutral-border-weak-hover);

        --status-color-active-outline: var(--s-neutral-txt-weak-active);
        --status-background-active-outline: var(--s-neutral-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-neutral-border-weak-active);

        &.wtg-status--outline {
            &.wtg-status--editable {
                &:active,
                &:hover {
                    color: var(--status-color-hover-outline);
                    background: var(--status-background-hover-outline);
                    border: var(--status-border-hover-outline);
                }
            }
            &.wtg-status--active {
                color: var(--status-color-active-outline);
                background: var(--status-background-active-outline);
                border: var(--status-border-active-outline);
            }
        }
    }

    & > .wtg-status__content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: var(--s-padding-null) var(--s-padding-xs);
    }

    .wtg-status__count {
        font: var(--s-text-sm-default-num);
        color: var(--status-color);
        font-variant-numeric: lining-nums tabular-nums;
        margin-left: var(--s-padding-xs);
    }

    &.wtg-status--outline {
        border-radius: var(--s-radius-xl);
        border: 1px solid var(--s-neutral-border-weak-default);
        background: var(--s-neutral-bg-weak-default);
        color: var(--s-neutral-txt-default);
        --status-color: var(--s-neutral-txt-default);

        &.wtg-status--primary {
            border-color: var(--s-primary-txt-default);
            color: var(--s-primary-txt-default);
            --status-color: var(--s-primary-txt-default);
            background: var(--s-primary-bg-weak-default);
        }

        &.wtg-status--info {
            border-color: var(--s-info-txt-default);
            color: var(--s-info-txt-default);
            --status-color: var(--s-info-txt-default);
            background: var(--s-info-bg-weak-default);
        }

        &.wtg-status--success {
            border-color: var(--s-success-border-weak-default);
            color: var(--s-success-txt-default);
            --status-color: var(--s-success-txt-default);
            background: var(--s-success-bg-weak-default);
        }

        &.wtg-status--warning {
            border-color: var(--s-warning-border-weak-default);
            color: var(--s-warning-txt-default);
            --status-color: var(--s-warning-txt-default);
            background: var(--s-warning-bg-weak-default);
        }

        &.wtg-status--critical {
            border-color: var(--s-error-txt-default);
            color: var(--s-error-txt-default);
            --status-color: var(--s-error-txt-default);
            background: var(--s-error-bg-weak-default);
        }
    }

    &.wtg-status--primary {
        --status-color: var(--s-primary-txt-inv-default);
        --status-background: var(--s-primary-bg-default);

        --status-color-hover: var(--s-primary-txt-inv-hover);
        --status-background-hover: var(--s-primary-bg-hover);

        --status-color-active: var(--s-primary-txt-inv-active);
        --status-background-active: var(--s-primary-bg-active);

        --status-color-hover-outline: var(--s-primary-txt-hover);
        --status-background-hover-outline: var(--s-primary-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-primary-border-weak-hover);

        --status-color-active-outline: var(--s-primary-txt-active);
        --status-background-active-outline: var(--s-primary-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-primary-border-weak-active);
    }

    &.wtg-status--info {
        --status-color: var(--s-info-txt-inv-default);
        --status-background: var(--s-info-bg-default);

        --status-color-hover: var(--s-info-txt-inv-hover);
        --status-background-hover: var(--s-info-bg-hover);

        --status-color-active: var(--s-info-txt-inv-active);
        --status-background-active: var(--s-info-bg-active);

        --status-color-hover-outline: var(--s-info-txt-hover);
        --status-background-hover-outline: var(--s-info-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-info-border-weak-hover);

        --status-color-active-outline: var(--s-info-txt-active);
        --status-background-active-outline: var(--s-info-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-info-border-weak-active);
    }

    &.wtg-status--success {
        --status-color: var(--s-success-txt-inv-default);
        --status-background: var(--s-success-bg-default);

        --status-color-hover: var(--s-success-txt-inv-hover);
        --status-background-hover: var(--s-success-bg-hover);

        --status-color-active: var(--s-success-txt-inv-active);
        --status-background-active: var(--s-success-bg-active);

        --status-color-hover-outline: var(--s-success-txt-hover);
        --status-background-hover-outline: var(--s-success-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-success-border-weak-hover);

        --status-color-active-outline: var(--s-success-txt-active);
        --status-background-active-outline: var(--s-success-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-success-border-weak-active);
    }

    &.wtg-status--warning {
        --status-color: var(--s-warning-txt-inv-default);
        --status-background: var(--s-warning-bg-default);

        --status-color-hover: var(--s-warning-txt-inv-hover);
        --status-background-hover: var(--s-warning-bg-hover);

        --status-color-active: var(--s-warning-txt-inv-active);
        --status-background-active: var(--s-warning-bg-active);

        --status-color-hover-outline: var(--s-warning-txt-hover);
        --status-background-hover-outline: var(--s-warning-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-warning-border-weak-hover);

        --status-color-active-outline: var(--s-warning-txt-active);
        --status-background-active-outline: var(--s-warning-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-warning-border-weak-active);
    }

    &.wtg-status--critical {
        --status-color: var(--s-error-txt-inv-default);
        --status-background: var(--s-error-bg-default);

        --status-color-hover: var(--s-error-txt-inv-hover);
        --status-background-hover: var(--s-error-bg-hover);

        --status-color-active: var(--s-error-txt-inv-active);
        --status-background-active: var(--s-error-bg-active);

        --status-color-hover-outline: var(--s-error-txt-hover);
        --status-background-hover-outline: var(--s-error-bg-weak-hover);
        --status-border-hover-outline: 1px solid var(--s-error-border-weak-hover);

        --status-color-active-outline: var(--s-error-txt-active);
        --status-background-active-outline: var(--s-error-bg-weak-active);
        --status-border-active-outline: 1px solid var(--s-error-border-weak-active);
    }
}

.wtg-status__popover-item {
    padding: var(--s-padding-s);
    display: flex;

    > .wtg-list-item__container {
        gap: var(--s-padding-s);
    }
}

.wtg-status__swatch-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--s-sizing-l);
    width: var(--s-sizing-l);

    > .wtg-status__swatch {
        border-radius: var(--s-sizing-xl);
        height: var(--s-sizing-s);
        width: var(--s-sizing-s);
    }
}
</style>
