import dokiButton from "./components/buttons/dokiButton.vue"
import dokiLink from "./components/links/dokiLink.vue";
import dokiInput from "./components/input/dokiInput.vue"
import dokiCascader from "./components/cascader/dokiCascader.vue"

import type { App } from 'vue'

const components = [
    dokiButton,
    dokiLink,
    dokiInput,
    dokiCascader
]

export function install(app: App): void {
    components.forEach(component => {

        if (component.__name != null) {
            app.component(component.__name, component)
        }
    })

}

export default {
    install,
    ...components
}
