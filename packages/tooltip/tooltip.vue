<template>
  <div :class="['z-tooltip', {
    [`at-${placement}`]: placement,
    'is-visible': visible,
    'is-disabled': disabled
  }]">
    <slot></slot>
    <div class="z-tooltip__arrow"></div>
    <div :class="['z-tooltip__popper', { 'is-bold': zenless.isBold }]">
      <slot v-if="$slots.content" name="content"></slot>
      <span v-else>{{ content }}</span>
    </div>
  </div>
</template>

<script setup>
import { useZenless } from 'zenless-ui/index'
import { tooltipPlacements } from './constants'

defineOptions({
  name: 'ZTooltip'
})

const zenless = useZenless()
const props = defineProps({
  content: String,
  placement: {
    type: String,
    validator: (v) => tooltipPlacements.includes(v)
  },
  visible: Boolean,
  disabled: Boolean
})
</script>

<style scoped>
@import './tooltip.scss';
</style>