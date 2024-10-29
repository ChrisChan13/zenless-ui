<template>
  <form :class="['z-form', {
    'is-inline': inline,
    'is-bold': zenless.isBold
  }]">
    <slot></slot>
  </form>
</template>

<script setup>
import { provide } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { formLabelPositions, formContextKey } from './constants'

defineOptions({
  name: 'ZForm'
})

const props = defineProps({
  inline: Boolean,
  labelWidth: [String, Number],
  labelPosition: {
    type: String,
    validator: (v) => formLabelPositions.includes(v)
  }
})

const zenless = useZenless()

provide(formContextKey, {
  props,
})
</script>

<style scoped>
@import './form.scss';
</style>