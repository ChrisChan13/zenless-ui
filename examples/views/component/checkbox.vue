<template>
  <div class="component">
    <div class="component-title">Checkbox 多选框</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked1">备选项</z-checkbox>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked2" disabled>备选项</z-checkbox>
        <z-checkbox v-model="checked3" disabled>备选项</z-checkbox>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">多选框组</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked4">
          <z-checkbox value="1">备选项</z-checkbox>
          <z-checkbox value="2">备选项</z-checkbox>
          <z-checkbox value="3">备选项</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.group"></source-code>
    </div>
    <div class="component-header">可选项目数量限制</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked9" :min="1" :max="2">
          <z-checkbox value="1">备选项</z-checkbox>
          <z-checkbox value="2">备选项</z-checkbox>
          <z-checkbox value="3">备选项</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.limit"></source-code>
    </div>
    <div class="component-header">半选状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked5" :indeterminate="indeterminate" @change="handleCheckAll">全选</z-checkbox>
      </div>
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked6" @change="handleItemCheck">
          <z-checkbox value="1">备选项</z-checkbox>
          <z-checkbox value="2">备选项</z-checkbox>
          <z-checkbox value="3">备选项</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.indeterminate"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked7">
          <z-checkbox value="1" size="extra">超大选项</z-checkbox>
          <z-checkbox value="2" size="large">大型选项</z-checkbox>
          <z-checkbox value="3">默认选项</z-checkbox>
          <z-checkbox value="4" size="small">小型选项</z-checkbox>
          <z-checkbox value="5" size="mini">超小选项</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">按钮样式</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked8">
          <z-checkbox-button value="1">备选项</z-checkbox-button>
          <z-checkbox-button value="2">备选项</z-checkbox-button>
          <z-checkbox-button value="3" disabled>备选项</z-checkbox-button>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.button"></source-code>
    </div>
    <div class="component-header">Checkbox / CheckboxButton Attributes</div>
    <z-table :data="checkboxAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Checkbox / CheckboxButton Events</div>
    <z-table :data="checkboxEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">CheckboxGroup Attributes</div>
    <z-table :data="checkboxGroupAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">CheckboxGroup Events</div>
    <z-table :data="checkboxGroupEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(['1'])
const checked5 = ref(false)
const indeterminate = ref(true)
const checked6 = ref(['1', '2'])
const checked7 = ref(['3'])
const checked8 = ref(['1'])
const checked9 = ref(['1', '2'])

const codes = {
  general: `<z-checkbox v-model="checked">备选项</z-checkbox>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
<\/script>`,
  disabled: `<z-checkbox v-model="checked1" disabled>备选项</z-checkbox>
<z-checkbox v-model="checked2" disabled>备选项</z-checkbox>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
<\/script>`,
  group: `<z-checkbox-group v-model="checked">
  <z-checkbox value="1">备选项</z-checkbox>
  <z-checkbox value="2">备选项</z-checkbox>
  <z-checkbox value="3">备选项</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1'])
<\/script>`,
  limit: `<z-checkbox-group v-model="checked" :min="1" :max="2">
  <z-checkbox value="1">备选项</z-checkbox>
  <z-checkbox value="2">备选项</z-checkbox>
  <z-checkbox value="3">备选项</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1', '2'])
<\/script>`,
  indeterminate: `<z-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll">全选</z-checkbox>

<z-checkbox-group v-model="checked" @change="handleItemCheck">
  <z-checkbox value="1">备选项</z-checkbox>
  <z-checkbox value="2">备选项</z-checkbox>
  <z-checkbox value="3">备选项</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checked = ref(['1', '2'])

const handleCheckAll = (value) => {
  if (value) {
    checked.value = ['1', '2', '3']
  } else {
    checked.value = []
  }
  isIndeterminate.value = false
}

const handleItemCheck = (value) => {
  checked.value = value
  checkAll.value = value.length === 3
  isIndeterminate.value = value.length > 0 && value.length < 3
}
<\/script>`,
  size: `<z-checkbox-group v-model="checked">
  <z-checkbox value="1" size="extra">超大选项</z-checkbox>
  <z-checkbox value="2" size="large">大型选项</z-checkbox>
  <z-checkbox value="3">默认选项</z-checkbox>
  <z-checkbox value="4" size="small">小型选项</z-checkbox>
  <z-checkbox value="5" size="mini">超小选项</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['3'])
<\/script>`,
  button: `<z-checkbox-group v-model="checked">
  <z-checkbox-button value="1">备选项</z-checkbox-button>
  <z-checkbox-button value="2">备选项</z-checkbox-button>
  <z-checkbox-button value="3" disabled>备选项</z-checkbox-button>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1'])
<\/script>`,
}
const checkboxAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 checkbox 的 value',
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: 'checkbox input 的 value',
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
}, {
  prop: 'indeterminate',
  desc: '半选状态',
  type: 'boolean',
  default: 'false'
}]
const checkboxEvents = [{
  name: 'change',
  desc: '绑定值变化时触发的回调',
  params: '选中的 checkbox 的 value 值'
}]
const checkboxGroupAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 checkbox 的 value',
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
  prop: 'min',
  desc: '可选数量最小值',
  type: 'number'
}, {
  prop: 'max',
  desc: '可选数量最大值',
  type: 'number'
}]
const checkboxGroupEvents = [{
  name: 'change',
  desc: '绑定值变化时触发的回调',
  params: '选中的 checkbox 的 value 值'
}]

const handleCheckAll = (value) => {
  if (value) {
    checked6.value = ['1', '2', '3']
  } else {
    checked6.value = []
  }
  indeterminate.value = false
}
const handleItemCheck = (value) => {
  checked6.value = value
  checked5.value = value.length === 3
  indeterminate.value = value.length > 0 && value.length < 3
}
</script>