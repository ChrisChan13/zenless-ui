<template>
  <z-table :data="data">
    <z-table-column prop="name" :label="$t('global.method.name')"></z-table-column>
    <z-table-column prop="desc" :label="$t('global.method.desc')"></z-table-column>
  </z-table>
</template>

<script setup>
defineOptions({
  name: 'MethodTable'
})

defineProps({
  data: Array
})
</script>