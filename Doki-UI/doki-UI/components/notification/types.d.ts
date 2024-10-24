import { ExtractPropTypes, PropType, Component, VNode } from 'vue';
export declare const definePropType: <T>(val: any) => PropType<T>;
export type NotificationTypes = 'default' | 'success' | 'info' | 'warning' | 'danger';
export declare const NotificationProps: {
    title: {
        type: PropType<string>;
        default: string;
    };
    message: {
        type: PropType<string | VNode | (() => VNode)>;
        default: string;
    };
    type: {
        type: PropType<NotificationTypes>;
        default: string;
    };
    icon: {
        type: PropType<string | Component>;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: PropType<number>;
        default: number;
    };
    center: {
        type: PropType<boolean>;
        default: boolean;
    };
    showClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: PropType<number>;
        default: number;
    };
    id: {
        type: PropType<string>;
        default: string;
    };
    onClose: {
        type: PropType<() => void>;
        required: boolean;
    };
    onDestroy: {
        type: PropType<() => void>;
        required: boolean;
    };
};
export type NotificationOptions = ExtractPropTypes<typeof NotificationProps>;
export interface NotificationHandler {
    /**
     * @description close the Notification
     */
    close: () => void;
}
