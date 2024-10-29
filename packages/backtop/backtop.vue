<template>
  <z-button
    v-show="isVisible"
    class="z-backtop"
    size="extra"
    circle
    icon="caret-top"
    :style="{
      right: `${right}px`,
      bottom: `${bottom}px`
    }"
    @click="handleBacktopClick"
  ></z-button>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';

defineOptions({
  name: 'ZBacktop'
})

const props = defineProps({
  target: Object,
  visibleHeight: {
    type: Number,
    default: 200
  },
  right: {
    type: Number,
    default: 60
  },
  bottom: {
    type: Number,
    default: 40
  }
})

const isVisible = ref(false)

const handleTargetScroll = () => {
  if (!props.target) return
  if (props.target.scrollTop >= props.visibleHeight && !isVisible.value) {
    isVisible.value = true
  } else if (props.target.scrollTop < props.visibleHeight && isVisible.value) {
    isVisible.value = false
  }
}

watch(() => props.target, () => {
  if (!props.target) return
  handleTargetScroll()
  props.target.addEventListener('scroll', handleTargetScroll)
})

const handleBacktopClick = () => {
  if (props.target) {
    props.target.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onUnmounted(() => {
  if (props.target) {
    props.target.removeEventListener('scroll', handleTargetScroll)
  }
})
</script>

<style scoped lang="scss">
.z-backtop {
  position: fixed;
  right: 60px;
  bottom: 40px;
  z-index: 10;
}
</style>