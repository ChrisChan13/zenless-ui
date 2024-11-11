<template>
  <div class="component">
    <div class="component-title">{{ $t('component.button.title') }}</div>
    <div class="component-header">{{ $t('component.button.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button>{{ $t('component.button.default') }}</z-button>
        <z-button type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button type="success">{{ $t('component.button.success') }}</z-button>
        <z-button type="info">{{ $t('component.button.info') }}</z-button>
        <z-button type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button plain>{{ $t('component.button.plain') }}</z-button>
        <z-button plain type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button plain type="success">{{ $t('component.button.success') }}</z-button>
        <z-button plain type="info">{{ $t('component.button.info') }}</z-button>
        <z-button plain type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button plain type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button hollow>{{ $t('component.button.hollow') }}</z-button>
        <z-button hollow type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button hollow type="success">{{ $t('component.button.success') }}</z-button>
        <z-button hollow type="info">{{ $t('component.button.info') }}</z-button>
        <z-button hollow type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button hollow type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button type="ether">{{ $t('component.button.ether') }}</z-button>
        <z-button type="fire">{{ $t('component.button.fire') }}</z-button>
        <z-button type="electric">{{ $t('component.button.electric') }}</z-button>
        <z-button type="ice">{{ $t('component.button.ice') }}</z-button>
        <z-button type="physical">{{ $t('component.button.physical') }}</z-button>
        <z-button highlight>{{ $t('component.button.highlight') }}</z-button>
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
    <div class="component-header">{{ $t('component.button.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button disabled>{{ $t('component.button.default') }}</z-button>
        <z-button disabled type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button disabled type="success">{{ $t('component.button.success') }}</z-button>
        <z-button disabled type="info">{{ $t('component.button.info') }}</z-button>
        <z-button disabled type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button disabled type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button disabled plain>{{ $t('component.button.plain') }}</z-button>
        <z-button disabled plain type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button disabled plain type="success">{{ $t('component.button.success') }}</z-button>
        <z-button disabled plain type="info">{{ $t('component.button.info') }}</z-button>
        <z-button disabled plain type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button disabled plain type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button disabled hollow>{{ $t('component.button.hollow') }}</z-button>
        <z-button disabled hollow type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button disabled hollow type="success">{{ $t('component.button.success') }}</z-button>
        <z-button disabled hollow type="info">{{ $t('component.button.info') }}</z-button>
        <z-button disabled hollow type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button disabled hollow type="danger">{{ $t('component.button.danger') }}</z-button>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.button.icon') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button icon="success">{{ $t('component.button.default') }}</z-button>
        <z-button icon="success" type="primary">{{ $t('component.button.primary') }}</z-button>
        <z-button icon="success" type="success">{{ $t('component.button.success') }}</z-button>
        <z-button icon="success" type="info">{{ $t('component.button.info') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button icon="success" type="warning">{{ $t('component.button.warning') }}</z-button>
        <z-button icon="success" type="danger">{{ $t('component.button.danger') }}</z-button>
        <z-button icon="success" plain>{{ $t('component.button.plain') }}</z-button>
        <z-button icon="success" hollow>{{ $t('component.button.hollow') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button icon="success" highlight>{{ $t('component.button.highlight') }}</z-button>
        <z-button icon="success" disabled>{{ $t('component.button.default') }}</z-button>
        <z-button icon="success" disabled plain>{{ $t('component.button.plain') }}</z-button>
        <z-button icon="success" disabled hollow>{{ $t('component.button.hollow') }}</z-button>
      </div>
      <div class="component-preview-line">
        <z-button :icon="{ success: '#00cc0d' }">{{ $t('component.button.default') }}</z-button>
        <z-button>
          <i class="z-icon-success"></i>
          <span>{{ $t('component.button.default') }}</span>
        </z-button>
        <z-button>
          <z-icon class="z-icon-success" color="#00cc0d"></z-icon>
          <span>{{ $t('component.button.default') }}</span>
        </z-button>
        <z-button>
          <span>{{ $t('component.button.default') }}</span>
          <i class="z-icon-success"></i>
        </z-button>
      </div>
      <source-code collapse :code="codes.icon"></source-code>
    </div>
    <div class="component-header">{{ $t('component.button.loading') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button loading>{{ $t('component.button.default') }}</z-button>
        <z-button loading plain>{{ $t('component.button.plain') }}</z-button>
        <z-button loading hollow>{{ $t('component.button.hollow') }}</z-button>
      </div>
      <source-code collapse :code="codes.loading"></source-code>
    </div>
    <div class="component-header">{{ $t('component.button.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button size="extra">{{ $t('component.button.extra') }}</z-button>
        <z-button size="large">{{ $t('component.button.large') }}</z-button>
        <z-button>{{ $t('component.button.default') }}</z-button>
        <z-button size="small">{{ $t('component.button.small') }}</z-button>
        <z-button size="mini">{{ $t('component.button.mini') }}</z-button>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Attributes</div>
    <attribute-table :data="attributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-button>${$t('component.button.default')}</z-button>
<z-button type="primary">${$t('component.button.primary')}</z-button>
<z-button type="success">${$t('component.button.success')}</z-button>
<z-button type="info">${$t('component.button.info')}</z-button>
<z-button type="warning">${$t('component.button.warning')}</z-button>
<z-button type="danger">${$t('component.button.danger')}</z-button>

<z-button plain>${$t('component.button.plain')}</z-button>
<z-button plain type="primary">${$t('component.button.primary')}</z-button>
<z-button plain type="success">${$t('component.button.success')}</z-button>
<z-button plain type="info">${$t('component.button.info')}</z-button>
<z-button plain type="warning">${$t('component.button.warning')}</z-button>
<z-button plain type="danger">${$t('component.button.danger')}</z-button>

<z-button hollow>${$t('component.button.hollow')}</z-button>
<z-button hollow type="primary">${$t('component.button.primary')}</z-button>
<z-button hollow type="success">${$t('component.button.success')}</z-button>
<z-button hollow type="info">${$t('component.button.info')}</z-button>
<z-button hollow type="warning">${$t('component.button.warning')}</z-button>
<z-button hollow type="danger">${$t('component.button.danger')}</z-button>

<z-button type="ether">${$t('component.button.ether')}</z-button>
<z-button type="fire">${$t('component.button.fire')}</z-button>
<z-button type="electric">${$t('component.button.electric')}</z-button>
<z-button type="ice">${$t('component.button.ice')}</z-button>
<z-button type="physical">${$t('component.button.physical')}</z-button>
<z-button highlight>${$t('component.button.highlight')}</z-button>

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
  disabled: `<z-button disabled>${$t('component.button.default')}</z-button>
<z-button disabled type="primary">${$t('component.button.primary')}</z-button>
<z-button disabled type="success">${$t('component.button.success')}</z-button>
<z-button disabled type="info">${$t('component.button.info')}</z-button>
<z-button disabled type="warning">${$t('component.button.warning')}</z-button>
<z-button disabled type="danger">${$t('component.button.danger')}</z-button>

<z-button disabled plain>${$t('component.button.plain')}</z-button>
<z-button disabled plain type="primary">${$t('component.button.primary')}</z-button>
<z-button disabled plain type="success">${$t('component.button.success')}</z-button>
<z-button disabled plain type="info">${$t('component.button.info')}</z-button>
<z-button disabled plain type="warning">${$t('component.button.warning')}</z-button>
<z-button disabled plain type="danger">${$t('component.button.danger')}</z-button>

<z-button disabled hollow>${$t('component.button.hollow')}</z-button>
<z-button disabled hollow type="primary">${$t('component.button.primary')}</z-button>
<z-button disabled hollow type="success">${$t('component.button.success')}</z-button>
<z-button disabled hollow type="info">${$t('component.button.info')}</z-button>
<z-button disabled hollow type="warning">${$t('component.button.warning')}</z-button>
<z-button disabled hollow type="danger">${$t('component.button.danger')}</z-button>`,
  icon: `<z-button icon="success">${$t('component.button.default')}</z-button>
<z-button icon="success" type="primary">${$t('component.button.primary')}</z-button>
<z-button icon="success" type="success">${$t('component.button.success')}</z-button>
<z-button icon="success" type="info">${$t('component.button.info')}</z-button>

<z-button icon="success" type="warning">${$t('component.button.warning')}</z-button>
<z-button icon="success" type="danger">${$t('component.button.danger')}</z-button>
<z-button icon="success" plain>${$t('component.button.plain')}</z-button>
<z-button icon="success" hollow>${$t('component.button.hollow')}</z-button>

<z-button icon="success" highlight>${$t('component.button.highlight')}</z-button>
<z-button icon="success" disabled>${$t('component.button.default')}</z-button>
<z-button icon="success" disabled plain>${$t('component.button.plain')}</z-button>
<z-button icon="success" disabled hollow>${$t('component.button.hollow')}</z-button>

<z-button :icon="{ success: '#00cc0d' }">${$t('component.button.default')}</z-button>
<z-button>
  <i class="z-icon-success"></i>
  <span>${$t('component.button.default')}</span>
</z-button>
<z-button>
  <z-icon class="z-icon-success" color="#00cc0d"></z-icon>
  <span>${$t('component.button.default')}</span>
</z-button>
<z-button>
  <span>${$t('component.button.default')}</span>
  <i class="z-icon-success"></i>
</z-button>`,
  loading: `<z-button loading>${$t('component.button.default')}</z-button>
<z-button loading plain>${$t('component.button.plain')}</z-button>
<z-button loading hollow>${$t('component.button.hollow')}</z-button>`,
  size: `<z-button size="extra">${$t('component.button.extra')}</z-button>
<z-button size="large">${$t('component.button.large')}</z-button>
<z-button>${$t('component.button.default')}</z-button>
<z-button size="small">${$t('component.button.small')}</z-button>
<z-button size="mini">${$t('component.button.mini')}</z-button>`
}))
const attributes = computed(() => [{
  prop: 'size',
  desc: $t('attribute.button.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'type',
  desc: $t('attribute.button.type'),
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'icon',
  desc: $t('attribute.button.icon'),
  type: 'string'
}, {
  prop: 'loading',
  desc: $t('attribute.button.loading'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: $t('attribute.button.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'plain',
  desc: $t('attribute.button.plain'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'round',
  desc: $t('attribute.button.round'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'circle',
  desc: $t('attribute.button.circle'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'hollow',
  desc: $t('attribute.button.hollow'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'highlight',
  desc: $t('attribute.button.highlight'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'native-type',
  desc: $t('attribute.button.native-type'),
  type: 'string',
  values: 'button / submit / reset',
  default: 'button'
}])
</script>