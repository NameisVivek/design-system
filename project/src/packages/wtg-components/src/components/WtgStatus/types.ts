export type StatusSentiment = 'primary' | 'info' | 'success' | 'warning' | 'critical' | 'neutral';

export type StatusVariant = 'fill' | 'outline';

export type EditableStatusItem = {
    value: string;
    label: string;
    sentiment: StatusSentiment;
    variant: StatusVariant;
};
