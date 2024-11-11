<template>
  <div :class="['z-tag', {
    'is-bold': zenless.isBold,
    [`z-tag--${size}`]: size,
    'z-tag--default': !type,
    [`z-tag--${type}`]: type,
    'z-tag--plain': plain && !hollow,
    'z-tag--hollow': hollow,
    'z-tag--round': round
  }]">
    <div class="z-tag__content">
      <slot></slot>
    </div>
    <i
      v-if="closable"
      :class="[{
        'z-icon-close': !isHover,
        'z-icon-error': isHover
      }]"
      @mouseenter="toggleCloseHandler"
      @mouseleave="toggleCloseHandler"
      @click="onCloseHandler"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { zenlessSizes, zenlessColors } from '../constants'

defineOptions({
  name: 'ZTag'
})

const zenless = useZenless()
defineProps({
  size: {
    type: String,
    validator: (v) => zenlessSizes.includes(v)
  },
  type: {
    type: String,
    validator: (v) => zenlessColors.includes(v)
  },
  plain: Boolean,
  hollow: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  closable: Boolean
})
const isHover = ref(false)

const emit = defineEmits(['close'])
const toggleCloseHandler = () => {
  isHover.value = !isHover.value
}
const onCloseHandler = (e) => {
  emit('close', e)
}
</script>

<style scoped>
@import './tag.scss';
</style>