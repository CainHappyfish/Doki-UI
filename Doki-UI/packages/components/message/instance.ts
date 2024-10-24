import {
    shallowReactive,
    type ComponentInternalInstance,
    type VNode
} from 'vue';
import type { MessageHandler } from './types.ts';

export type MessageContext = {
    id: string
    vnode: VNode
    handler: MessageHandler
    vm: ComponentInternalInstance
};

export const instances: MessageContext[] = shallowReactive([])

export const getInstance = (id: string) => {
    const index = instances.findIndex(instance => instance.id === id)
    const cur = instances[index]
    let prev: MessageContext | undefined
    if (index > 0) {
        prev = instances[index - 1]
    }
    return {cur, prev}
}

export const getLastOffset = (id: string): number => {
    const { prev } = getInstance(id)

    if (!prev) { return 0 }
    return prev.vm.exposed!.bottom.value

}

export const getOffsetOrSpace = (id: string, offset: number) => {
    const idx = instances.findIndex((instance) => instance.id === id)
    return idx > 0 ? 20 : offset
};