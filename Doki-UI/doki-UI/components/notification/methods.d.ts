import { NotificationOptions } from './types.ts';
declare const notification: (options: Partial<NotificationOptions>) => {
    close: () => void;
};
export default notification;
