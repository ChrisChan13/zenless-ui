<template>
  <z-table :data="data">
    <z-table-column prop="prop" :label="$t('global.attr.prop')"></z-table-column>
    <z-table-column prop="desc" :label="$t('global.attr.desc')"></z-table-column>
    <z-table-column prop="type" :label="$t('global.attr.type')"></z-table-column>
    <z-table-column prop="values" :label="$t('global.attr.values')"></z-table-column>
    <z-table-column prop="default" :label="$t('global.attr.default')"></z-table-column>
  </z-table>
</template>

<script setup>
defineOptions({
  name: 'AttributeTable'
})

defineProps({
  data: Array
})
</script>