<template>
  <div class="component">
    <div class="component-title">Tabs 标签页</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value1">
          <z-tab-panel label="基础" name="basic">基础</z-tab-panel>
          <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
          <z-tab-panel label="装备" name="gears">装备</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">自定义标签页</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value2">
          <z-tab-panel label="基础" name="basic">
            <template #label>
              <span style="margin-right: 5px">测试</span>
              <i class="z-icon-success"></i>
            </template>
            基础
          </z-tab-panel>
          <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
          <z-tab-panel label="装备" name="gears">装备</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">标签页禁用效果</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value3">
          <z-tab-panel label="基础" name="basic">基础</z-tab-panel>
          <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
          <z-tab-panel label="装备" name="gears" disabled>装备</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Tabs Attributes</div>
    <z-table :data="tabsAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Tabs Events</div>
    <z-table :data="tabsEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">TabPanel Attributes</div>
    <z-table :data="tabPanelAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">TabPanel Slots</div>
    <z-table :data="tabPanelSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('basic')
const value2 = ref('basic')
const value3 = ref('basic')

const codes = {
  general: `<z-tabs v-model="value">
  <z-tab-panel label="基础" name="basic">基础</z-tab-panel>
  <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
  <z-tab-panel label="装备" name="gears">装备</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`,
  custom: `<z-tabs v-model="value">
  <z-tab-panel label="基础" name="basic">
    <template #label>
      <span style="margin-right: 5px">测试</span>
      <i class="z-icon-success"></i>
    </template>
    基础
  </z-tab-panel>
  <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
  <z-tab-panel label="装备" name="gears">装备</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`,
  disabled: `<z-tabs v-model="value">
  <z-tab-panel label="基础" name="basic">基础</z-tab-panel>
  <z-tab-panel label="技能" name="skills">技能</z-tab-panel>
  <z-tab-panel label="装备" name="gears" disabled>装备</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`
}
const tabsAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 tab-panel 的 name 的值',
  type: 'string / number'
}, {
  prop: 'placement',
  desc: '标签的位置',
  type: 'boolean',
  values: 'top / top-left / top-right /\nbottom / bottom-left /\nbottom-right',
  default: 'top-right'
}]
const tabsEvents = [{
  name: 'change',
  desc: '选项激活回调',
  params: '选中的选项的 name'
}]
const tabPanelAttributes = [{
  prop: 'label',
  desc: '选项卡标题',
  type: 'string'
}, {
  prop: 'name',
  desc: '唯一标识',
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'lazy',
  desc: '延迟渲染，即选中时再渲染对应选项卡内容',
  type: 'boolean',
  default: 'false'
}]
const tabPanelSlots = [{
  name: 'default',
  desc: '选项卡的内容'
}, {
  name: 'label',
  desc: '选项卡的标题'
}]
</script>