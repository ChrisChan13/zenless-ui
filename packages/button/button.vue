<template>
  <button
    ref="buttonRef"
    :class="[
      'z-button',
      {
        'is-bold': zenless.isBold,
        'is-italic': zenless.isItalic,
        [`z-button--${size}`]: size,
        'z-button--default': !type,
        [`z-button--${type}`]: type,
        'z-button--highlight': highlight,
        'z-button--plain': plain && !hollow,
        'z-button--hollow': hollow,
        'z-button--round': round,
        'z-button--circle': circle,
        'z-button--disabled': disabled || loading,
        'z-button--active': isActive
      }
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @mousedown="pressButtonHandle"
    @click="clickButtonHandler"
  >
    <div v-show="isActive" ref="buttonActiveRef" :class="['z-button--active__bg', { 'is-fadeout': isInactive }]"></div>
    <i v-if="loading" class="z-button__icon is-loading z-icon-loading"></i>
    <z-icon v-else-if="buttonIcon" class="z-button__icon" :name="buttonIcon.name" :color="buttonIcon.color"></z-icon>
    <div v-if="$slots.default" class="z-button__content"><slot></slot></div>
  </button>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { buttonSizes, buttonTypes } from './constants'
import { useZenless } from 'zenless-ui/index'

const buttonRef = ref(null)
const buttonActiveRef = ref(null)
const zenless = useZenless()

defineOptions({
  name: 'ZButton'
})

const props = defineProps({
  size: {
    type: String,
    validator: (v) => buttonSizes.includes(v)
  },
  type: {
    type: String,
    validator: (v) => buttonTypes.includes(v)
  },
  icon: [String, Object],
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  circle: Boolean,
  hollow: Boolean,
  nativeType: {
    type: String,
    default: 'button'
  },
  highlight: Boolean
})

const isActive = ref(false)
const isInactive = ref(false)
const buttonIcon = computed(() => {
  if (!props.icon) return undefined
  const icon = {}
  if (typeof props.icon === 'string') {
    Object.assign(icon, {
      name: props.icon
    })
  } else if (typeof props.icon === 'object') {
    Object.assign(icon, {
      name: Object.keys(props.icon)[0],
      color: Object.values(props.icon)[0]
    })
  }
  return icon
})

const emit = defineEmits(['click'])

const clickButtonHandler = (e) => {
  emit('click', e)
}
const pressButtonHandle = (e) => {
  if (e.button > 0) return
  if (isActive.value) return
  e.stopImmediatePropagation()
  isActive.value = true
  document.addEventListener('mouseup', mouseUpDocumentHandler)
}
const mouseUpDocumentHandler = () => {
  if (isInactive.value) return
  isInactive.value = true
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
  nextTick(async () => {
    try {
      await document.getAnimations().find(
        (item) => item.animationName.startsWith('z_ani_btn_inactive_bg') && item.effect.target === buttonActiveRef.value
      ).finished
    } catch(err) {} finally {
      isInactive.value = false
      isActive.value = false
    }
  })
}
</script>

<style scoped>
@import './button.scss';
</style>