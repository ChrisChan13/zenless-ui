<template>
  <div v-show="modelValue" ref="modalRef" :class="['z-modal', {
    'is-drawer': isDrawer,
    'is-visible': modelValue,
    'is-mask': mask,
    'is-fullscreen': fullscreen,
    'is-bold': zenless.isBold
  }]" @click="handleMask">
    <div class="z-modal__wrap" :style="{
      width: `${width}${typeof width === 'number' ? 'px' : ''}`
    }" @click.stop>
      <div v-if="!fullscreen || title" class="z-modal__header">
        <div v-if="title" class="z-modal__title">
          <slot v-if="$slots.title" name="title"></slot>
          <span v-else>{{ title }}</span>
        </div>
        <z-button v-if="(isDrawer || !fullscreen) && closable" @click="handleClose" class="z-modal__close" type="danger" circle size="small" icon="close"></z-button>
      </div>
      <z-scrollbar :fixed="false" class="z-modal__body">
        <div class="z-modal__content">
          <slot></slot>
        </div>
      </z-scrollbar>
      <div v-if="showFooter" class="z-modal__footer">
        <slot v-if="$slots.footer" name="footer"></slot>
        <template v-else>
          <z-button v-if="showCancel" @click="handleCancel" :icon="{ error: 'danger' }" class="z-modal__cancel">{{ cancelText || '取消' }}</z-button>
          <z-button @click="handleConfirm" :icon="{ success: 'success' }" class="z-modal__confirm">{{ confirmText || '确认' }}</z-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZModal'
})

const zenless = useZenless()
const props = defineProps({
  title: String,
  mode: {
    type: String,
    default: 'model'
  },
  width: [String, Number],
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  fullscreen: Boolean,
  showFooter: {
    type: Boolean,
    default: true
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  cancelText: String,
  confirmText: String
})
const modelValue = defineModel({
  type: Boolean
})
const modalRef = ref(null)
const isDrawer = computed(() => props.mode === 'drawer')

const emits = defineEmits(['open', 'close', 'cancel', 'confirm'])
watch(modelValue, (value) => {
  if (value) { emits('open') }
})
const handleMask = () => {
  if (!props.maskClosable) return
  modelValue.value = false
  emits('close')
}
const handleClose = () => {
  modelValue.value = false
  emits('close')
}
const handleCancel = () => {
  emits('cancel')
}
const handleConfirm = () => {
  emits('confirm')
}
</script>

<style scoped>
@import './modal.scss';
</style>