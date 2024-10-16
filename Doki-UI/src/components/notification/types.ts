import {ExtractPropTypes, PropType, Component, VNode} from "vue";

export const definePropType = <T>(val: any): PropType<T> => val;
export type NotificationTypes = 'default' | 'success' | 'info' | 'warning' | 'danger'

export const NotificationProps = {
    title: {
        type: String as PropType<string>,
        default: 'Notification'
    },
    message: {
        type: [String, Object, Function] as PropType<
            string | VNode | (() => VNode)
        >,
        default: ''
    },
    type: {
        type: String as PropType<NotificationTypes>,
        default: 'default'
    },
    icon: {
        type: [String, Object, Function] as PropType<string | Component>,
        default: ''
    },
    dangerouslyUseHTMLString: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    duration: {
        type: Number as PropType<number>,
        default: 3000
    },
    center: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    showClose: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    offset: {
        type: Number as PropType<number>,
        default: 16
    },
    id: {
        type: String as PropType<string>,
        default: ''
    },
    onClose: {
        type: definePropType<() => void>(Function),
        required: false
    },
    onDestroy: {
        type: definePropType<() => void>(Function),
        required: false
    }
};

export type NotificationOptions = ExtractPropTypes<typeof NotificationProps>;

export interface NotificationHandler {
    /**
     * @description close the Notification
     */
    close: () => void;
}
