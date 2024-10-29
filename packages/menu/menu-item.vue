<template>
  <div :class="[
    'z-menu__item',
    {
      'is-bold': zenless.isBold,
      'is-active': isActive,
      'is-disabled': disabled
    }
  ]" @click="handleClick">
    <i v-if="icon" :class="['z-menu__icon', `z-icon-${icon}`]"></i>
    <span v-if="title">{{ title }}</span>
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script setup>
import { inject, computed, getCurrentInstance, onUnmounted, watch, onMounted } from 'vue'
import { menuContextKey, subMenuContextKey } from './constants'
import { generateId, isValidValue } from '@src/utils'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZMenuItem'
})

const zenless = useZenless()
const props = defineProps({
  name: [String, Number],
  icon: String,
  title: String,
  disabled: Boolean
})

const name = computed(() => props.name ?? generateId())
const menu = inject(menuContextKey)
let subMenu;
const isActive = computed(() => {
  return menu.active.value === name.value || (
    subMenu && menu.items.value[menu.active.value] && name.value === menu.items.value[menu.active.value].parent
  )
})
const instance = getCurrentInstance()
if (instance.parent.type.name === 'ZSubMenu') {
  subMenu = inject(subMenuContextKey)
}

watch(name, (value, oldValue) => {
  const isChild = subMenu && subMenu.name.value !== value
  Object.assign(menu.items.value, {
    [value]: {
      parent: isChild ? subMenu.name.value : undefined,
      active: isActive.value
    }
  })
  if (isChild && isActive.value) {
    Object.assign(menu.items.value[subMenu.name.value], {
      active: true
    })
  }
  if (isValidValue(oldValue)) delete menu.items.value[oldValue]
}, {
  immediate: true
})

onMounted(() => {
  if (subMenu && subMenu.name.value !== props.name && isActive.value) {
    Object.assign(menu.subMenus.value, {
      [subMenu.name.value]: true
    })
  }
})

const handleClick = () => {
  if (props.disabled) return
  if (subMenu && subMenu.name.value === name.value) {
    menu.handleSubMenuClick(name.value)
  } else {
    menu.handleItemClick(name.value)
  }
}

onUnmounted(() => {
  delete menu.items.value[name.value]
})
</script>

<style scoped>
@import './menu.scss';
</style>