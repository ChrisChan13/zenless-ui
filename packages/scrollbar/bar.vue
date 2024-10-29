<template>
  <div ref="barRef" :class="[
    'z-scrollbar__bar',
    {
      'z-scrollbar__horizontal': horizontal,
      'z-scrollbar__vertical': !horizontal
    }
  ]" :style="barStyle">
    <i :class="[{
      'z-icon-caret-left': horizontal,
      'z-icon-caret-top': !horizontal
    }]"></i>
    <div class="z-scrollbar__thumb" @mousedown="clickThumbHandler">
      <div ref="trackRef" class="z-scrollbar__track" :style="{
        transform: `translate${barCtx.axis}(${move}%)`,
        [barCtx.size]: size
      }" @mousedown="clickTrackHandler"></div>
    </div>
    <i :class="[{
      'z-icon-caret-right': horizontal,
      'z-icon-caret-bottom': !horizontal
    }]"></i>
  </div>
</template>

<script setup>
import { computed, ref, inject } from 'vue'
import { scrollbarContextKey, barContext } from './constants'

defineOptions({
  name: 'ZScrollbarBar'
})

const props = defineProps({
  horizontal: Boolean,
  move: Number,
  size: String
})

const barRef = ref(null)
const trackRef = ref(null)
const axisPoi = { X: 0, Y: 0 }
let cursorDown = false

const barCtx = computed(() => {
  return barContext[props.horizontal ? 'horizontal' : 'vertical']
})
const barStyle = computed(() => {
  const style = {}
  if (props.horizontal && scrollbar.fixedAxis.value.y) {
    Object.assign(style, {
      right: '25px'
    })
  } else if (!props.horizontal && scrollbar.fixedAxis.value.x) {
    Object.assign(style, {
      bottom: '25px'
    })
  }
  return style
})

const scrollbar = inject(scrollbarContextKey)
const clickThumbHandler = (e) => {
  const barCtxValue = barCtx.value
  const offset = Math.abs(e.target.getBoundingClientRect()[barCtxValue.direction] - e[barCtxValue.client])
  const trackHalf = (trackRef.value[barCtxValue.offset] / 2);
  const trackPosition = (offset - trackHalf) * 100 / barRef.value[barCtxValue.offset]
  scrollbar.wrapRef.value[barCtxValue.scroll] = (trackPosition * scrollbar.wrapRef.value[barCtxValue.scrollSize] / 100)
}
const clickTrackHandler = (e) => {
  if (e.ctrlKey || e.button === 2) return
  const barCtxValue = barCtx.value
  startDrag(e)
  axisPoi[barCtxValue.axis] = (e.currentTarget[barCtxValue.offset] - (e[barCtxValue.client] - e.currentTarget.getBoundingClientRect()[barCtxValue.direction]))
}
const startDrag = (e) => {
  e.stopImmediatePropagation()
  cursorDown = true
  document.addEventListener('mousemove', mouseMoveDocumentHandler)
  document.addEventListener('mouseup', mouseUpDocumentHandler)
  document.onselectstart = () => false
}
const mouseMoveDocumentHandler = (e) => {
  if (!cursorDown) return
  const barCtxValue = barCtx.value
  const prevPoi = axisPoi[barCtxValue.axis]
  if (!prevPoi) return
  const offset = -(barRef.value.getBoundingClientRect()[barCtxValue.direction] - e[barCtxValue.client])
  const trackClickPosition = trackRef.value[barCtxValue.offset] - prevPoi
  const trackPosition = (offset - trackClickPosition) * 100 / barRef.value[barCtxValue.offset]
  scrollbar.wrapRef.value[barCtxValue.scroll] = (trackPosition * scrollbar.wrapRef.value[barCtxValue.scrollSize] / 100)
}
const mouseUpDocumentHandler = () => {
  cursorDown = false
  axisPoi[barCtx.value.axis] = 0
  document.removeEventListener('mousemove', mouseMoveDocumentHandler)
  document.onselectstart = null
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
}
</script>

<style scoped>
@import './scrollbar.scss';
</style>