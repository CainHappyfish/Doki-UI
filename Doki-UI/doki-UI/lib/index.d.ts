import { default as dokiButton } from './components/buttons/dokiButton.vue';
import { default as dokiLink } from './components/links/dokiLink.vue';
import { default as dokiAutoFillInput } from './components/input/dokiAutoFillInput.vue';
import { default as dokiCascader } from './components/cascader/dokiCascader.vue';
import { default as dokiCheckbox } from './components/selector/dokiCheckbox.vue';
import { default as dokiRadio } from './components/selector/dokiRadio.vue';
import { default as dokiCheckboxButton } from './components/selector/dokiCheckboxButton.vue';
import { default as dokiSwitch } from './components/switches/dokiSwitch.vue';
import { default as dokiSlider } from './components/slider/dokiSlider.vue';
import { default as dokiAccordionSelector } from './components/selector/dokiAccordionSelector.vue';
import { default as dokiAvatar } from './components/avatar/dokiAvatar.vue';
import { default as dokiCarousel } from './components/carousel/dokiCarousel.vue';
import { default as dokiCarouselItem } from './components/carousel/dokiCarouselItem.vue';
import { default as dokiAccordion } from './components/carousel/dokiAccordion.vue';
import { default as dokiAccordionItem } from './components/carousel/dokiAccordionItem.vue';
import { default as dokiImage } from './components/image/dokiImage.vue';
import { default as dokiTag } from './components/tag/dokiTag.vue';
import { default as dokiVirtualList } from './components/virtualList/dokiVirtualList.vue';
import { default as dokiVirtualListItem } from './components/virtualList/dokiVirtualListItem.vue';
import { default as dokiPagination } from './components/pagination/dokiPagination.vue';
import { default as dokiUpload } from './components/upload/dokiUpload.vue';
import { default as dokiCard } from './components/card/dokiCard.vue';
import { default as dokiRow } from './components/layout/dokiRow.vue';
import { default as dokiCol } from './components/layout/dokiCol.vue';
import { default as dokiBreadCrumb } from './components/breadCrumb/dokiBreadcrumb.vue';
import { default as dokiPageHeader } from './components/pageHeader/dokiPageHeader.vue';
import { default as dokiBacktop } from './components/backtop/dokiBacktop.vue';
import { default as dokiDivider } from './components/divider/dokiDivider.vue';
import { default as dokiNavbar } from './components/navBar/dokiNavbar.vue';
import { default as dokiDropdownItem } from './components/menus/global/dokiDropdownItem.vue';
import { default as dokiDropdown } from './components/menus/dokiDropdown.vue';
import { default as dokiSteps } from './components/steps/dokiSteps.vue';
import { default as dokiStep } from './components/steps/dokiStep.vue';
import { default as dokiProgress } from './components/progress/dokiProgress.vue';
import { default as dokiAlert } from './components/alert/dokiAlert.vue';
import { default as dokiDialog } from './components/dialog/dokiDialog.vue';
import { default as dokiMessage } from './components/message/index.ts';
import { default as dokiMessagebox } from './components/messageBox/index.ts';
import { default as dokiNotification } from './components/notification/index.ts';
import { App } from 'vue';
import { default as dokiInput } from './components/input/dokiInput.vue';
import { default as dokiTable } from './components/table/dokiTable.vue';
export declare const components: (import('vue').DefineComponent<{
    autocomplete?: Array<string>;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    autocomplete?: Array<string>;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | import('vue').DefineComponent<{
    options: import('./types/input').cascaderOption[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    options: import('./types/input').cascaderOption[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any> | import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (percentage: number) => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onChange?: ((percentage: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any> | import('vue').DefineComponent<{
    data: import('./components/selector/type').Data[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    data: import('./components/selector/type').Data[];
}> & Readonly<{}>, {
    data: import('./components/selector/type').Data[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    currentPage: (pageIndex: number) => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onCurrentPage?: ((pageIndex: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any> | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        percentage: number;
        status?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        percentage: number;
        status?: string;
    }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        percentage: number;
        status?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    percentage: number;
    status?: string;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        content?(_: {}): any;
    };
})) | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        beforeUpload?: (rawFile: File) => boolean;
        onProgress?: (rawFile: File) => any;
        onSuccess?: (response: any, rawFile: File) => any;
        onFail?: (e: Error, rawFile: File) => any;
        onDelete?: (rawFile: File) => any;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        beforeUpload?: (rawFile: File) => boolean;
        onProgress?: (rawFile: File) => any;
        onSuccess?: (response: any, rawFile: File) => any;
        onFail?: (e: Error, rawFile: File) => any;
        onDelete?: (rawFile: File) => any;
    }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        beforeUpload?: (rawFile: File) => boolean;
        onProgress?: (rawFile: File) => any;
        onSuccess?: (response: any, rawFile: File) => any;
        onFail?: (e: Error, rawFile: File) => any;
        onDelete?: (rawFile: File) => any;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    beforeUpload?: (rawFile: File) => boolean;
    onProgress?: (rawFile: File) => any;
    onSuccess?: (response: any, rawFile: File) => any;
    onFail?: (e: Error, rawFile: File) => any;
    onDelete?: (rawFile: File) => any;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        trigger?(_: {}): any;
        description?(_: {}): any;
    };
})) | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        gap?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        gap?: number;
    }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        gap?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    gap?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})) | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        width?: number;
        offset?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        width?: number;
        offset?: number;
    }> & Readonly<{}>, {
        width: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        width?: number;
        offset?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        width: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    width?: number;
    offset?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    width: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})) | import('vue').DefineComponent<{
    items: import('./components/breadCrumb/types').breadCrumbItem[];
    separator?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    items: import('./components/breadCrumb/types').breadCrumbItem[];
    separator?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | import('vue').DefineComponent<{
    navs: import('./components/navBar/type').navItem[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    navs: import('./components/navBar/type').navItem[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        active: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        active: number;
    }> & Readonly<{}>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        active: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    active: number;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})) | ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (modelValue: boolean) => any;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<{
        modelValue?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    }>, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    modelValue?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => any;
}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        content?(_: {}): any;
    };
})) | import('vue').DefineComponent<{
    prefixIcon?: string;
    suffixIcon?: string;
    inputId: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    prefixIcon?: string;
    suffixIcon?: string;
    inputId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any> | import('vue').DefineComponent<{
    tableItems: Record<string, string | number>[];
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    tableItems: Record<string, string | number>[];
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>)[];
export declare function install(app: App): void;
export default install;
export { dokiMessage, dokiMessagebox, dokiNotification, dokiButton, dokiLink, dokiAutoFillInput, dokiCascader, dokiCheckbox, dokiRadio, dokiCheckboxButton, dokiSwitch, dokiSlider, dokiAccordionSelector, dokiAvatar, dokiImage, dokiCarousel, dokiCarouselItem, dokiAccordion, dokiAccordionItem, dokiTag, dokiVirtualList, dokiVirtualListItem, dokiPagination, dokiUpload, dokiCard, dokiRow, dokiCol, dokiBreadCrumb, dokiPageHeader, dokiBacktop, dokiDivider, dokiNavbar, dokiDropdown, dokiDropdownItem, dokiSteps, dokiStep, dokiProgress, dokiAlert, dokiDialog, dokiInput, dokiTable, };
