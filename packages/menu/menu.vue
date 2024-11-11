<template>
  <div class="z-menu z-menu--vertical">
    <div class="z-menu__prefix">
      <i class="z-icon-caret-top"></i>
    </div>
    <z-scrollbar class="z-menu__scrollbar" hide-scroll>
      <div class="z-menu__content">
        <slot></slot>
      </div>
    </z-scrollbar>
    <div class="z-menu__suffix">
      <i class="z-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { menuContextKey } from './constants'

defineOptions({
  name: 'ZMenu'
})

const props = defineProps({
  accordion: Boolean,
  defaultOpen: [String, Number, Array]
})
const modelValue = defineModel({
  type: [String, Number]
})
const emit = defineEmits(['change'])

const items = ref({})
const subMenus = ref({})

if (props.defaultOpen) {
  if (typeof props.defaultOpen === 'string' || typeof props.defaultOpen === 'number') {
    Object.assign(subMenus.value, {
      [props.defaultOpen]: true
    })
  } else if (props.defaultOpen instanceof Array) {
    const payload = {}
    props.defaultOpen.forEach((item) => {
      Object.assign(payload, {
        [item]: true
      })
    })
    Object.assign(subMenus.value, payload)
  }
}

const handleItemClick = (name) => {
  if (modelValue.value === name) return
  modelValue.value = name
  emit('change', name)
}

const handleSubMenuClick = (name) => {
  if (props.accordion) {
    Object.keys(subMenus.value).forEach((item) => {
      if (item !== name && subMenus.value[item]) {
        Object.assign(subMenus.value, {
          [item]: false
        })
      }
    })
  }
  Object.assign(subMenus.value, {
    [name]: !subMenus.value[name]
  })
}

provide(menuContextKey, {
  active: modelValue,
  items,
  subMenus,
  handleItemClick,
  handleSubMenuClick
})
</script>

<style scoped>
@import './menu.scss';
</style>