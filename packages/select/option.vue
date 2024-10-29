<template>
  <component
    :is="DropdownItem"
    :disabled="disabled"
    :command="value"
    :class="[{
      'selected': isSelected
    }]"
  >
    <slot v-if="$slots.default"></slot>
    <span v-else>{{ label }}</span>
  </component>
</template>

<script setup>
import { inject, computed, watch, onUnmounted } from 'vue'
import DropdownItem from '../dropdown-item'
import { selectContextKey } from './constants'
import { generateId, isValidValue } from '@src/utils'

defineOptions({
  name: 'ZOption'
})

const props = defineProps({
  label: [String, Number, Boolean],
  value: [String, Number, Boolean],
  disabled: Boolean
})
const value = computed(() => props.value ?? generateId())
const select = inject(selectContextKey)
const isSelected = computed(() => value.value === select.selected.value)

watch(() => [value.value, props.label], (value, oldValue = []) => {
  const [key, val] = value
  Object.assign(select.options.value, {
    [key]: val ?? key
  })
  const [oldKey] = oldValue
  if (isValidValue(oldKey) && oldKey !== key) delete select.options.value[oldKey]
}, {
  immediate: true
})
onUnmounted(() => {
  delete select.options.value[value.value]
})
</script>

<style scoped>
@import './select.scss';
</style>