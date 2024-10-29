<template>
  <component :is="Modal" mode="drawer">
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </component>
</template>

<script setup>
import Modal from '../modal'

defineOptions({
  name: 'ZDrawer'
})
</script>