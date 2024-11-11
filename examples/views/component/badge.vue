<template>
  <div class="component">
    <div class="component-title">{{ $t('component.badge.title') }}</div>
    <div class="component-header">{{ $t('component.badge.usage') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-badge :value="42">
          <z-tag>{{ $t('component.badge.default') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="primary">
          <z-tag>{{ $t('component.badge.primary') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="success">
          <z-tag>{{ $t('component.badge.success') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="info">
          <z-tag>{{ $t('component.badge.info') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="warning">
          <z-tag>{{ $t('component.badge.warning') }}</z-tag>
        </z-badge>
      </div>
      <div class="component-preview-line">
        <z-badge :value="42" type="ether">
          <z-tag>{{ $t('component.badge.ether') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="fire">
          <z-tag>{{ $t('component.badge.fire') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="electric">
          <z-tag>{{ $t('component.badge.electric') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="ice">
          <z-tag>{{ $t('component.badge.ice') }}</z-tag>
        </z-badge>
        <z-badge :value="42" type="physical">
          <z-tag>{{ $t('component.badge.physical') }}</z-tag>
        </z-badge>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.badge.dot') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-badge is-dot>
          <z-tag>{{ $t('component.badge.default') }}</z-tag>
        </z-badge>
        <z-badge is-dot type="primary">
          <z-tag>{{ $t('component.badge.primary') }}</z-tag>
        </z-badge>
        <z-badge is-dot type="success">
          <z-tag>{{ $t('component.badge.success') }}</z-tag>
        </z-badge>
        <z-badge is-dot type="info">
          <z-tag>{{ $t('component.badge.info') }}</z-tag>
        </z-badge>
        <z-badge is-dot type="warning">
          <z-tag>{{ $t('component.badge.warning') }}</z-tag>
        </z-badge>
      </div>
      <source-code :code="codes.dot" collapse></source-code>
    </div>
    <div class="component-header">Badge Attributes</div>
    <attribute-table :data="badgeAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-badge :value="42">
  <z-tag>${$t('component.badge.default')}</z-tag>
</z-badge>
<z-badge :value="42" type="primary">
  <z-tag>${$t('component.badge.primary')}</z-tag>
</z-badge>
<z-badge :value="42" type="success">
  <z-tag>${$t('component.badge.success')}</z-tag>
</z-badge>
<z-badge :value="42" type="info">
  <z-tag>${$t('component.badge.info')}</z-tag>
</z-badge>
<z-badge :value="42" type="warning">
  <z-tag>${$t('component.badge.warning')}</z-tag>
</z-badge>

<z-badge :value="42" type="ether">
  <z-tag>${$t('component.badge.ether')}</z-tag>
</z-badge>
<z-badge :value="42" type="fire">
  <z-tag>${$t('component.badge.fire')}</z-tag>
</z-badge>
<z-badge :value="42" type="electric">
  <z-tag>${$t('component.badge.electric')}</z-tag>
</z-badge>
<z-badge :value="42" type="ice">
  <z-tag>${$t('component.badge.ice')}</z-tag>
</z-badge>
<z-badge :value="42" type="physical">
  <z-tag>${$t('component.badge.physical')}</z-tag>
</z-badge>`,
  dot: `<z-badge is-dot>
  <z-tag>${$t('component.badge.default')}</z-tag>
</z-badge>
<z-badge is-dot type="primary">
  <z-tag>${$t('component.badge.primary')}</z-tag>
</z-badge>
<z-badge is-dot type="success">
  <z-tag>${$t('component.badge.success')}</z-tag>
</z-badge>
<z-badge is-dot type="info">
  <z-tag>${$t('component.badge.info')}</z-tag>
</z-badge>
<z-badge is-dot type="warning">
  <z-tag>${$t('component.badge.warning')}</z-tag>
</z-badge>`
}))
const badgeAttributes = computed(() => [{
  prop: 'type',
  desc: $t('attribute.badge.type'),
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'is-dot',
  desc: $t('attribute.badge.is-dot'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'value',
  desc: $t('attribute.badge.value'),
  type: 'string / number'
}])
</script>

<style scoped lang="scss">
.z-badge+.z-badge {
  margin-left: 40px;
}
</style>