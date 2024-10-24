import { ExtractPropTypes, PropType, Component, VNode } from 'vue';
export type Action = 'confirm' | 'close' | 'cancel';
export type MessageBoxType = '' | 'prompt' | 'alert' | 'confirm';
export interface MessageBox {
    alert: (title: string, message: string, option?: any) => Promise<void>;
    confirm: (title: string, message: string, option?: any) => Promise<boolean>;
    prompt: (title: string, message: string, option?: any) => Promise<boolean>;
}
export declare const messageBoxProps: {
    title: {
        type: PropType<string | VNode | (() => VNode)>;
        default: string;
    };
    type: {
        type: PropType<MessageBoxType>;
        default: string;
    };
    message: {
        type: PropType<string | VNode | (() => VNode)>;
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
    center: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCancelButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    showConfirmButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    cancelButtonText: {
        type: PropType<string>;
        default: string;
    };
    confirmButtonText: {
        type: PropType<string>;
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
};
export type MessageBoxOptions = ExtractPropTypes<typeof messageBoxProps>;
