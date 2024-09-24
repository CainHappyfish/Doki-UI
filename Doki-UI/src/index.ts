import dokiButton from "./components/buttons/doki-button.vue"

import type { App } from 'vue'

const components = [
    dokiButton
]

export function install(app: App): void {
    components.forEach(component => {
        if (component.name != null) {
            app.component(component.name, component)
        }
    })
}

export default {
    install
}

export {
    dokiButton,
}