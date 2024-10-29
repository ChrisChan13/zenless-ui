<template>
  <div :class="['z-progress', {
    'z-progress--circle': type === 'circle',
    [`z-progress--${progressType}`]: progressType,
    'is-bold': zenless.isBold
  }]">
    <div v-if="type === 'circle'" class="z-progress__circle" :style="circleStyle">
      <div class="z-progress__content" :style="contentStyle">
        <slot></slot>
      </div>
    </div>
    <div v-else class="z-progress__rail">
      <div class="z-progress__track" :style="trackStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { zenlessColors } from '../constants'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZProgress'
})

const zenless = useZenless()
const props = defineProps({
  type: String,
  size: [Number, String],
  percent: Number,
  color: String
})

const progressType = computed(() => {
  if (zenlessColors.includes(props.color)) {
    return props.color
  }
})
const circleStyle = computed(() => {
  const style = {}
  props.size && Object.assign(style, {
    width: `${props.size}${typeof props.size === 'number' ? 'px' : ''}`,
    height: `${props.size}${typeof props.size === 'number' ? 'px' : ''}`
  })
  props.color && !zenlessColors.includes(props.color) && Object.assign(style, {
    color: props.color
  })
  props.percent && Object.assign(style, {
    backgroundImage: `conic-gradient(currentColor ${props.percent}%, #222 ${props.percent}%)`
  })
  return style
})
const contentStyle = computed(() => {
  const style = {}
  props.color && !zenlessColors.includes(props.color) && Object.assign(style, {
    background: props.color
  })
  return style
})
const trackStyle = computed(() => {
  const style = {}
  props.color && !zenlessColors.includes(props.color) && Object.assign(style, {
    background: props.color,
    backgroundImage: `linear-gradient(90deg, transparent, #fff), linear-gradient(90deg, transparent, ${props.color}), linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3))`
  })
  props.percent && Object.assign(style, {
    width: `${props.percent}%`
  })
  return style
})
</script>

<style scoped>
@import './progress.scss';
</style>