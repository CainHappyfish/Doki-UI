export interface cascaderOption {
    /**
     * 要填入输入框的值
     * */
    value: string
    /**
     * 级联菜单标签
     * */
    label: string
    /**
     * 子菜单，可选
     * */
    children?: cascaderOption[]

}

export interface menuOption {
    /**
     * 要填入输入框的值
     * */
    value: string
    /**
     * 级联菜单标签
     * */
    label: string


}

export {
    cascaderOption,
    menuOption
}