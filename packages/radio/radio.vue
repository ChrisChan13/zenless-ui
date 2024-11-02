<template>
  <label :class="['z-radio', {
    'is-checkbox': isCheckbox,
    'is-button': isButtonShape,
    [`z-radio--${radioSize}`]: radioSize,
    'is-checked': isChecked,
    'is-disabled': isDisabled,
    'is-bold': zenless.isBold
  }]">
    <span v-if="!isButtonShape" class="z-radio__input">
      <i v-show="isChecked" class="z-icon-check"></i>
      <i v-show="!isChecked && indeterminate" class="z-icon-minus"></i>
    </span>
    <component
      :is="isButtonShape ? Tag : 'span'"
      class="z-radio__label"
      :size="size"
      :type="isChecked ? 'primary' : 'default'"
      :disabled="isDisabled"
    >
      <slot v-if="$slots.default"></slot>
      <template v-else>{{ label }}</template>
    </component>
    <input
      ref="radioRef"
      :type="mode"
      class="z-radio__original"
      tabindex="-1"
      :name="name"
      :value="actualValue"
      v-model="modelValue"
      :disabled="isDisabled"
      :checked="isChecked"
    >
  </label>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { generateId } from '@src/utils'
import { radioModes, radioShapes, radioGroupContextKey } from './constants'
import { zenlessSizes } from '../constants'
import Tag from '../tag'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZRadio'
})

const zenless = useZenless()
const radioGroup = inject(radioGroupContextKey, null)
const props = defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number],
  disabled: Boolean,
  size: {
    type: String,
    validator: (v) => zenlessSizes.includes(v)
  },
  mode: {
    type: String,
    default: 'radio',
    validator: (v) => radioModes.includes(v)
  },
  name: String,
  shape: {
    type: String,
    default: 'label',
    validator: (v) => radioShapes.includes(v)
  },
  indeterminate: Boolean
})
const radioRef = ref(null)
const actualValue = computed(() => props.value ?? generateId())
const radioSize = computed(() => (
  props.size || (radioGroup && radioGroup.props.size)
))
const isCheckbox = computed(() => props.mode === 'checkbox')
const isChecked = computed(() => (
  isCheckbox.value ? !!modelValue.value : (modelValue.value === actualValue.value)
))
const isLimited = computed(() => (
  radioGroup && ((radioGroup.props.min > 0 && radioGroup.modelValue.value.length <= radioGroup.props.min && isChecked.value) || (
    radioGroup.props.max > 0 && radioGroup.modelValue.value.length >= radioGroup.props.max && !isChecked.value
  ))
))
const isDisabled = computed(() => (
  (radioGroup && radioGroup.props.disabled) || props.disabled || (
    isCheckbox.value && isLimited.value
  )
))
const isButtonShape = computed(() => props.shape === 'button')

const emit = defineEmits(['update:modelValue', 'change'])

const modelValue = computed({
  get() {
    if (radioGroup) {
      if (isCheckbox.value) {
        return radioGroup.modelValue.value instanceof Array
          && radioGroup.modelValue.value.includes(actualValue.value)
      }
      return radioGroup.modelValue.value
    }
    return props.modelValue
  },
  set(val) {
    if (radioGroup) {
      if (isCheckbox.value) {
        let checkedVal = [...(radioGroup.modelValue.value || [])]
        if (val) {
          checkedVal.push(actualValue.value)
        } else {
          const index = checkedVal.indexOf(actualValue.value)
          checkedVal.splice(index, 1)
        }
        radioGroup.changeEvent(checkedVal)
      } else {
        radioGroup.changeEvent(val)
      }
    } else {
      emit('update:modelValue', val)
      emit('change', val)
    }
  },
})
</script>

<style scoped>
@import './radio.scss';
</style>