<template>
  <div :class="['z-select', {
    'is-focused': focused,
    'is-disabled': disabled
  }]">
    <z-dropdown
      class="z-select__wrap"
      trigger="click"
      :size="size"
      :disabled="disabled"
      @trigger="handleTrigger"
      @command="handleCommand"
    >
      <z-input
        class="z-select__input"
        readonly
        :size="size"
        :name="name"
        :value="options[modelValue] ?? modelValue"
        :disabled="disabled"
        :clearable="clearable"
        :placeholder="placeholder"
        @clear="handleClear"
      >
        <template #suffix>
          <i class="z-icon-caret-bottom z-select__arrow"></i>
        </template>
      </z-input>
      <template #dropdown>
        <z-scrollbar hide-scroll :resizable="false" class="z-select__options">
          <div v-if="isEmpty" class="z-select__empty">
            <slot v-if="$slots.empty" name="empty"></slot>
            <span v-else>{{ emptyText || defaultEmptyText }}</span>
          </div>
          <slot></slot>
        </z-scrollbar>
      </template>
    </z-dropdown>
  </div>
</template>

<script setup>
import { ref, provide, computed } from 'vue'
import { zenlessSizes } from '../constants'
import { selectContextKey } from './constants'
import { useZenless } from 'zenless-ui/index'
import { zhCn } from 'zenless-ui/locale/index'

defineOptions({
  name: 'ZSelect'
})

const zenless = useZenless()
const props = defineProps({
  name: String,
  disabled: Boolean,
  placeholder: String,
  clearable: Boolean,
  size: {
    type: String,
    validator: (v) => zenlessSizes.includes(v)
  },
  emptyText: String
})

const focused = ref(false)
const modelValue = defineModel({
  type: [String, Number, Boolean],
  default: ''
})
const options = ref({})
const isEmpty = computed(() => Object.keys(options.value).length === 0)
const defaultEmptyText = computed(() => zenless?.locale?.data?.select?.empty || zhCn.data.select.empty)
const emit = defineEmits(['change', 'clear'])

const handleTrigger = (value) => {
  focused.value = value
}
const handleCommand = (value) => {
  modelValue.value = value
  emit('change', value)
}
const handleClear = () => {
  modelValue.value = ''
  emit('clear')
}

provide(selectContextKey, {
  selected: modelValue,
  options
})
</script>

<style scoped>
@import './select.scss';
</style>