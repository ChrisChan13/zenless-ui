<template>
  <div class="component">
    <div class="component-title">Tag 标签</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-tag>默认标签</z-tag>
        <z-tag type="primary">标签一</z-tag>
        <z-tag type="success">标签二</z-tag>
        <z-tag type="info">标签三</z-tag>
        <z-tag type="warning">标签四</z-tag>
        <z-tag type="danger">标签五</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag plain>朴素标签</z-tag>
        <z-tag plain type="primary">标签一</z-tag>
        <z-tag plain type="success">标签二</z-tag>
        <z-tag plain type="info">标签三</z-tag>
        <z-tag plain type="warning">标签四</z-tag>
        <z-tag plain type="danger">标签五</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag hollow>镂空标签</z-tag>
        <z-tag hollow type="primary">标签一</z-tag>
        <z-tag hollow type="success">标签二</z-tag>
        <z-tag hollow type="info">标签三</z-tag>
        <z-tag hollow type="warning">标签四</z-tag>
        <z-tag hollow type="danger">标签五</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag type="ether">以太标签</z-tag>
        <z-tag type="fire">火系标签</z-tag>
        <z-tag type="electric">电系标签</z-tag>
        <z-tag type="ice">冰系标签</z-tag>
        <z-tag type="physical">物理标签</z-tag>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">可移除标签</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-tag
          v-for="tag in tags"
          :key="tag"
          closable
         
          @close="handleClose(tag)"
        >{{ tag }}</z-tag>
      </div>
      <source-code collapse :code="codes.closable"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-tag size="extra">超大标签</z-tag>
        <z-tag size="large">大型标签</z-tag>
        <z-tag>默认标签</z-tag>
        <z-tag size="small">小型标签</z-tag>
        <z-tag size="mini">超小标签</z-tag>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Tag Attributes</div>
    <z-table :data="tagAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Tag Events</div>
    <z-table :data="tagEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const codes = {
  general: `<z-tag>默认标签</z-tag>
<z-tag type="primary">标签一</z-tag>
<z-tag type="success">标签二</z-tag>
<z-tag type="info">标签三</z-tag>
<z-tag type="warning">标签四</z-tag>
<z-tag type="danger">标签五</z-tag>

<z-tag plain>朴素标签</z-tag>
<z-tag plain type="primary">标签一</z-tag>
<z-tag plain type="success">标签二</z-tag>
<z-tag plain type="info">标签三</z-tag>
<z-tag plain type="warning">标签四</z-tag>
<z-tag plain type="danger">标签五</z-tag>

<z-tag hollow>镂空标签</z-tag>
<z-tag hollow type="primary">标签一</z-tag>
<z-tag hollow type="success">标签二</z-tag>
<z-tag hollow type="info">标签三</z-tag>
<z-tag hollow type="warning">标签四</z-tag>
<z-tag hollow type="danger">标签五</z-tag>

<z-tag type="ether">以太标签</z-tag>
<z-tag type="fire">火系标签</z-tag>
<z-tag type="electric">电系标签</z-tag>
<z-tag type="ice">冰系标签</z-tag>
<z-tag type="physical">物理标签</z-tag>`,
  closable: `<z-tag
  v-for="tag in tags"
  :key="tag"
  closable
 
  @close="handleClose(tag)"
>{{ tag }}</z-tag>

<script setup>
import { ref } from 'vue'

const tags = ref(['标签一', '标签二', '标签三', '标签四', '标签五'])

const handleClose = (tag) => {
  if (tags.value.length === 1) return
  tags.value.splice(tags.value.indexOf(tag), 1)
}
<\/script>`,
  size: `<z-tag size="extra" closable>超大标签</z-tag>
<z-tag size="large" closable>大型标签</z-tag>
<z-tag closable>默认标签</z-tag>
<z-tag size="small" closable>小型标签</z-tag>
<z-tag size="mini" closable>超小标签</z-tag>`
}
const tags = ref(['标签一', '标签二', '标签三', '标签四', '标签五'])
const tagAttributes = [{
  prop: 'size',
  desc: '尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'type',
  desc: '类型',
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'plain',
  desc: '朴素按钮',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'round',
  desc: '圆角按钮',
  type: 'boolean',
  default: 'true'
}, {
  prop: 'hollow',
  desc: '镂空按钮',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'closable',
  desc: '是否可关闭',
  type: 'boolean',
  default: 'false'
}]
const tagEvents = [{
  name: 'close',
  desc: '关闭 tag 时触发的事件'
}]

const handleClose = (tag) => {
  if (tags.value.length === 1) return
  tags.value.splice(tags.value.indexOf(tag), 1)
}
</script>