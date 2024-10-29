<template>
  <component :is="Radio" mode="checkbox">
    <slot></slot>
  </component>
</template>

<script setup>
import Radio from '../radio'

defineOptions({
  name: 'ZCheckbox'
})
</script>