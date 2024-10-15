import { isFunction } from '@vue/shared';
import {createVNode, isVNode, render} from "vue";
import MessageConstructor from "./dokiMessage.vue"
import {ButtonProps} from "./types.ts";
import {instances, MessageContext} from "./instance.ts";
import dokiMessage from "./dokiMessage.vue";

let seed = 1

const message = (options: Partial<ButtonProps>) => {
    const instance = createMessage(options)

    instances.push(instance)

    // console.log('container', instance.id);
    return instance.handler;
}

function createMessage(options: Partial<ButtonProps>) {
    const id = `message_${seed++}`;
    const container = document.createElement('div')

    const props = {
        ...options,
        id,
        onClose: () => {
            if (options.onClose) {
                options.onClose()
            }
        },
        onDestroy: () => {
            // 删除实例
            const index = instances.findIndex(instance => instance.id === id)
            instances.splice(index, 1)
            render(null, container)
        }
    }

    // 创建 message 实例
    const vnode = createVNode(
        MessageConstructor,
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
        id,
        vnode,
        vm,
        handler
    };

}

export default message as dokiMessage