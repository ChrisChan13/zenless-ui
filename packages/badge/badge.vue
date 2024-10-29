<template>
  <div :class="['z-badge', {
    'is-bold': zenless.isBold,
    'z-badge--default': !type,
    [`z-badge--${type}`]: type,
    'z-badge--dot': isDot
  }]">
    <slot></slot>
    <sup class="z-badge__content">{{ isDot ? '' : value }}</sup>
  </div>
</template>

<script setup>
import { useZenless } from 'zenless-ui/index'
import { badgeTypes } from './constants'

defineOptions({
  name: 'ZBadge'
})

const zenless = useZenless()
defineProps({
  type: {
    type: String,
    validator: (v) => badgeTypes.includes(v)
  },
  isDot: Boolean,
  value: [String, Number]
})
</script>

<style scoped>
@import './badge.scss';
</style>