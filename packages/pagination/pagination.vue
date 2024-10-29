<template>
  <div :class="['z-pagination', {
    'is-minimal': minimal,
    'is-bold': zenless.isBold
  }]">
    <z-button class="z-pagination__prev" :disabled="hasPrevPage" @click="onPrevPage">
      <i v-if="minimal" class="z-icon-arrow-left"></i>
      <span v-else>{{ prevText || '上一页' }}</span>
    </z-button>
    <div class="z-pagination__content">
      <span>{{ currentPage }}</span>
      <span v-if="!minimal">/{{ pageCount }}</span>
    </div>
    <z-button class="z-pagination__next" :disabled="hasNextPage" @click="onNextPage">
      <i v-if="minimal" class="z-icon-arrow-right"></i>
      <span v-else>{{ nextText || '下一页' }}</span>
    </z-button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { prefixNumber } from '@src/utils/index'
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZPagination'
})

const zenless = useZenless()
const props = defineProps({
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  prevText: String,
  nextText: String,
  minimal: Boolean
})
const modelValue = defineModel({
  type: Number,
  default: 1
})
const currentPage = computed(() => prefixNumber(modelValue.value))
const pageCount = computed(() => prefixNumber(Math.ceil(props.total / props.pageSize)))
const hasPrevPage = computed(() => modelValue.value <= 1)
const hasNextPage = computed(() => modelValue.value >= +pageCount.value)
const emits = defineEmits(['change'])

const onPrevPage = () => {
  modelValue.value = modelValue.value - 1
  emits('change', modelValue.value)
}
const onNextPage = () => {
  modelValue.value = modelValue.value + 1
  emits('change', modelValue.value)
}
</script>

<style scoped>
@import './pagination.scss';
</style>