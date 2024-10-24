declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('./types.ts').MessageBoxType>;
        default: string;
    };
    message: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
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
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showCancelButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showConfirmButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    cancelButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    confirmButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    rejectCallback: {
        type: FunctionConstructor;
        required: boolean;
    };
    resolveCallback: {
        type: FunctionConstructor;
        required: boolean;
    };
}>, {
    visible: import('vue').Ref<boolean, boolean>;
    onConfirm: () => void;
    onCancel: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('./types.ts').MessageBoxType>;
        default: string;
    };
    message: {
        type: import('vue').PropType<string | import('vue').VNode | (() => import('vue').VNode)>;
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
    center: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showCancelButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showConfirmButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    cancelButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    confirmButtonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    rejectCallback: {
        type: FunctionConstructor;
        required: boolean;
    };
    resolveCallback: {
        type: FunctionConstructor;
        required: boolean;
    };
}>> & Readonly<{}>, {
    type: import('./types.ts').MessageBoxType;
    title: string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode);
    center: boolean;
    message: string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode);
    icon: string | import('vue').Component;
    dangerouslyUseHTMLString: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
    cancelButtonText: string;
    confirmButtonText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
