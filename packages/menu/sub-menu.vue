<template>
  <div class="z-menu__group">
    <z-menu-item
      :name="name"
      :icon="icon"
      :title="title"
      :disabled="disabled"
    >
      <slot name="title"></slot>
    </z-menu-item>
    <div :class="['z-menu__sub', { 'is-open': isOpened }]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, provide, inject, onUnmounted, watch } from 'vue'
import { menuContextKey, subMenuContextKey } from './constants'
import { generateId } from '@src/utils'

defineOptions({
  name: 'ZSubMenu'
})

const props = defineProps({
  name: [String, Number],
  icon: String,
  title: String,
  disabled: Boolean
})

const name = computed(() => props.name ?? generateId())
const menu = inject(menuContextKey)
const isOpened = computed(() => {
  return menu.subMenus.value[name.value]
})

watch(name, (value, oldValue) => {
  Object.assign(menu.subMenus.value, {
    [value]: isOpened.value
  })
  if (oldValue) delete menu.subMenus.value[oldValue]
}, {
  immediate: true
})

onUnmounted(() => {
  delete menu.subMenus.value[name.value]
  delete menu.items.value[name.value]
})

provide(subMenuContextKey, {
  name
})
</script>

<style scoped>
@import './menu.scss';
</style>