<template>
  <div class="component">
    <div class="component-title">Radio 单选框</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value1" value="1">备选项</z-radio>
        <z-radio v-model="value1" value="2">备选项</z-radio>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value1" value="1" disabled>备选项</z-radio>
        <z-radio v-model="value1" value="2" disabled>备选项</z-radio>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">单选框组</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio-group v-model="value2">
          <z-radio value="1">备选项</z-radio>
          <z-radio value="2">备选项</z-radio>
          <z-radio value="3">备选项</z-radio>
        </z-radio-group>
      </div>
      <source-code collapse :code="codes.group"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value3" value="1" size="extra">超大选项</z-radio>
        <z-radio v-model="value3" value="2" size="large">大型选项</z-radio>
        <z-radio v-model="value3" value="3">默认选项</z-radio>
        <z-radio v-model="value3" value="4" size="small">小型选项</z-radio>
        <z-radio v-model="value3" value="5" size="mini">超小选项</z-radio>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">按钮样式</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-radio-group v-model="value4">
          <z-radio-button value="1">备选项</z-radio-button>
          <z-radio-button value="2">备选项</z-radio-button>
          <z-radio-button value="3" disabled>备选项</z-radio-button>
        </z-radio-group>
      </div>
      <source-code collapse :code="codes.button"></source-code>
    </div>
    <div class="component-header">Radio / RadioButton Attributes</div>
    <z-table :data="radioAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Radio / RadioButton Events</div>
    <z-table :data="radioEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">RadioGroup Attributes</div>
    <z-table :data="radioGroupAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">RadioGroup Events</div>
    <z-table :data="radioGroupEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('1')
const value2 = ref('1')
const value3 = ref('3')
const value4 = ref('1')

const codes = {
  general: `<z-radio v-model="value" value="1">备选项</z-radio>
<z-radio v-model="value" value="2">备选项</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  disabled: `<z-radio v-model="value" value="1" disabled>备选项</z-radio>
<z-radio v-model="value" value="2" disabled>备选项</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  group: `<z-radio-group v-model="value">
  <z-radio value="1">备选项</z-radio>
  <z-radio value="2">备选项</z-radio>
  <z-radio value="3">备选项</z-radio>
</z-radio-group>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  size: `<z-radio v-model="value" value="1" size="extra">超大选项</z-radio>
<z-radio v-model="value" value="2" size="large">大型选项</z-radio>
<z-radio v-model="value" value="3">默认选项</z-radio>
<z-radio v-model="value" value="4" size="small">小型选项</z-radio>
<z-radio v-model="value" value="5" size="mini">超小选项</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('3')
<\/script>`,
  button: `<z-radio-group v-model="value">
  <z-radio-button value="1">备选项</z-radio-button>
  <z-radio-button value="2">备选项</z-radio-button>
  <z-radio-button value="3" disabled>备选项</z-radio-button>
</z-radio-group>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`
}
const radioAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 radio 的 value',
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: 'radio input 的 value',
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: '尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'name',
  desc: '原生 name 属性',
  type: 'string'
}]
const radioEvents = [{
  name: 'change',
  desc: '绑定值变化时触发的回调',
  params: '选中的 radio 的 value 值'
}]
const radioGroupAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 radio 的 value',
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: '尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}]
const radioGroupEvents = [{
  name: 'change',
  desc: '绑定值变化时触发的回调',
  params: '选中的 radio 的 value 值'
}]
</script>