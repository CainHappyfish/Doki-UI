import {MessageBox, MessageBoxOptions} from "./types.ts";
import MessageboxConstructor from "./dokiMessagebox.vue";
import {createVNode, isVNode, render} from "vue";
import {isFunction} from "@vue/shared";



function createMessageBox(options: Partial<MessageBoxOptions>) {
    const container = document.createElement('div')

    const props = {
        ...options,

    }

    const vnode = createVNode(
        MessageboxConstructor,
        props,
        isFunction(props.message) || isVNode(props.message)
            ? {
                default: isFunction(props.message)
                    ? props.message
                    : () => props.message
            }
            : null
    )

    render(vnode, container)
    document.body.append(container.firstElementChild!)

    const vm = vnode.component!

    const handler = {
        close: () => {
            vm.exposed!.visible.value = false
        }
    }

    return {
        vnode,
        vm,
        handler,
    }
}
const messageBox: MessageBox = {
    alert: (title: string, message: string, option?: any): Promise<void> => {

        return new Promise((resolve) => {
            const options: Partial<MessageBoxOptions> = {
                ...option,
                title,
                message,
                type: "alert",
                resolveCallback: resolve

            };
            createMessageBox(options);

        });
    },

    confirm: (title: string, message: string, option?: any): Promise<boolean> => {

        return new Promise((resolve, reject) => {
            const options: Partial<MessageBoxOptions> = {
                ...option,
                title,
                message,
                type: "confirm",
                rejectCallback: reject,
                resolveCallback: resolve

            };
            createMessageBox(options);

        });
    },

    prompt: (title: string, message: string, option?: any): Promise<boolean> => {

        return new Promise((resolve, reject) => {
            const options: Partial<MessageBoxOptions> = {
                ...option,
                title,
                message,
                type: "prompt",
                rejectCallback: reject,
                resolveCallback: resolve

            };
            createMessageBox(options);

        });
    }




}

export default messageBox