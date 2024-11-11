<template>
  <div class="component">
    <div class="component-title">{{ $t('component.link.title') }}</div>
    <div class="component-header">{{ $t('component.link.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link>{{ $t('component.link.default') }}</z-link>
        <z-link type="primary">{{ $t('component.link.primary') }}</z-link>
        <z-link type="success">{{ $t('component.link.success') }}</z-link>
        <z-link type="info">{{ $t('component.link.info') }}</z-link>
        <z-link type="warning">{{ $t('component.link.warning') }}</z-link>
        <z-link type="danger">{{ $t('component.link.danger') }}</z-link>
      </div>
      <div class="component-preview-line">
        <z-link type="ether">{{ $t('component.link.ether') }}</z-link>
        <z-link type="fire">{{ $t('component.link.fire') }}</z-link>
        <z-link type="electric">{{ $t('component.link.electric') }}</z-link>
        <z-link type="ice">{{ $t('component.link.ice') }}</z-link>
        <z-link type="physical">{{ $t('component.link.physical') }}</z-link>
        <z-link highlight>{{ $t('component.link.highlight') }}</z-link>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.link.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link disabled>{{ $t('component.link.default') }}</z-link>
        <z-link disabled type="primary">{{ $t('component.link.primary') }}</z-link>
        <z-link disabled type="success">{{ $t('component.link.success') }}</z-link>
        <z-link disabled type="info">{{ $t('component.link.info') }}</z-link>
        <z-link disabled type="warning">{{ $t('component.link.warning') }}</z-link>
        <z-link disabled type="danger">{{ $t('component.link.danger') }}</z-link>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.link.underline') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link>{{ $t('component.link.without-underline') }}</z-link>
        <z-link underline>{{ $t('component.link.with-underline') }}</z-link>
      </div>
      <source-code collapse :code="codes.underline"></source-code>
    </div>
    <div class="component-header">{{ $t('component.link.icon') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-link type="success">
          <i class="z-icon-success"></i>
          <span>{{ $t('component.link.confirm') }}</span>
        </z-link>
        <z-link type="danger">
          <i class="z-icon-error"></i>
          <span>{{ $t('component.link.cancel') }}</span>
        </z-link>
      </div>
      <source-code collapse :code="codes.icon"></source-code>
    </div>
    <div class="component-header">Attributes</div>
    <attribute-table :data="attributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-link>${$t('component.link.default')}</z-link>
<z-link type="primary">${$t('component.link.primary')}</z-link>
<z-link type="success">${$t('component.link.success')}</z-link>
<z-link type="info">${$t('component.link.info')}</z-link>
<z-link type="warning">${$t('component.link.warning')}</z-link>
<z-link type="danger">${$t('component.link.danger')}</z-link>

<z-link type="ether">${$t('component.link.ether')}</z-link>
<z-link type="fire">${$t('component.link.fire')}</z-link>
<z-link type="electric">${$t('component.link.electric')}</z-link>
<z-link type="ice">${$t('component.link.ice')}</z-link>
<z-link type="physical">${$t('component.link.physical')}</z-link>
<z-link highlight>${$t('component.link.highlight')}</z-link>`,
  disabled: `<z-link disabled>${$t('component.link.default')}</z-link>
<z-link disabled type="primary">${$t('component.link.primary')}</z-link>
<z-link disabled type="success">${$t('component.link.success')}</z-link>
<z-link disabled type="info">${$t('component.link.info')}</z-link>
<z-link disabled type="warning">${$t('component.link.warning')}</z-link>
<z-link disabled type="danger">${$t('component.link.danger')}</z-link>`,
  underline: `<z-link>${$t('component.link.without-underline')}</z-link>
<z-link underline>${$t('component.link.with-underline')}</z-link>`,
  icon: `<z-link type="success">
  <i class="z-icon-success"></i>
  <span>${$t('component.link.confirm')}</span>
</z-link>
<z-link type="danger">
  <i class="z-icon-error"></i>
  <span>${$t('component.link.cancel')}</span>
</z-link>`
}))
const attributes = computed(() => [{
  prop: 'type',
  desc: $t('attribute.link.type'),
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'highlight',
  desc: $t('attribute.link.highlight'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'underline',
  desc: $t('attribute.link.underline'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: $t('attribute.link.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'href',
  desc: $t('attribute.link.href'),
  type: 'string'
}, {
  prop: 'icon',
  desc: $t('attribute.link.icon'),
  type: 'string'
}])
</script>