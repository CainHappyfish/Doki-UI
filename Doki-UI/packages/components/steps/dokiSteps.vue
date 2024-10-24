<script setup lang="ts">
import {computed, nextTick, onMounted, ref, useAttrs, watch} from "vue";

const props = defineProps<{
  active: number
}>()

const stepsContainer = ref<HTMLElement>()

const type = ref(useAttrs().type ? "doki-steps__" + useAttrs().type : "doki-steps__horizontal")

const currentStep = computed(() => props.active - 1)

onMounted(() => {
  nextTick(() => {
    const containers = document.querySelectorAll(".doki-steps") as unknown as HTMLElement[];
    for (const item of containers) {
      const steps = item.querySelectorAll(".doki-style") as unknown as HTMLElement[];
      const lastProgress = steps[steps.length - 1].querySelector(".doki-step__header .style") as HTMLElement;
      lastProgress.style.display = "none";
    }

    // 在 nextTick 中执行 props.active 的监听
    if (stepsContainer.value) {
      watch(() => props.active, () => {

        const steps = stepsContainer.value?.querySelectorAll(".doki-style") as unknown as HTMLElement[];
        // console.log(currentStep.value, steps);
        if (props.active < steps.length) {
          steps[props.active]?.querySelector(".doki-step__header .icon")?.classList.add("style-wait")
        }


        if (steps[currentStep.value] && currentStep.value < steps.length) {
          if (currentStep.value === 0) {
            steps[currentStep.value].querySelector(".doki-step__header .icon")?.classList.remove("style-wait")
            steps[currentStep.value].querySelector(".doki-step__header .icon")?.classList.add("style-active")
          } else if (currentStep.value > 0 && currentStep.value < props.active) {
            // steps[props.active].classList.add("style-active");
            steps[currentStep.value].querySelector(".doki-step__header .icon")?.classList.remove("style-wait")
            steps[currentStep.value].querySelector(".doki-step__header .icon")?.classList.add("style-active")
            steps[currentStep.value - 1].querySelector(".doki-step__header .style")?.classList.add("style-active")
          }

        }
      }, { immediate: true });
    }
  });
});



</script>

<template>
  <div class="doki-steps" ref="stepsContainer" :class="type">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "style/steps";
</style>