<template>
  <div class="component">
    <div class="component-title">{{ $t('component.tag.title') }}</div>
    <div class="component-header">{{ $t('component.tag.usage') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-tag>{{ $t('component.tag.default') }}</z-tag>
        <z-tag type="primary">{{ $t('component.tag.primary') }}</z-tag>
        <z-tag type="success">{{ $t('component.tag.success') }}</z-tag>
        <z-tag type="info">{{ $t('component.tag.info') }}</z-tag>
        <z-tag type="warning">{{ $t('component.tag.warning') }}</z-tag>
        <z-tag type="danger">{{ $t('component.tag.danger') }}</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag plain>{{ $t('component.tag.plain') }}</z-tag>
        <z-tag plain type="primary">{{ $t('component.tag.primary') }}</z-tag>
        <z-tag plain type="success">{{ $t('component.tag.success') }}</z-tag>
        <z-tag plain type="info">{{ $t('component.tag.info') }}</z-tag>
        <z-tag plain type="warning">{{ $t('component.tag.warning') }}</z-tag>
        <z-tag plain type="danger">{{ $t('component.tag.danger') }}</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag hollow>{{ $t('component.tag.hollow') }}</z-tag>
        <z-tag hollow type="primary">{{ $t('component.tag.primary') }}</z-tag>
        <z-tag hollow type="success">{{ $t('component.tag.success') }}</z-tag>
        <z-tag hollow type="info">{{ $t('component.tag.info') }}</z-tag>
        <z-tag hollow type="warning">{{ $t('component.tag.warning') }}</z-tag>
        <z-tag hollow type="danger">{{ $t('component.tag.danger') }}</z-tag>
      </div>
      <div class="component-preview-line">
        <z-tag type="ether">{{ $t('component.tag.ether') }}</z-tag>
        <z-tag type="fire">{{ $t('component.tag.fire') }}</z-tag>
        <z-tag type="electric">{{ $t('component.tag.electric') }}</z-tag>
        <z-tag type="ice">{{ $t('component.tag.ice') }}</z-tag>
        <z-tag type="physical">{{ $t('component.tag.physical') }}</z-tag>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.tag.closable') }}</div>
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
    <div class="component-header">{{ $t('component.tag.size') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-tag size="extra">{{ $t('component.tag.extra') }}</z-tag>
        <z-tag size="large">{{ $t('component.tag.large') }}</z-tag>
        <z-tag>{{ $t('component.tag.default') }}</z-tag>
        <z-tag size="small">{{ $t('component.tag.small') }}</z-tag>
        <z-tag size="mini">{{ $t('component.tag.mini') }}</z-tag>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Tag Attributes</div>
    <attribute-table :data="tagAttributes"></attribute-table>
    <div class="component-header">Tag Events</div>
    <event-table :data="tagEvents"></event-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-tag>${$t('component.tag.default')}</z-tag>
<z-tag type="primary">${$t('component.tag.primary')}</z-tag>
<z-tag type="success">${$t('component.tag.success')}</z-tag>
<z-tag type="info">${$t('component.tag.info')}</z-tag>
<z-tag type="warning">${$t('component.tag.warning')}</z-tag>
<z-tag type="danger">${$t('component.tag.danger')}</z-tag>

<z-tag plain>${$t('component.tag.plain')}</z-tag>
<z-tag plain type="primary">${$t('component.tag.primary')}</z-tag>
<z-tag plain type="success">${$t('component.tag.success')}</z-tag>
<z-tag plain type="info">${$t('component.tag.info')}</z-tag>
<z-tag plain type="warning">${$t('component.tag.warning')}</z-tag>
<z-tag plain type="danger">${$t('component.tag.danger')}</z-tag>

<z-tag hollow>${$t('component.tag.hollow')}</z-tag>
<z-tag hollow type="primary">${$t('component.tag.primary')}</z-tag>
<z-tag hollow type="success">${$t('component.tag.success')}</z-tag>
<z-tag hollow type="info">${$t('component.tag.info')}</z-tag>
<z-tag hollow type="warning">${$t('component.tag.warning')}</z-tag>
<z-tag hollow type="danger">${$t('component.tag.danger')}</z-tag>

<z-tag type="ether">${$t('component.tag.ether')}</z-tag>
<z-tag type="fire">${$t('component.tag.fire')}</z-tag>
<z-tag type="electric">${$t('component.tag.electric')}</z-tag>
<z-tag type="ice">${$t('component.tag.ice')}</z-tag>
<z-tag type="physical">${$t('component.tag.physical')}</z-tag>`,
  closable: `<z-tag
  v-for="tag in tags"
  :key="tag"
  closable
  @close="handleClose(tag)"
>{{ tag }}</z-tag>

<script setup>
import { ref } from 'vue'

const tags = ref(${JSON.stringify($t('component.tag.list'))})

const handleClose = (tag) => {
  if (tags.value.length === 1) return
  tags.value.splice(tags.value.indexOf(tag), 1)
}
<\/script>`,
  size: `<z-tag size="extra" closable>${$t('component.tag.extra')}</z-tag>
<z-tag size="large" closable>${$t('component.tag.large')}</z-tag>
<z-tag closable>${$t('component.tag.default')}</z-tag>
<z-tag size="small" closable>${$t('component.tag.small')}</z-tag>
<z-tag size="mini" closable>${$t('component.tag.mini')}</z-tag>`
}))
const tags = computed(() => $t('component.tag.list'))
const tagAttributes = computed(() => [{
  prop: 'size',
  desc: $t('attribute.tag.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'type',
  desc: $t('attribute.tag.type'),
  type: 'string',
  values: 'primary / success / danger / warning / info /\nether / fire / electric / ice / physical'
}, {
  prop: 'plain',
  desc: $t('attribute.tag.plain'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'round',
  desc: $t('attribute.tag.round'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'hollow',
  desc: $t('attribute.tag.hollow'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'closable',
  desc: $t('attribute.tag.closable'),
  type: 'boolean',
  default: 'false'
}])
const tagEvents = computed(() => [{
  name: 'close',
  desc: $t('event.tag.close')
}])

const handleClose = (tag) => {
  if (tags.value.length === 1) return
  tags.value.splice(tags.value.indexOf(tag), 1)
}
</script>