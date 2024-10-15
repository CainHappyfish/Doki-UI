import {ExtractPropTypes, PropType} from "vue";
import {definePropType} from "../message/types.ts";

// export type Action = 'confirm' | 'close' | 'cancel'
export type MessageBoxType = '' | 'prompt' | 'alert' | 'confirm'
// export type inputTypes = "text" | "number" | keyword

export interface MessageBox {
    alert: (title: string, message: string) => Promise<void>
    confirm: (title: string, message: string) => Promise<boolean>
}

export const messageBoxProps = {
    title: {
        type: [String, Object, Function] as PropType<
            string | VNode | (() => VNode)
        >,
        default: 'Title'
    },
    type: {
        type: String as PropType<MessageBoxType>,
        default: 'alert'
    },
    message: {
        type: [String, Object, Function] as PropType<
            string | VNode | (() => VNode)
        >,
        default: 'This is a message.'
    },
    icon: {
        type: [String, Object, Function] as PropType<string | Component>,
        default: ''
    },
    dangerouslyUseHTMLString: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    center: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    showCancelButton: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    showConfirmButton: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    cancelButtonText: {
        type: String as PropType<string>,
        default: 'cancel'
    },
    confirmButtonText: {
        type: String as PropType<string>,
        default: 'confirm'
    },
    rejectCallback: {
        type: definePropType<((value: string, action: Action) => any)
            | ((action: Action) => any)>(Function),
        required: false
    },
    resolveCallback: {
        type: definePropType<((value: string, action: Action) => any)
            | ((action: Action) => any)>(Function),
        required: false
    },


}


export type MessageBoxOptions = ExtractPropTypes<typeof messageBoxProps>