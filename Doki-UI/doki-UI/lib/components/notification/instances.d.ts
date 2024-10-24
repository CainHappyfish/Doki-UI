import { ComponentInternalInstance, VNode } from 'vue';
import { NotificationHandler } from './types.ts';
export type NotificationContext = {
    id: string;
    vnode: VNode;
    handler: NotificationHandler;
    vm: ComponentInternalInstance;
};
export declare const instances: NotificationContext[];
export declare const getInstance: (id: string) => {
    cur: NotificationContext;
    prev: NotificationContext | undefined;
};
export declare const getLastOffset: (id: string) => number;
export declare const getOffsetOrSpace: (id: string, offset: number) => number;
