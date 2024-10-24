import { ComponentInternalInstance, VNode } from 'vue';
import { MessageHandler } from './types.ts';
export type MessageContext = {
    id: string;
    vnode: VNode;
    handler: MessageHandler;
    vm: ComponentInternalInstance;
};
export declare const instances: MessageContext[];
export declare const getInstance: (id: string) => {
    cur: MessageContext;
    prev: MessageContext | undefined;
};
export declare const getLastOffset: (id: string) => number;
export declare const getOffsetOrSpace: (id: string, offset: number) => number;
