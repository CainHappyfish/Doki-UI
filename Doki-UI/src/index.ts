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
import dokiCarousel from "./components/carousel/dokiCarousel.vue"
import dokiCarouselItem from "./components/carousel/dokiCarouselItem.vue"
import dokiAccordion from "./components/carousel/dokiAccordion.vue"
import dokiImage from "./components/image/dokiImage.vue";
import dokiTag from "./components/tag/dokiTag.vue";
import dokiVirtualList from "./components/virtualList/dokiVirtualList.vue";


import type { App } from 'vue'
import dokiVirtualListItem from "./components/virtualList/dokiVirtualListItem.vue";
import dokiPagination from "./components/pagination/dokiPagination.vue";
import dokiAccordionItem from "./components/carousel/dokiAccordionItem.vue";


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
    dokiAvatar,
    dokiImage,
    dokiCarousel,
    dokiCarouselItem,
    dokiAccordion,
    dokiAccordionItem,
    dokiTag,
    dokiVirtualList,
    dokiVirtualListItem,
    dokiPagination

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
