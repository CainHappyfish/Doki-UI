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
    hasChildren?: false | boolean
    children?: cascaderOption[]

}

export interface menuOption {
    /**
     * 选项组
     * */
    options: cascaderOption[]
    /**
     * 是否有子组
     * */
    hasChildren?: boolean


}

export {
    cascaderOption,
    menuOption
}