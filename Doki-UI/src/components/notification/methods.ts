import { isFunction } from '@vue/shared';
import {createVNode, isVNode, render} from "vue";
import NotificationConstructor from "./dokiNotification.vue"
import {NotificationOptions} from "./types.ts";
import {instances} from "./instances.ts";
import dokiNotification from "./dokiNotification.vue";

let seed = 1

const notification = (options: Partial<NotificationOptions>) => {
    const instance = createNotification(options)

    instances.push(instance)

    // console.log('container', instance.id);
    return instance.handler;
}

function createNotification(options: Partial<NotificationOptions>) {
    const id = `notification_${seed++}`;
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

    // 创建 Notification 实例
    const vnode = createVNode(
        NotificationConstructor,
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

export default notification as dokiNotification