<template>
  <div v-if="!lazy || loaded" v-show="isActive" class="z-tab-panel">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, inject, computed, onUnmounted, reactive, useSlots, onMounted, watch } from 'vue'
import { tabsContextKey } from './constants'
import { generateId } from '@src/utils'

defineOptions({
  name: 'ZTabPanel'
})

const slots = useSlots()
const props = defineProps({
  label: String,
  name: [String, Number],
  disabled: Boolean,
  lazy: Boolean
})
const tabs = inject(tabsContextKey)
const name = computed(() => props.name ?? generateId())
const isActive = computed(() => {
  return tabs.active.value === props.name
})
const loaded = ref(isActive.value)
watch(isActive, (value) => {
  if (value) loaded.value = true
})
const panel = reactive({
  slots,
  props,
  name,
  active: isActive
})

onMounted(() => {
  tabs.addPanelItem(panel)
})

onUnmounted(() => {
  const index = tabs.panels.value.findIndex((item) => item.name === name)
  tabs.panels.value.splice(index, 1)
})
</script>

<style scoped>
@import './tabs.scss';
</style>