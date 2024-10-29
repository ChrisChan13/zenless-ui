<template>
  <div class="component">
    <div class="component-title">Link 文字链接</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link>默认链接</z-link>
        <z-link type="primary">主要链接</z-link>
        <z-link type="success">成功链接</z-link>
        <z-link type="info">信息链接</z-link>
        <z-link type="warning">警告链接</z-link>
        <z-link type="danger">危险链接</z-link>
      </div>
      <div class="component-preview-line">
        <z-link type="ether">以太链接</z-link>
        <z-link type="fire">火系链接</z-link>
        <z-link type="electric">电系链接</z-link>
        <z-link type="ice">冰系链接</z-link>
        <z-link type="physical">物理链接</z-link>
        <z-link highlight>醒目链接</z-link>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link disabled>默认链接</z-link>
        <z-link disabled type="primary">主要链接</z-link>
        <z-link disabled type="success">成功链接</z-link>
        <z-link disabled type="info">信息链接</z-link>
        <z-link disabled type="warning">警告链接</z-link>
        <z-link disabled type="danger">危险链接</z-link>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">下划线</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link>无下划线</z-link>
        <z-link underline>有下划线</z-link>
      </div>
      <source-code collapse :code="codes.underline"></source-code>
    </div>
    <div class="component-header">图标</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link type="success">
          <i class="z-icon-success"></i>
          <span>确认</span>
        </z-link>
        <z-link type="danger">
          <i class="z-icon-error"></i>
          <span>取消</span>
        </z-link>
      </div>
      <source-code collapse :code="codes.icon"></source-code>
    </div>
    <div class="component-header">Attributes</div>
    <z-table :data="attributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-link>默认链接</z-link>
<z-link type="primary">主要链接</z-link>
<z-link type="success">成功链接</z-link>
<z-link type="info">信息链接</z-link>
<z-link type="warning">警告链接</z-link>
<z-link type="danger">危险链接</z-link>

<z-link type="ether">以太链接</z-link>
<z-link type="fire">火系链接</z-link>
<z-link type="electric">电系链接</z-link>
<z-link type="ice">冰系链接</z-link>
<z-link type="physical">物理链接</z-link>
<z-link highlight>醒目链接</z-link>`,
  disabled: `<z-link disabled>默认链接</z-link>
<z-link disabled type="primary">主要链接</z-link>
<z-link disabled type="success">成功链接</z-link>
<z-link disabled type="info">信息链接</z-link>
<z-link disabled type="warning">警告链接</z-link>
<z-link disabled type="danger">危险链接</z-link>`,
  underline: `<z-link>无下划线</z-link>
<z-link underline>有下划线</z-link>`,
  icon: `<z-link type="success">
  <i class="z-icon-success"></i>
  <span>确认</span>
</z-link>
<z-link type="danger">
  <i class="z-icon-error"></i>
  <span>取消</span>
</z-link>`
}
const attributes = [{
  prop: 'type',
  desc: '类型',
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'highlight',
  desc: '醒目链接',
  type: 'boolean',
  default: false
}, {
  prop: 'underline',
  desc: '下划线',
  type: 'boolean',
  default: false
}, {
  prop: 'disabled',
  desc: '禁用链接',
  type: 'boolean',
  default: false
}, {
  prop: 'href',
  desc: '原生 href 属性',
  type: 'string'
}, {
  prop: 'icon',
  desc: '链接图标',
  type: 'string'
}]
</script>