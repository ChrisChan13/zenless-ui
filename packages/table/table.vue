<template>
  <div :class="['z-table', {
    'z-table--border': border,
    'is-bold': zenless.isBold
  }]">
    <table class="z-table__body" cellspacing="0" cellpadding="0" border="0">
      <colgroup>
        <col v-for="(item, col) of columns" :key="col" :width="item.props.width"></col>
      </colgroup>
      <thead>
        <tr class="z-table__row z-table__header">
          <th class="z-table__cell" v-for="(item, col) of columns" :key="col">
            <cell
              :column="item.props"
              :render="item.children?.header"
            >{{ item.props.label }}</cell>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="z-table__row" v-for="(row, index) of data" :key="index">
          <td class="z-table__cell" v-for="(item, col) of columns" :key="col">
            <cell
              :row="row"
              :column="item.props"
              :index="index"
              :render="item.children?.default"
            >{{ row[item.props.prop] }}</cell>
          </td>
        </tr>
        <tr v-if="!data || data.length === 0" class="z-table__row">
          <td class="z-table__cell" :colspan="columns.length">
            <slot name="empty"></slot>
            <div v-if="!slots.empty" class="empty">{{ emptyText || defaultEmptyText }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, useSlots, computed, watchEffect } from 'vue'
import { useZenless } from 'zenless-ui/index'
import { zhCn } from 'zenless-ui/locale/index'
import Cell from './cell'

defineOptions({
  name: 'ZTable'
})

const zenless = useZenless()
const props = defineProps({
  data: Array,
  border: {
    type: Boolean,
    default: true
  },
  emptyText: String
})

let columns = ref([])
const slots = useSlots()
const defaultEmptyText = computed(() => zenless?.locale?.data?.table?.empty || zhCn.data.table.empty)
watchEffect(() => {
  columns.value = slots.default().filter((v) => v.type.name === 'ZTableColumn')
})
</script>

<style scoped>
@import './table.scss';
</style>