declare function __VLS_template(): {
    slots: {
        trigger?(_: {}): any;
        description?(_: {}): any;
    };
    refs: {
        fileInput: HTMLInputElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    beforeUpload?: (rawFile: File) => boolean;
    onProgress?: (rawFile: File) => any;
    onSuccess?: (response: any, rawFile: File) => any;
    onFail?: (e: Error, rawFile: File) => any;
    onDelete?: (rawFile: File) => any;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    beforeUpload?: (rawFile: File) => boolean;
    onProgress?: (rawFile: File) => any;
    onSuccess?: (response: any, rawFile: File) => any;
    onFail?: (e: Error, rawFile: File) => any;
    onDelete?: (rawFile: File) => any;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
