<template>
  <div :class="['z-dropdown-item', {
    'is-disabled': disabled,
    'is-bold': zenless.isBold
  }]" @click.stop="handleClick">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { dropdownContextKey } from './constants'
import { generateId } from '@src/utils'

defineOptions({
  name: 'ZDropdownItem'
})

const zenless = useZenless()
const props = defineProps({
  command: [String, Number],
  disabled: Boolean
})
const command = computed(() => props.command ?? generateId())
const dropdown = inject(dropdownContextKey)

const handleClick = () => {
  if (props.disabled) return
  dropdown.handleItemClick(command.value)
}
</script>

<style scoped>
@import './dropdown.scss';
</style>