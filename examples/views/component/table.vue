<template>
  <div class="component">
    <div class="component-title">{{ $t('component.table.title') }}</div>
    <div class="component-header">{{ $t('component.table.usage') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-table :data="tableData">
          <z-table-column prop="type" :label="$t('component.table.col-type')"></z-table-column>
          <z-table-column prop="name" :label="$t('component.table.col-name')">
            <template #default="scoped">
              <span :style="{
                color: scoped.row.color
              }">{{ scoped.row.name }}</span>
            </template>
          </z-table-column>
          <z-table-column prop="from" :label="$t('component.table.col-from')"></z-table-column>
          <z-table-column prop="date" :label="$t('component.table.col-date')"></z-table-column>
        </z-table>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">Table Attributes</div>
    <attribute-table :data="tableAttributes"></attribute-table>
    <div class="component-header">Table Slots</div>
    <slot-table :data="tableSlots"></slot-table>
    <div class="component-header">TableColumn Attributes</div>
    <attribute-table :data="tableColumnAttributes"></attribute-table>
    <div class="component-header">TableColumn Slots</div>
    <slot-table :data="tableColumnSlots"></slot-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const tableData = computed(() => $t('component.table.data', []))
const codes = computed(() => ({
  general: `<z-table :data="data">
  <z-table-column prop="type" label="${$t('component.table.col-type')}"></z-table-column>
  <z-table-column prop="name" label="${$t('component.table.col-name')}">
    <template #default="scoped">
      <span :style="{
        color: scoped.row.color
      }">{{ scoped.row.name }}</span>
    </template>
  </z-table-column>
  <z-table-column prop="from" label="${$t('component.table.col-from')}"></z-table-column>
  <z-table-column prop="date" label="${$t('component.table.col-date')}"></z-table-column>
</z-table>

<script setup>
import { ref } from 'vue'

const data = ref(${JSON.stringify($t('component.table.data'))})
<\/script>\n\n`
}))
const tableAttributes = computed(() => [{
  prop: 'data',
  desc: $t('attribute.table.data'),
  type: 'array'
}, {
  prop: 'border',
  desc: $t('attribute.table.border'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'empty-text',
  desc: $t('attribute.table.empty-text'),
  type: 'string',
  default: $t('attribute.table.empty-text-default')
}])
const tableSlots = computed(() => [{
  name: 'empty',
  desc: $t('slot.table.empty')
}])
const tableColumnAttributes = computed(() => [{
  prop: 'prop',
  desc: $t('attribute.table-column.prop'),
  type: 'string'
}, {
  prop: 'label',
  desc: $t('attribute.table-column.label'),
  type: 'string'
}, {
  prop: 'width',
  desc: $t('attribute.table-column.width'),
  type: 'number'
}])
const tableColumnSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.table-column.default')
}, {
  name: 'header',
  desc: $t('slot.table-column.header')
}])
</script>