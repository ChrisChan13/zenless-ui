<template>
  <div class="z-scrollbar">
    <div ref="wrapRef" class="z-scrollbar__wrap" :style="{
      marginRight: `-${scrollbarWidth}px`,
      marginBottom: `-${scrollbarWidth}px`
    }" @scroll="handleScroll">
      <div ref="resizeRef" class="z-scrollbar__view">
        <slot></slot>
      </div>
      <Bar v-show="!hideScroll && (fixedAxis.x || isOverflowX)" horizontal :move="moveX" :size="sizeWidth"></Bar>
      <Bar v-show="!hideScroll && (fixedAxis.y || isOverflowY)" :move="moveY" :size="sizeHeight"></Bar>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, onBeforeUnmount, computed, provide } from 'vue'
import Bar from './bar.vue'
import getScrollbarWidth from '@src/utils/scrollbar-width'
import { addResizeListener, removeResizeListener } from '@src/utils/resize-event'
import { scrollbarContextKey } from './constants'

defineOptions({
  name: 'ZScrollbar'
})

const props = defineProps({
  fixed: {
    type: [Boolean, Object],
    default: {
      y: true
    }
  },
  hideScroll: Boolean,
  resizable: {
    type: Boolean,
    default: true
  }
})

const wrapRef = ref(null)
const resizeRef = ref(null)
const moveX = ref(0)
const moveY = ref(0)
const sizeWidth = ref('')
const sizeHeight = ref('')
const scrollbarWidth = getScrollbarWidth()
const isOverflowY = ref(false)
const isOverflowX = ref(false)
const fixedAxis = computed(() => {
  const axis = { y: true, x: false }
  if (typeof props.fixed === 'boolean') {
    Object.assign(axis, { x: props.fixed, y: props.fixed })
  } else if (typeof props.fixed === 'object') {
    'x' in props.fixed && Object.assign(axis, {
      x: !!props.fixed.x
    })
    'y' in props.fixed && Object.assign(axis, {
      y: !!props.fixed.y
    })
  }
  !axis.x && Object.assign(axis, { x: isOverflowX.value })
  !axis.y && Object.assign(axis, { y: isOverflowY.value })
  return axis
})

const updateSizes = () => {
  if (props.hideScroll) return
  const wrap = wrapRef.value
  if (!wrap) return
  const content = resizeRef.value
  isOverflowX.value = wrap.clientWidth < content.clientWidth
  isOverflowY.value = wrap.clientHeight < content.clientHeight
  const widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth
  const heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight
  sizeWidth.value = widthPercentage < 100 ? `${widthPercentage}%` : '100%'
  sizeHeight.value = heightPercentage < 100 ? `${heightPercentage}%` : '100%'
}
nextTick(() => {
  props.resizable
    ? addResizeListener(resizeRef.value, updateSizes)
    : updateSizes()
})
onBeforeUnmount(() => {
  removeResizeListener(resizeRef.value, updateSizes)
})

const handleScroll = () => {
  if (props.hideScroll) return
  const wrap = wrapRef.value
  moveX.value = wrap.scrollLeft * 100 / wrap.clientWidth
  moveY.value = wrap.scrollTop * 100 / wrap.clientHeight
}

provide(scrollbarContextKey, {
  wrapRef,
  fixedAxis
})

defineExpose({
  scrollTarget: wrapRef
})
</script>

<style scoped>
@import './scrollbar.scss';
</style>