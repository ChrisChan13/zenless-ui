<template>
  <div class="component">
    <div class="component-title">Badge 徽标</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-badge :value="42">
          <z-tag>默认徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="primary">
          <z-tag>主要徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="success">
          <z-tag>成功徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="info">
          <z-tag>信息徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="warning">
          <z-tag>警告徽标</z-tag>
        </z-badge>
      </div>
      <div class="component-preview-line">
        <z-badge :value="42" type="ether">
          <z-tag>以太徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="fire">
          <z-tag>火系徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="electric">
          <z-tag>电系徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="ice">
          <z-tag>冰系徽标</z-tag>
        </z-badge>
        <z-badge :value="42" type="physical">
          <z-tag>物理徽标</z-tag>
        </z-badge>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">小圆点</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-badge is-dot>
          <z-tag>默认徽标</z-tag>
        </z-badge>
        <z-badge is-dot type="primary">
          <z-tag>主要徽标</z-tag>
        </z-badge>
        <z-badge is-dot type="success">
          <z-tag>成功徽标</z-tag>
        </z-badge>
        <z-badge is-dot type="info">
          <z-tag>信息徽标</z-tag>
        </z-badge>
        <z-badge is-dot type="warning">
          <z-tag>警告徽标</z-tag>
        </z-badge>
      </div>
      <source-code :code="codes.dot" collapse></source-code>
    </div>
    <div class="component-header">Badge Attributes</div>
    <z-table :data="badgeAttributes">
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
  general: `<z-badge :value="42">
  <z-tag>默认徽标</z-tag>
</z-badge>
<z-badge :value="42" type="primary">
  <z-tag>主要徽标</z-tag>
</z-badge>
<z-badge :value="42" type="success">
  <z-tag>成功徽标</z-tag>
</z-badge>
<z-badge :value="42" type="info">
  <z-tag>信息徽标</z-tag>
</z-badge>
<z-badge :value="42" type="warning">
  <z-tag>警告徽标</z-tag>
</z-badge>

<z-badge :value="42" type="ether">
  <z-tag>以太徽标</z-tag>
</z-badge>
<z-badge :value="42" type="fire">
  <z-tag>火系徽标</z-tag>
</z-badge>
<z-badge :value="42" type="electric">
  <z-tag>电系徽标</z-tag>
</z-badge>
<z-badge :value="42" type="ice">
  <z-tag>冰系徽标</z-tag>
</z-badge>
<z-badge :value="42" type="physical">
  <z-tag>物理徽标</z-tag>
</z-badge>`,
  dot: `<z-badge is-dot>
  <z-tag>默认徽标</z-tag>
</z-badge>
<z-badge is-dot type="primary">
  <z-tag>主要徽标</z-tag>
</z-badge>
<z-badge is-dot type="success">
  <z-tag>成功徽标</z-tag>
</z-badge>
<z-badge is-dot type="info">
  <z-tag>信息徽标</z-tag>
</z-badge>
<z-badge is-dot type="warning">
  <z-tag>警告徽标</z-tag>
</z-badge>`
}
const badgeAttributes = [{
  prop: 'type',
  desc: '类型',
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'is-dot',
  desc: '小圆点',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'value',
  desc: '显示值',
  type: 'string / number'
}]
</script>

<style scoped lang="scss">
.z-badge+.z-badge {
  margin-left: 40px;
}
</style>