import dokiButton from "./components/buttons/dokiButton.vue"
import dokiLink from "./components/links/dokiLink.vue";
import dokiAutoFillInput from "./components/input/dokiAutoFillInput.vue"
import dokiCascader from "./components/cascader/dokiCascader.vue"
import dokiCheckbox from "./components/selector/dokiCheckbox.vue";
import dokiRadio from "./components/selector/dokiRadio.vue";
import dokiCheckboxButton from "./components/selector/dokiCheckboxButton.vue";
<<<<<<< Updated upstream
import dokiSwitch from "./components/switches/dokiSwitch.vue"
import dokiSlider from "./components/slider/dokiSlider.vue"
=======
import dokiAccordionSelector from "./components/selector/dokiAccordionSelector.vue";
import dokiSwitch from "./components/dokiSwitch.vue"
>>>>>>> Stashed changes

import type { App } from 'vue'

const components = [
    dokiButton,
    dokiLink,
    dokiAutoFillInput,
    dokiCascader,
    dokiCheckbox,
    dokiRadio,
    dokiCheckboxButton,
<<<<<<< Updated upstream
    dokiSwitch,
    dokiSlider
=======
    dokiAccordionSelector,
    dokiSwitch
>>>>>>> Stashed changes
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
