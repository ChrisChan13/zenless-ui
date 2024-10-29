<template>
  <i :class="['z-icon', {
    [`z-icon-${name}`]: name,
    [`z-icon--${iconType}`]: iconType
  }]" :style="iconStyle"></i>
</template>

<script setup>
import { computed } from 'vue'
import { zenlessColors } from '../constants'

defineOptions({
  name: 'ZIcon'
})

const props = defineProps({
  name: String,
  size: [Number, String],
  color: String
})

const iconType = computed(() => {
  if (zenlessColors.includes(props.color)) {
    return props.color
  }
})
const iconStyle = computed(() => {
  const style = {}
  props.size && Object.assign(style, {
    fontSize: `${props.size}${typeof props.size === 'number' ? 'px' : ''}`,
  })
  props.color && !zenlessColors.includes(props.color) && Object.assign(style, {
    color: props.color
  })
  return style
})
</script>

<style scoped>
@import './icon.scss';
</style>