<template>
  <div class="component">
    <div class="component-title">Switch 开关</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-switch v-model="value1"></z-switch>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-switch v-model="value2" disabled></z-switch>
        <z-switch v-model="value3" disabled></z-switch>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Switch Attributes</div>
    <z-table :data="switchAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Switch Events</div>
    <z-table :data="switchEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(false)

const codes = {
  general: `<z-switch v-model="value"></z-switch>

<script setup>
import { ref } from 'vue'

const value = ref(true)
<\/script>`,
  disabled: `<z-switch v-model="value1" disabled></z-switch>
<z-switch v-model="value2" disabled></z-switch>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
<\/script>`
}
const switchAttributes = [{
  prop: 'v-model',
  desc: '绑定值',
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: 'switch input 的 value',
  type: 'string / number / boolean'
}, {
  prop: 'name',
  desc: '原生 name 属性',
  type: 'string'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}]
const switchEvents = [{
  name: 'change',
  desc: 'switch 状态变化时触发的回调',
  params: '新状态的值'
}]
</script>

<style scoped>
.z-switch {
  margin-right: 20px;
}
</style>