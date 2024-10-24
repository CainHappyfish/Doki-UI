declare function close(): void;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        notificationContainer: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string>;
        default: string;
    };
    message: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('./types.ts').NotificationTypes>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: import('vue').PropType<number>;
        default: number;
    };
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import('vue').PropType<number>;
        default: number;
    };
    id: {
        type: import('vue').PropType<string>;
        default: string;
    };
    onClose: {
        type: import('vue').PropType<() => void>;
        required: boolean;
    };
    onDestroy: {
        type: import('vue').PropType<() => void>;
        required: boolean;
    };
}>, {
    close: typeof close;
    visible: import('vue').Ref<boolean, boolean>;
    bottom: import('vue').ComputedRef<number>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    destroy: () => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string>;
        default: string;
    };
    message: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('./types.ts').NotificationTypes>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: import('vue').PropType<number>;
        default: number;
    };
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import('vue').PropType<number>;
        default: number;
    };
    id: {
        type: import('vue').PropType<string>;
        default: string;
    };
    onClose: {
        type: import('vue').PropType<() => void>;
        required: boolean;
    };
    onDestroy: {
        type: import('vue').PropType<() => void>;
        required: boolean;
    };
}>> & Readonly<{
    onDestroy?: (() => any) | undefined;
}>, {
    type: import('./types.ts').NotificationTypes;
    title: string;
    center: boolean;
    id: string;
    message: string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode);
    icon: string | import('vue').Component;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    showClose: boolean;
    offset: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
