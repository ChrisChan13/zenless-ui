<template>
  <div class="z-radio-group">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import { radioSizes, radioModes, radioGroupContextKey } from './constants'

defineOptions({
  name: 'ZRadioGroup'
})

const props = defineProps({
  disabled: Boolean,
  size: {
    type: String,
    validator: (v) => radioSizes.includes(v)
  },
  min: Number,
  max: Number,
  mode: {
    type: String,
    default: 'radio',
    validator: (v) => radioModes.includes(v)
  },
})

const modelValue = defineModel({
  type: [String, Number, Boolean, Array]
})

const emit = defineEmits(['change'])
const changeEvent = (value) => {
  modelValue.value = value
  emit('update:modelValue', value)
  emit('change', value)
}

provide(radioGroupContextKey, {
  modelValue,
  props,
  changeEvent
})
</script>

<style scoped>
@import './radio.scss';
</style>