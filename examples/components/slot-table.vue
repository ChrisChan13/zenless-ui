<template>
  <z-table :data="data">
    <z-table-column prop="name" :label="$t('global.slot.name')"></z-table-column>
    <z-table-column prop="desc" :label="$t('global.slot.desc')"></z-table-column>
  </z-table>
</template>

<script setup>
defineOptions({
  name: 'SlotTable'
})

defineProps({
  data: Array
})
</script>