import { cascaderOption } from '../../../types';
declare const _default: import('vue').DefineComponent<{
    options: cascaderOption[];
    level?: number;
    selected: Map<number, string>;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string, label: string, level: number, selected: Map<number, string>) => any;
}, string, import('vue').PublicProps, Readonly<{
    options: cascaderOption[];
    level?: number;
    selected: Map<number, string>;
}> & Readonly<{
    onChange?: ((value: string, label: string, level: number, selected: Map<number, string>) => any) | undefined;
}>, {
    level: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
