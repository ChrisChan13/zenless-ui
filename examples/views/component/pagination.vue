<template>
  <div class="component">
    <div class="component-title">Pagination 分页</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-pagination :total="50"></z-pagination>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">极简模式</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-pagination minimal :total="50"></z-pagination>
      </div>
      <source-code :code="codes.minimal" collapse></source-code>
    </div>
    <div class="component-header">Pagination Attributes</div>
    <z-table :data="paginationAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Pagination Events</div>
    <z-table :data="paginationEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-pagination :total="50"></z-pagination>`,
  minimal: `<z-pagination minimal :total="50"></z-pagination>`
}
const paginationAttributes = [{
  prop: 'v-model',
  desc: '当前页',
  type: 'number',
  default: '1'
}, {
  prop: 'page-size',
  desc: '页大小',
  type: 'number',
  default: '10'
}, {
  prop: 'total',
  desc: '总条目数',
  type: 'number',
  default: '0'
}, {
  prop: 'prev-text',
  desc: '上一页文字',
  type: 'string'
}, {
  prop: 'next-text',
  desc: '下一页文字',
  type: 'string'
}, {
  prop: 'minimal',
  desc: '极简内容',
  type: 'boolean',
  default: 'false'
}]
const paginationEvents = [{
  name: 'change',
  desc: '当前页改变时触发',
  params: '当前页'
}]
</script>