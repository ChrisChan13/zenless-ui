<template>
  <div class="component">
    <div class="component-title">Modal 对话框</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible = !visible">打开 Modal</z-button>
        <z-modal v-model="visible" title="提示" @cancel="visible = false" @confirm="visible = false">
          <span>这是一段信息</span>
        </z-modal>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">全屏模式</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible2 = !visible2">打开 Modal</z-button>
        <z-modal v-model="visible2" title="提示" fullscreen @cancel="visible2 = false" @confirm="visible2 = false">
          <span>这是一段信息</span>
        </z-modal>
      </div>
      <source-code :code="codes.fullscreen" collapse></source-code>
    </div>
    <div class="component-header">Modal Attributes</div>
    <z-table :data="modalAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Modal Slots</div>
    <z-table :data="modalSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">Modal Events</div>
    <z-table :data="modalEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)
const codes = {
  general: `<z-button @click="visible = !visible">打开 Modal</z-button>
<z-modal v-model="visible" title="提示">
  <span>这是一段信息</span>
</z-modal>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`,
  fullscreen: `<z-button @click="visible = !visible">打开 Modal</z-button>
<z-modal v-model="visible" title="提示" fullscreen>
  <span>这是一段信息</span>
</z-modal>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}
const modalAttributes = [{
  prop: 'v-model',
  desc: '是否显示 modal',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'title',
  desc: 'modal 的标题',
  type: 'string'
}, {
  prop: 'mask',
  desc: '是否展示遮罩',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'mask-closable',
  desc: '点击蒙层是否允许关闭',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'closable',
  desc: '是否显示关闭按钮，fullscreen 模式不支持',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'fullscreen',
  desc: '全屏模式',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'show-footer',
  desc: '是否展示按钮操作区',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'show-cancel',
  desc: '是否展示取消按钮',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'cancel-text',
  desc: '取消按钮的文字',
  type: 'string',
  default: '取消'
}, {
  prop: 'confirm-text',
  desc: '确认按钮的文字',
  type: 'string',
  default: '确认'
}]
const modalSlots = [{
  name: 'default',
  desc: 'modal 的内容'
}, {
  name: 'title',
  desc: 'modal 标题区的内容'
}, {
  name: 'footer',
  desc: 'modal 按钮操作区的内容'
}]
const modalEvents = [{
  name: 'open',
  desc: 'modal 打开的回调'
}, {
  name: 'close',
  desc: 'modal 关闭的回调，关闭按钮 或 遮罩层 触发'
}, {
  name: 'cancel',
  desc: 'modal 取消的回调'
}, {
  name: 'confirm',
  desc: 'modal 确认的回调'
}]
</script>