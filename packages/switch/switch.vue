<template>
  <label :class="['z-switch', {
    'is-bold': zenless.isBold,
    'is-checked': modelValue,
    'is-disabled': disabled
  }]">
    <span class="z-switch__label">{{ modelValue ? 'ON' : 'OFF' }}</span>
    <span class="z-switch__handle"></span>
    <input
      type="checkbox"
      class="z-switch__input"
      tabindex="-1"
      :name="name"
      :value="actualValue"
      v-model="modelValue"
      :disabled="disabled"
      @change="handleChange"
    >
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { generateId } from '@src/utils'

defineOptions({
  name: 'ZSwitch'
})

const zenless = useZenless()
const props = defineProps({
  value: [String, Number],
  name: String,
  disabled: Boolean
})

const actualValue = computed(() => props.value ?? generateId())
const modelValue = defineModel({
  type: Boolean
})

const emit = defineEmits(['change'])
const handleChange = () => {
  emit('change', modelValue.value)
}
</script>

<style scoped>
@import './switch.scss';
</style>