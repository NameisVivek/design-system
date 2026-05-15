// JEST - stubs
import '../../../stubs';

// STYLES
import 'floating-vue/dist/style.css';
import 'vuetify/styles';
import './styles/components/styles.css';
import './styles/css/styles.css';
import './styles/icons/index.css';

// COMPONENTS
export * from './components';

// COMPOSABLES
export * from './composables/application';
export * from './composables/binding';
export * from './utils/cspNonce';
export * from './composables/cssVariables';
export * from './composables/global';
export * from './composables/display';
export * from './composables/framework';
export * from './composables/layoutGridColumn';
export * from './composables/locale';
export * from './composables/notifications';
export * from './composables/slots';
export * from './composables/theme';
export * from './composables/tooltip';
export * from './composables/object-url';

// FRAMEWORK TYPES
export * from './components/framework/types';

// LANGUAGE
export * from './language';

// VUETIFY COMPONENTS
export * from 'vuetify/components';
export * from './theme/types';

// THEME
import supplyTheme from './theme/presets/supply';
import wiseTechTheme from './theme/presets/wisetech';

export { supplyTheme, wiseTechTheme };

// ENUMS
export enum AppearanceType {
    Light = 'light',
    Dark = 'dark',
    Muted = 'muted',
}
export enum FrameworkType {
    Default = '',
    Mobile = 'mobile',
}
export enum SortDirection {
    Ascending = 'asc',
    Descending = 'desc',
}
export enum CurrentNotificationType {
    Click = 'click',
    MouseOver = 'mouseover',
    MouseOut = 'mouseout',
}

// DEFAULT
import WtgUi from './WtgUi';
export default WtgUi;
