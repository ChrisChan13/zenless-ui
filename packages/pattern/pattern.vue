<template>
  <div :class="['z-pattern', {
    [`z-pattern--${type}`]: type,
    'is-bold': zenless.isBold
  }]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useZenless } from 'zenless-ui/index'
import { patternTypes } from './constants'

defineOptions({
  name: 'ZPattern'
})

const zenless = useZenless()
defineProps({
  type: {
    type: String,
    validator: (v) => patternTypes.includes(v)
  }
})
</script>

<style scoped>
@import './pattern.scss';
</style>