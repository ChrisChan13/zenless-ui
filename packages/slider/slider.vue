<template>
  <div :class="['z-slider', {
    'is-disabled': disabled
  }]">
    <div ref="slider" class="z-slider__rail" @mousedown="onSliderDown">
      <div class="z-slider__track" :style="{
        width: currentPosition
      }"></div>
      <component
        :is="tooltip ? Tooltip : 'div'"
        :class="['z-slider__handle', {
          'dragging': dragging
        }]"
        :content="`${modelValue}`"
        :style="{
          left: currentPosition
        }"
        @mousedown="onButtonDown"
      ></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Tooltip from '../tooltip'

defineOptions({
  name: 'ZSlider'
})

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  disabled: Boolean,
  step: {
    type: Number,
    default: 1
  },
  tooltip: {
    type: [Boolean, Function]
  }
})

const slider = ref(null)
const dragging = ref(false)
const modelValue = defineModel({
  type: Number,
  default: 0
})
const currentPosition = computed(() => {
  let value = ((modelValue.value - props.min) / (props.max - props.min)) * 100;
  if (value < 0) value = 0
  else if (value > 100) value = 100
  return `${value}%`
})
const steps = computed(() => (props.max - props.min) / props.step)
const precision = computed(() => Math.max(...[props.max, props.min, props.step].map((item) => {
  const [, decimal] = `${item}`.split('.')
  return decimal ? decimal.length : 0
})))
const emit = defineEmits(['change'])

const setPosition = (clientX) => {
  const sliderOffsetLeft = slider.value.getBoundingClientRect().left
  const sliderSize = slider.value.clientWidth
  let value = (clientX - sliderOffsetLeft) / sliderSize * 100
  if (value < 0) value = 0
  else if (value > 100) value = 100
  modelValue.value = +((props.min + Math.round(steps.value * value / 100) * props.step).toFixed(precision.value))
}
const onSliderDown = (e) => {
  if (props.disabled) return
  const clientX = e.touches?.item(0)?.clientX ?? e.clientX
  setPosition(clientX)
  emit('change', modelValue.value)
}
const onDragging = (e) => {
  const clientX = e.touches?.item(0)?.clientX ?? e.clientX
  setPosition(clientX)
}
const onDragEnd = () => {
  dragging.value = false
  emit('change', modelValue.value)
  window.removeEventListener('mousemove', onDragging)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('contextmenu', onDragEnd)
}
const onButtonDown = (e) => {
  if (props.disabled) return
  dragging.value = true
  e.preventDefault()
  window.addEventListener('mousemove', onDragging)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('contextmenu', onDragEnd)
}
</script>

<style scoped>
@import './slider.scss';
</style>