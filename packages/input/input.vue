<template>
  <div :class="['z-input', {
    'z-textarea': type === 'textarea',
    [`z-input--${size}`]: size,
    'is-bold': zenless.isBold,
    'is-focused': focused,
    'is-disabled': disabled,
    'is-readonly': readonly
  }]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <textarea
      v-if="type === 'textarea'"
      ref="textareaRef"
      :class="['z-textarea__inner', {
        'is-bold': zenless.isBold
      }]"
      :style="{
        height: `${textareaHeight}px`,
        textAlign
      }"
      :name="name"
      :rows="rows"
      :tabindex="tabindex"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @input="handleInput"
    ></textarea>
    <template v-else>
      <div v-if="$slots.prepend" class="z-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div v-if="$slots.prefix || prefixIcon" class="z-input__prefix" @mousedown.prevent>
        <slot v-if="$slots.prefix" name="prefix"></slot>
        <i v-else-if="prefixIcon" :class="`z-icon-${prefixIcon}`"></i>
      </div>
      <input
        ref="inputRef"
        :class="['z-input__inner', {
          'is-bold': zenless.isBold
        }]"
        :style="{ textAlign }"
        :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
        :name="name"
        :tabindex="tabindex"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :readonly="readonly"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      >
      <div v-if="showPwdVisible || showClear || $slots.suffix || suffixIcon" class="z-input__suffix" @mousedown.prevent>
        <i v-if="showPwdVisible"
          :class="[`z-icon-${passwordVisible ? 'visible' : 'invisible'}`, 'z-input__clear']"
          @click="handlePwdVisible"
        ></i>
        <i v-else-if="showClear"
          class="z-icon-error z-input__clear"
          @click.stop="handleClear"
        ></i>
        <slot v-else-if="$slots.suffix" name="suffix"></slot>
        <i v-else-if="suffixIcon" :class="`z-icon-${suffixIcon}`"></i>
      </div>
      <div v-if="$slots.append" class="z-input__append">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { inputSizes } from './constants'
import calcTextareaHeight from '@src/utils/textarea-height'
import { isValidValue } from '@src/utils/index'

defineOptions({
  name: 'ZInput'
})

const zenless = useZenless()
const props = defineProps({
  value: [String, Number],
  type: {
    type: String,
    default: 'text'
  },
  name: String,
  disabled: Boolean,
  rows: [String, Number],
  tabindex: [String, Number],
  maxlength: [String, Number],
  minlength: [String, Number],
  placeholder: String,
  clearable: Boolean,
  size: {
    type: String,
    validator: (v) => inputSizes.includes(v)
  },
  prefixIcon: String,
  suffixIcon: String,
  autocomplete: {
    type: String,
    default: 'off'
  },
  autofocus: Boolean,
  readonly: Boolean,
  textAlign: String,
  autoSize: Boolean
})

const modelValue = defineModel({
  type: [String, Number]
})

const textareaRef = ref(null)
const inputRef = ref(null)
const textareaHeight = ref()
const focused = ref(!props.disabled && !props.readonly && props.autofocus)
const hovering = ref(false)
const showClear = computed(() => (
  props.clearable && (modelValue.value || props.value) && !props.disabled && (focused.value || hovering.value)
))
const passwordVisible = ref(false)
const showPwdVisible = computed(() => (
  props.type === 'password' && ((modelValue.value || props.value) || !props.disabled && !props.readonly && (focused.value || hovering.value))
))
const emit = defineEmits(['focus', 'blur', 'change', 'input', 'clear'])

const setInputValue = (value) => {
  nextTick(() => {
    const input = textareaRef.value || inputRef.value
    if (!input) return
    if (input.value === value) return
    input.value = value
  })
}
watch(() => props.value, (value) => {
  if (!isValidValue(value)) return
  setInputValue(value)
}, {
  immediate: true
})
const resizeTextarea = () => {
  if (props.type === 'textarea' && props.autoSize) {
    const height = calcTextareaHeight(textareaRef.value)
    if (textareaHeight.value !== height) {
      textareaHeight.value = height
    }
  }
}
onMounted(() => {
  resizeTextarea()
  if (modelValue.value) {
    setInputValue(modelValue.value)
  }
})

const handleFocus = (evt) => {
  focused.value = true
  emit('focus', evt)
}
const handleBlur = (evt) => {
  focused.value = false
  emit('blur', evt)
}
const handleChange = (evt) => {
  emit('change', evt.target.value)
}
const handleInput = (evt) => {
  modelValue.value = evt.target.value
  setInputValue(evt.target.value)
  nextTick(resizeTextarea)
  emit('input', evt.target.value)
}
const handlePwdVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
const handleClear = () => {
  modelValue.value = ''
  setInputValue('')
  emit('input', '')
  emit('change', '')
  emit('clear', '')
}
</script>

<style scoped>
@import './input.scss';
</style>