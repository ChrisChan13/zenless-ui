<template>
  <component :is="Radio" mode="checkbox" shape="button">
    <slot></slot>
  </component>
</template>

<script setup>
import Radio from '../radio'

defineOptions({
  name: 'ZCheckboxButton'
})
</script>