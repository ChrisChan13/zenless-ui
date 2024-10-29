<template>
  <div :class="['z-tabs', {
    [`at-${placement}`]: placement
  }]">
    <div class="z-tabs__header">
      <div
        v-for="item in panels"
        :key="item.props.name"
        :class="['z-tabs__item', {
          'is-bold': zenless.isBold,
          'is-active': modelValue === item.props.name,
          'is-disabled': item.props.disabled
        }]"
        @click="handleItemClick(item)"
      >
        <TabItem :content="item.slots.label ? item.slots.label() : item.props.label"></TabItem>
      </div>
    </div>
    <div class="z-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, useSlots } from 'vue'
import { tabsContextKey, tabsPlacements } from './constants'
import { useZenless } from 'zenless-ui/index'
import TabItem from './tab-item'

defineOptions({
  name: 'ZTabs'
})

const zenless = useZenless()
defineProps({
  placement: {
    type: String,
    validator: (v) => tabsPlacements.includes(v)
  }
})
const slots = useSlots()
const panels = ref([])
const modelValue = defineModel({
  type: [String, Number]
})

const emit = defineEmits(['change'])
const handleItemClick = (panel) => {
  if (panel.props.disabled) return
  if (modelValue.value === panel.props.name) return
  modelValue.value = panel.props.name
  emit('change', panel.props.name)
}
const addPanelItem = (panel) => {
  const tempPanels = []
  slots.default().forEach((child) => {
    if (child.type.name === 'ZTabPanel') {
      if (child.props.name === panel.name) {
        tempPanels.push(panel)
      } else {
        const pane = panels.value.find((item) => item.name === child.props.name)
        pane && tempPanels.push(pane)
      }
    }
  })
  panels.value = tempPanels
}

provide(tabsContextKey, {
  active: modelValue,
  panels,
  addPanelItem,
  handleItemClick
})
</script>

<style scoped>
@import './tabs.scss';
</style>