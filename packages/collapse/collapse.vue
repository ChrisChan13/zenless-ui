<template>
  <div class="z-collapse">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, ref, watchEffect } from 'vue'
import { collapseContextKey } from './constants'

defineOptions({
  name: 'ZCollapse'
})

const props = defineProps({
  accordion: Boolean,
  plain: Boolean
})
const modelValue = defineModel({
  type: [String, Number, Array]
})
const emit = defineEmits(['change'])

const activeItems = ref([])

watchEffect(() => {
  const { value } = modelValue
  if (value instanceof Array) {
    activeItems.value = value
  } else if (typeof value === 'string' || typeof value === 'number') {
    activeItems.value = [value]
  }
})

const handleItemClick = (name) => {
  let items = [...activeItems.value]
  const index = items.indexOf(name)
  if (index > -1) {
    items.splice(index, 1)
  } else {
    if (props.accordion) {
      items = [name]
    } else {
      items.push(name)
    }
  }
  activeItems.value = items
  emit('change', items)
}

provide(collapseContextKey, {
  plain: props.plain,
  activeItems,
  handleItemClick
})
</script>

<style scoped>
@import './collapse.scss';
</style>