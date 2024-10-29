<template>
  <div class="component">
    <div class="component-title">Menu 导航菜单</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-menu v-model="value">
          <z-sub-menu name="1-0" icon="info" title="导航一">
            <z-menu-item name="1-1" icon="info" title="选项一" ></z-menu-item>
            <z-menu-item name="1-2">选项二</z-menu-item>
            <z-menu-item name="1-3" disabled>选项三</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="2-0" icon="info">
            <template #title>
              <span>导航二</span>
            </template>
            <z-menu-item name="2-1" title="选项四"></z-menu-item>
          </z-sub-menu>
          <z-menu-item name="3-0">导航三</z-menu-item>
          <z-menu-item name="4-0" disabled>导航四</z-menu-item>
        </z-menu>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">手风琴效果</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-menu accordion>
          <z-sub-menu name="1-0" title="导航一">
            <z-menu-item name="1-1" title="选项一" ></z-menu-item>
            <z-menu-item name="1-2">选项二</z-menu-item>
            <z-menu-item name="1-3">选项三</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="2-0" title="导航二">
            <z-menu-item name="2-1" title="选项四"></z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="3-0" title="导航三">
            <z-menu-item name="3-1" title="选项五"></z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="4-0" title="导航四">
            <z-menu-item name="4-1" title="选项六"></z-menu-item>
          </z-sub-menu>
        </z-menu>
      </div>
      <source-code collapse :code="codes.accordion"></source-code>
    </div>
    <div class="component-header">Menu Attributes</div>
    <z-table :data="menuAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Menu Events</div>
    <z-table :data="menuEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">SubMenu Attributes</div>
    <z-table :data="subMenuAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">SubMenu Slots</div>
    <z-table :data="subMenuSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">MenuItem Attributes</div>
    <z-table :data="menuItemAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('1-2')
const codes = {
  general: `<z-menu v-model="value">
  <z-sub-menu name="1-0" icon="info" title="导航一">
    <z-menu-item name="1-1" icon="info" title="选项一" ></z-menu-item>
    <z-menu-item name="1-2">选项二</z-menu-item>
    <z-menu-item name="1-3" disabled>选项三</z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="2-0" icon="info">
    <template #title>
      <span>导航二</span>
    </template>
    <z-menu-item name="2-1" title="选项四"></z-menu-item>
  </z-sub-menu>
  <z-menu-item name="3-0">导航三</z-menu-item>
  <z-menu-item name="4-0" disabled>导航四</z-menu-item>
</z-menu>

<script setup>
import { ref } from 'vue'

const value = ref('1-2')
<\/script>`,
  accordion: `<z-menu accordion>
  <z-sub-menu name="1-0" title="导航一">
    <z-menu-item name="1-1" title="选项一" ></z-menu-item>
    <z-menu-item name="1-2">选项二</z-menu-item>
    <z-menu-item name="1-3">选项三</z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="2-0" title="导航二">
    <z-menu-item name="2-1" title="选项四"></z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="3-0" title="导航三">
    <z-menu-item name="3-1" title="选项五"></z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="4-0" title="导航四">
    <z-menu-item name="4-1" title="选项六"></z-menu-item>
  </z-sub-menu>
</z-menu>`
}
const menuAttributes = [{
  prop: 'v-model',
  desc: '绑定值，选中的 menu-item 的 name 的值',
  type: 'string / number'
}, {
  prop: 'accordion',
  desc: '手风琴模式',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'default-open',
  desc: '默认展开的 sub-menu 的 name 的值或数组',
  type: 'string / number / array'
}]
const menuEvents = [{
  name: 'change',
  desc: '菜单激活回调',
  params: '选中的菜单项的 name'
}]
const subMenuAttributes = [{
  prop: 'name',
  desc: '唯一标识',
  type: 'string / number'
}, {
  prop: 'title',
  desc: '菜单项标题',
  type: 'string'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'icon',
  desc: '菜单项图标',
  type: 'string'
}]
const subMenuSlots = [{
  name: 'default',
  desc: '子菜单'
}, {
  name: 'title',
  desc: '菜单项标题'
}]
const menuItemAttributes = [{
  prop: 'name',
  desc: '唯一标识',
  type: 'string / number'
}, {
  prop: 'title',
  desc: '菜单项标题',
  type: 'string'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'icon',
  desc: '菜单项图标',
  type: 'string'
}]
</script>
