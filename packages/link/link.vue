<template>
  <a
    :class="[
      'z-link',
      {
        'is-bold': zenless.isBold,
        'z-link--default': !type,
        [`z-link--${type}`]: type,
        'z-link--underline': underline,
        'z-link--disabled': disabled,
        'z-link--highlight': highlight
      }
    ]"
    :href="disabled ? null : href"
    @click="clickLinkHandler"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZLink'
})

const zenless = useZenless()
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  highlight: Boolean,
  underline: Boolean,
  disabled: Boolean,
  href: String,
  icon: String
})

const emit = defineEmits(['click'])
const clickLinkHandler = (e) => {
  if (!props.disabled && !props.href) {
    emit('click', e)
  }
}
</script>

<style scoped>
@import './link.scss';
</style>