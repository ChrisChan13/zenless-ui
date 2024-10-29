<template>
  <div
    :class="['z-dropdown', {
      [`z-dropdown--${size}`]: size,
      'is-visible': visible,
      'is-bold': zenless.isBold
    }]"
    @mousedown.stop
    @mouseenter="onHoverHandler"
    @mouseleave="onLeaveHandler"
    @click="onClickHandler"
  >
    <slot></slot>
    <div class="z-dropdown__content">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { zenlessSizes } from 'zenless-ui/constants'
import { dropdownTriggers, dropdownContextKey } from './constants'

defineOptions({
  name: 'ZDropdown'
})

const zenless = useZenless()
const props = defineProps({
  trigger: {
    type: String,
    default: 'hover',
    validator: (v) => dropdownTriggers.includes(v)
  },
  disabled: Boolean,
  size: {
    type: String,
    validator: (v) => zenlessSizes.includes(v)
  },
  hideOnCommand: {
    type: Boolean,
    default: true
  }
})
const visible = ref(false)
const emits = defineEmits(['command', 'trigger'])

const onHoverHandler = () => {
  if (props.disabled) return
  if (props.trigger !== 'hover') return
  visible.value = true
  emits('trigger', visible.value)
}
const onLeaveHandler = () => {
  if (props.disabled) return
  if (props.trigger !== 'hover') return
  visible.value = false
  emits('trigger', visible.value)
}
const onHideMenu = () => {
  if (props.disabled) return
  if (!visible.value) return
  visible.value = false
  emits('trigger', visible.value)
  document.removeEventListener('mousedown', onHideMenu)
}
const onClickHandler = () => {
  if (props.disabled) return
  if (props.trigger !== 'click') return
  if (visible.value) return
  visible.value = true
  emits('trigger', visible.value)
  document.addEventListener('mousedown', onHideMenu)
}
const handleItemClick = (command) => {
  if (props.disabled) return
  if (props.hideOnCommand) {
    onHideMenu()
  }
  emits('command', command)
}

provide(dropdownContextKey, {
  handleItemClick
})
</script>

<style scoped>
@import './dropdown.scss';
</style>