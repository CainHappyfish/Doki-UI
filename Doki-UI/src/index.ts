import dokiButton from "./components/buttons/dokiButton.vue"
import dokiLink from "./components/links/dokiLink.vue";
import dokiAutoFillInput from "./components/input/dokiAutoFillInput.vue"
import dokiCascader from "./components/cascader/dokiCascader.vue"
import dokiCheckbox from "./components/selector/dokiCheckbox.vue";
import dokiRadio from "./components/selector/dokiRadio.vue";
import dokiCheckboxButton from "./components/selector/dokiCheckboxButton.vue";
import dokiSwitch from "./components/switches/dokiSwitch.vue"
import dokiSlider from "./components/slider/dokiSlider.vue"
import dokiAccordionSelector from "./components/selector/dokiAccordionSelector.vue";
import dokiAvatar from "./components/avatar/dokiAvatar.vue";



import type { App } from 'vue'

const components = [
    dokiButton,
    dokiLink,
    dokiAutoFillInput,
    dokiCascader,
    dokiCheckbox,
    dokiRadio,
    dokiCheckboxButton,
    dokiSwitch,
    dokiSlider,
    dokiAccordionSelector,
    dokiAvatar

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
