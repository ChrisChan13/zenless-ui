<template>
  <component :is="Radio" shape="button">
    <slot></slot>
  </component>
</template>

<script setup>
import Radio from '../radio'

defineOptions({
  name: 'ZRadioButton'
})
</script>