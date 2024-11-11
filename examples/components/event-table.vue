<template>
  <z-table :data="data">
    <z-table-column prop="name" :label="$t('global.event.name')"></z-table-column>
    <z-table-column prop="desc" :label="$t('global.event.desc')"></z-table-column>
    <z-table-column prop="params" :label="$t('global.event.params')"></z-table-column>
  </z-table>
</template>

<script setup>
defineOptions({
  name: 'EventTable'
})

defineProps({
  data: Array
})
</script>