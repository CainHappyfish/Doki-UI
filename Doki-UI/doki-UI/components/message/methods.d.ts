import { MessageOptions } from './types.ts';
declare const message: (options: Partial<MessageOptions>) => {
    close: () => void;
};
export default message;
