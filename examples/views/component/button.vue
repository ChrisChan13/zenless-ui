<template>
  <div class="component">
    <div class="component-title">Button 按钮</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button>默认按钮</z-button>
        <z-button type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warning">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button plain>朴素按钮</z-button>
        <z-button plain type="primary">主要按钮</z-button>
        <z-button plain type="success">成功按钮</z-button>
        <z-button plain type="info">信息按钮</z-button>
        <z-button plain type="warning">警告按钮</z-button>
        <z-button plain type="danger">危险按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button hollow>镂空按钮</z-button>
        <z-button hollow type="primary">主要按钮</z-button>
        <z-button hollow type="success">成功按钮</z-button>
        <z-button hollow type="info">信息按钮</z-button>
        <z-button hollow type="warning">警告按钮</z-button>
        <z-button hollow type="danger">危险按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button type="ether">以太按钮</z-button>
        <z-button type="fire">火系按钮</z-button>
        <z-button type="electric">电系按钮</z-button>
        <z-button type="ice">冰系按钮</z-button>
        <z-button type="physical">物理按钮</z-button>
        <z-button highlight>醒目按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button circle icon="success"></z-button>
        <z-button circle icon="success" type="primary"></z-button>
        <z-button circle icon="success" type="success"></z-button>
        <z-button circle icon="success" type="info"></z-button>
        <z-button circle icon="success" type="warning"></z-button>
        <z-button circle icon="success" type="danger"></z-button>
        <z-button circle icon="success" type="ether"></z-button>
        <z-button circle icon="success" type="fire"></z-button>
        <z-button circle icon="success" type="electric"></z-button>
        <z-button circle icon="success" type="ice"></z-button>
        <z-button circle icon="success" type="physical"></z-button>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button disabled>默认按钮</z-button>
        <z-button disabled type="primary">主要按钮</z-button>
        <z-button disabled type="success">成功按钮</z-button>
        <z-button disabled type="info">信息按钮</z-button>
        <z-button disabled type="warning">警告按钮</z-button>
        <z-button disabled type="danger">危险按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button disabled plain>朴素按钮</z-button>
        <z-button disabled plain type="primary">主要按钮</z-button>
        <z-button disabled plain type="success">成功按钮</z-button>
        <z-button disabled plain type="info">信息按钮</z-button>
        <z-button disabled plain type="warning">警告按钮</z-button>
        <z-button disabled plain type="danger">危险按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button disabled hollow>镂空按钮</z-button>
        <z-button disabled hollow type="primary">主要按钮</z-button>
        <z-button disabled hollow type="success">成功按钮</z-button>
        <z-button disabled hollow type="info">信息按钮</z-button>
        <z-button disabled hollow type="warning">警告按钮</z-button>
        <z-button disabled hollow type="danger">危险按钮</z-button>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">图标按钮</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button icon="success">默认按钮</z-button>
        <z-button icon="success" type="primary">主要按钮</z-button>
        <z-button icon="success" type="success">成功按钮</z-button>
        <z-button icon="success" type="info">信息按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button icon="success" type="warning">警告按钮</z-button>
        <z-button icon="success" type="danger">危险按钮</z-button>
        <z-button icon="success" plain>朴素按钮</z-button>
        <z-button icon="success" hollow>镂空按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button icon="success" highlight>醒目按钮</z-button>
        <z-button icon="success" disabled>默认按钮</z-button>
        <z-button icon="success" disabled plain>朴素按钮</z-button>
        <z-button icon="success" disabled hollow>镂空按钮</z-button>
      </div>
      <div class="component-preview-line">
        <z-button :icon="{ success: '#00cc0d' }">默认按钮</z-button>
        <z-button>
          <i class="z-icon-success"></i>
          <span>默认按钮</span>
        </z-button>
        <z-button>
          <z-icon class="z-icon-success" color="#00cc0d"></z-icon>
          <span>默认按钮</span>
        </z-button>
        <z-button>
          <span>默认按钮</span>
          <i class="z-icon-success"></i>
        </z-button>
      </div>
      <source-code collapse :code="codes.icon"></source-code>
    </div>
    <div class="component-header">加载中</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button loading>默认按钮</z-button>
        <z-button loading plain>朴素按钮</z-button>
        <z-button loading hollow>镂空按钮</z-button>
      </div>
      <source-code collapse :code="codes.loading"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button size="extra">超大按钮</z-button>
        <z-button size="large">大型按钮</z-button>
        <z-button>默认按钮</z-button>
        <z-button size="small">小型按钮</z-button>
        <z-button size="mini">超小按钮</z-button>
      </div>
      <source-code collapse :code="codes.size"></source-code>
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
  general: `<z-button>默认按钮</z-button>
<z-button type="primary">主要按钮</z-button>
<z-button type="success">成功按钮</z-button>
<z-button type="info">信息按钮</z-button>
<z-button type="warning">警告按钮</z-button>
<z-button type="danger">危险按钮</z-button>

<z-button plain>朴素按钮</z-button>
<z-button plain type="primary">主要按钮</z-button>
<z-button plain type="success">成功按钮</z-button>
<z-button plain type="info">信息按钮</z-button>
<z-button plain type="warning">警告按钮</z-button>
<z-button plain type="danger">危险按钮</z-button>

<z-button hollow>镂空按钮</z-button>
<z-button hollow type="primary">主要按钮</z-button>
<z-button hollow type="success">成功按钮</z-button>
<z-button hollow type="info">信息按钮</z-button>
<z-button hollow type="warning">警告按钮</z-button>
<z-button hollow type="danger">危险按钮</z-button>

<z-button type="ether">以太按钮</z-button>
<z-button type="fire">火系按钮</z-button>
<z-button type="electric">电系按钮</z-button>
<z-button type="ice">冰系按钮</z-button>
<z-button type="physical">物理按钮</z-button>
<z-button highlight>醒目按钮</z-button>

<z-button circle icon="success"></z-button>
<z-button circle icon="success" type="primary"></z-button>
<z-button circle icon="success" type="success"></z-button>
<z-button circle icon="success" type="info"></z-button>
<z-button circle icon="success" type="warning"></z-button>
<z-button circle icon="success" type="danger"></z-button>
<z-button circle icon="success" type="ether"></z-button>
<z-button circle icon="success" type="fire"></z-button>
<z-button circle icon="success" type="electric"></z-button>
<z-button circle icon="success" type="ice"></z-button>
<z-button circle icon="success" type="physical"></z-button>`,
  disabled: `<z-button disabled>默认按钮</z-button>
<z-button disabled type="primary">主要按钮</z-button>
<z-button disabled type="success">成功按钮</z-button>
<z-button disabled type="info">信息按钮</z-button>
<z-button disabled type="warning">警告按钮</z-button>
<z-button disabled type="danger">危险按钮</z-button>

<z-button disabled plain>朴素按钮</z-button>
<z-button disabled plain type="primary">主要按钮</z-button>
<z-button disabled plain type="success">成功按钮</z-button>
<z-button disabled plain type="info">信息按钮</z-button>
<z-button disabled plain type="warning">警告按钮</z-button>
<z-button disabled plain type="danger">危险按钮</z-button>

<z-button disabled hollow>镂空按钮</z-button>
<z-button disabled hollow type="primary">主要按钮</z-button>
<z-button disabled hollow type="success">成功按钮</z-button>
<z-button disabled hollow type="info">信息按钮</z-button>
<z-button disabled hollow type="warning">警告按钮</z-button>
<z-button disabled hollow type="danger">危险按钮</z-button>`,
  icon: `<z-button icon="success">默认按钮</z-button>
<z-button icon="success" type="primary">主要按钮</z-button>
<z-button icon="success" type="success">成功按钮</z-button>
<z-button icon="success" type="info">信息按钮</z-button>

<z-button icon="success" type="warning">警告按钮</z-button>
<z-button icon="success" type="danger">危险按钮</z-button>
<z-button icon="success" plain>朴素按钮</z-button>
<z-button icon="success" hollow>镂空按钮</z-button>

<z-button icon="success" highlight>醒目按钮</z-button>
<z-button icon="success" disabled>默认按钮</z-button>
<z-button icon="success" disabled plain>朴素按钮</z-button>
<z-button icon="success" disabled hollow>镂空按钮</z-button>

<z-button :icon="{ success: '#00cc0d' }">默认按钮</z-button>
<z-button>
  <i class="z-icon-success"></i>
  <span>默认按钮</span>
</z-button>
<z-button>
  <z-icon class="z-icon-success" color="#00cc0d"></z-icon>
  <span>默认按钮</span>
</z-button>
<z-button>
  <span>默认按钮</span>
  <i class="z-icon-success"></i>
</z-button>`,
  loading: `<z-button loading>默认按钮</z-button>
<z-button loading plain>朴素按钮</z-button>
<z-button loading hollow>镂空按钮</z-button>`,
  size: `<z-button size="extra">超大按钮</z-button>
<z-button size="large">大型按钮</z-button>
<z-button>默认按钮</z-button>
<z-button size="small">小型按钮</z-button>
<z-button size="mini">超小按钮</z-button>`
}
const attributes = [{
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
  prop: 'icon',
  desc: '按钮图标',
  type: 'string'
}, {
  prop: 'loading',
  desc: '加载中状态',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
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
  prop: 'circle',
  desc: '圆形按钮',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'hollow',
  desc: '镂空按钮',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'highlight',
  desc: '醒目按钮',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'native-type',
  desc: '原生 type 属性',
  type: 'string',
  values: 'button / submit / reset',
  default: 'button'
}]
</script>