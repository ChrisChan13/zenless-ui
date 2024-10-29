<template>
  <div :class="['z-form-item', {
    'is-inline': isInline,
    'is-required': required,
    'is-bold': zenless.isBold
  }]">
    <div v-if="$slots.label || label || (form && !form.props.inline)" class="z-form-item__label" :style="labelStyle">
      <slot v-if="$slots.label" name="label"></slot>
      <span v-else>{{ label }}</span>
    </div>
    <div class="z-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, useSlots } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { formContextKey } from './constants'

defineOptions({
  name: 'ZFormItem'
})

const props = defineProps({
  label: String,
  required: Boolean,
  labelWidth: [String, Number]
})

const zenless = useZenless()
const form = inject(formContextKey)
const slots = useSlots()
const isInline = computed(() => form && form.props.labelPosition !== 'top')

const labelStyle = computed(() => {
  const style = {}
  const labelWidth = (form && form.props.labelWidth) || props.labelWidth
  labelWidth && Object.assign(style, {
    width: `${labelWidth}${typeof labelWidth === 'number' ? 'px' : ''}`,
  })
  const labelPosition = form && form.props.labelPosition
  labelPosition && Object.assign(style, {
    textAlign: isInline.value ? labelPosition : 'left'
  })
  return style
})
</script>

<style scoped>
@import './form.scss';
</style>