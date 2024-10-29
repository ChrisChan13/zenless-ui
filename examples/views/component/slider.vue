<template>
  <div class="component">
    <div class="component-title">Slider 滑动输入条</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value1"></z-slider>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">显示 Tooltip</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value2" tooltip></z-slider>
      </div>
      <source-code collapse :code="codes.tooltip"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value3" tooltip disabled></z-slider>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Slider Attributes</div>
    <z-table :data="sliderAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Slider Events</div>
    <z-table :data="SliderEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(42)
const value2 = ref(42)
const value3 = ref(42)
const codes = {
  general: `<z-slider v-model="value"></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`,
  tooltip: `<z-slider v-model="value" tooltip></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`,
  disabled: `<z-slider v-model="value" tooltip disabled></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`
}
const sliderAttributes = [{
  prop: 'v-model',
  desc: '绑定值',
  type: 'number',
  default: '0'
}, {
  prop: 'min',
  desc: '最小值',
  type: 'number',
  default: '0'
}, {
  prop: 'max',
  desc: '最大值',
  type: 'number',
  default: '100'
}, {
  prop: 'step',
  desc: '步长',
  type: 'number',
  default: '1'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'tooltip',
  desc: '显示 tooltip',
  type: 'boolean',
  default: 'false'
}]
const SliderEvents = [{
  name: 'change',
  desc: '值改变时触发',
  params: '改变后的值'
}]
</script>

<style scoped>
.z-slider {
  flex: 1;
}
</style>