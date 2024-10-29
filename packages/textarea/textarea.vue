<template>
  <component :is="Input" type="textarea"></component>
</template>

<script setup>
import Input from '../input'

defineOptions({
  name: 'ZTextarea'
})
</script>