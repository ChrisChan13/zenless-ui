<template>
  <div :class="['z-message', {
    [`z-message--${type}`]: type
    // 'is-bold': zenless.isBold
  }]">
    <div class="z-message__content">
      <slot v-if="$slots.default"></slot>
      <span v-else>{{ message }}</span>
    </div>
  </div>
</template>

<script setup>
// import { useZenless } from 'zenless-ui/index'
import { messageTypes } from './constants'

defineOptions({
  name: 'ZMessage'
})

// const zenless = useZenless()
defineProps({
  message: [String, Object],
  type: {
    type: String,
    validator: (v) => messageTypes.includes(v)
  }
})
</script>

<style scoped>
@import './message.scss';
</style>