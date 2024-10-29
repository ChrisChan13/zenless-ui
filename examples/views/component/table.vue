<template>
  <div class="component">
    <div class="component-title">Table 表格</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-table :data="tableData">
          <z-table-column prop="type" label="信号类型"></z-table-column>
          <z-table-column prop="name" label="信号列表">
            <template #default="scoped">
              <span :style="{
                color: scoped.row.color
              }">{{ scoped.row.name }}</span>
            </template>
          </z-table-column>
          <z-table-column prop="from" label="频段类型"></z-table-column>
          <z-table-column prop="date" label="调频时间"></z-table-column>
        </z-table>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">Table Attributes</div>
    <z-table :data="tableAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Table Slots</div>
    <z-table :data="tableSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">TableColumn Attributes</div>
    <z-table :data="tableColumnAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">TableColumn Slots</div>
    <z-table :data="tableColumnSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([{
  type: '代理人',
  name: '艾莲',
  color: '#ffb500',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '代理人',
  name: '妮可',
  color: '#e900ff',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「月相」-晦',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「电磁暴」-叁式',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「湍流」-斧型',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}])
const codes = {
  general: `<z-table :data="tableData">
  <z-table-column prop="type" label="信号类型"></z-table-column>
  <z-table-column prop="name" label="信号列表">
    <template #default="scoped">
      <span :style="{
        color: scoped.row.color
      }">{{ scoped.row.name }}</span>
    </template>
  </z-table-column>
  <z-table-column prop="from" label="频段类型"></z-table-column>
  <z-table-column prop="date" label="调频时间"></z-table-column>
</z-table>

<script setup>
import { ref } from 'vue'

const tableData = ref([{
  type: '代理人',
  name: '艾莲',
  color: '#ffb500',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '代理人',
  name: '妮可',
  color: '#e900ff',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「月相」-晦',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「电磁暴」-叁式',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}, {
  type: '音擎',
  name: '「湍流」-斧型',
  from: '独家频段',
  date: '2024-07-09 20:13:29'
}])
<\/script>`
}
const tableAttributes = [{
  prop: 'data',
  desc: '显示的数据',
  type: 'array'
}, {
  prop: 'border',
  desc: '是否带有纵向边框',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'empty-text',
  desc: '空数据时显示的文本内容',
  type: 'string',
  default: '暂无数据... \\[ o_x ]/'
}]
const tableSlots = [{
  name: 'empty',
  desc: '空数据时显示的自定义内容'
}]
const tableColumnAttributes = [{
  prop: 'prop',
  desc: '对应列内容的字段名',
  type: 'string'
}, {
  prop: 'label',
  desc: '显示的标题',
  type: 'string'
}, {
  prop: 'width',
  desc: '对应列的宽度',
  type: 'number'
}]
const tableColumnSlots = [{
  name: 'default',
  desc: '自定义列的内容，参数为 { row, column, index }'
}, {
  name: 'header',
  desc: '自定义表头的内容，参数为 { column }'
}]
</script>