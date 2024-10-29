<template>
  <component :is="RadioGroup" mode="checkbox">
    <slot></slot>
  </component>
</template>

<script setup>
import RadioGroup from '../radio-group'

defineOptions({
  name: 'ZCheckboxGroup'
})
</script>