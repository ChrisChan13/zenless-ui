<template>
  <div :class="[
    'z-collapse-item',
    {
      'is-bold': zenless.isBold,
      'z-collapse-item--plain': collapse.plain,
      'z-collapse-item--active': isActive,
      'z-collapse-item--disabled': disabled
    }
  ]">
    <div class="z-collapse-item__header" @click="handleClick">
      <div class="z-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <i class="z-icon-caret-bottom"></i>
    </div>
    <div class="z-collapse-item__wrap">
      <div v-show="isActive" class="z-collapse-item__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { collapseContextKey } from './constants'
import { generateId } from '@src/utils'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZCollapseItem'
})

const zenless = useZenless()
const props = defineProps({
  title: String,
  name: [String, Number],
  disabled: Boolean
})

const name = computed(() => props.name ?? generateId())
const collapse = inject(collapseContextKey)
const isActive = computed(() => {
  return collapse.activeItems.value.includes(name.value)
})

const handleClick = () => {
  if (!props.disabled) {
    collapse.handleItemClick(name.value)
  }
}
</script>

<style scoped>
@import './collapse.scss';
</style>