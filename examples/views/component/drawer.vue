<template>
  <div class="component">
    <div class="component-title">{{ $t('component.drawer.title') }}</div>
    <div class="component-header">{{ $t('component.drawer.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible = !visible">{{ $t('component.drawer.open') }}</z-button>
        <z-drawer v-model="visible" :title="$t('component.drawer.drawer-title')" @cancel="visible = false" @confirm="visible = false">
          <span>{{ $t('component.drawer.drawer-text') }}</span>
        </z-drawer>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.drawer.fullscreen') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible2 = !visible2">{{ $t('component.drawer.open') }}</z-button>
        <z-drawer v-model="visible2" :title="$t('component.drawer.drawer-title')" fullscreen @cancel="visible2 = false" @confirm="visible2 = false">
          <span>{{ $t('component.drawer.drawer-text') }}</span>
        </z-drawer>
      </div>
      <source-code :code="codes.fullscreen" collapse></source-code>
    </div>
    <div class="component-header">Drawer Attributes</div>
    <attribute-table :data="drawerAttributes"></attribute-table>
    <div class="component-header">Drawer Slots</div>
    <slot-table :data="drawerSlots"></slot-table>
    <div class="component-header">Drawer Events</div>
    <event-table :data="drawerEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const visible = ref(false)
const visible2 = ref(false)
const codes = computed(() => ({
  general: `<z-button @click="visible = !visible">${$t('component.drawer.open')}</z-button>
<z-drawer v-model="visible" title="${$t('component.drawer.drawer-title')}">
  <span>${$t('component.drawer.drawer-text')}</span>
</z-drawer>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`,
  fullscreen: `<z-button @click="visible = !visible">${$t('component.drawer.open')}</z-button>
<z-drawer v-model="visible" title="${$t('component.drawer.drawer-title')}" fullscreen>
  <span>${$t('component.drawer.drawer-text')}</span>
</z-drawer>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}))
const drawerAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.drawer.v-model'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'title',
  desc: $t('attribute.drawer.title'),
  type: 'string'
}, {
  prop: 'mask',
  desc: $t('attribute.drawer.mask'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'mask-closable',
  desc: $t('attribute.drawer.mask-closable'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'closable',
  desc: $t('attribute.drawer.closable'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'fullscreen',
  desc: $t('attribute.drawer.fullscreen'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'show-footer',
  desc: $t('attribute.drawer.show-footer'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'show-cancel',
  desc: $t('attribute.drawer.show-cancel'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'cancel-text',
  desc: $t('attribute.drawer.cancel-text'),
  type: 'string',
  default: '取消'
}, {
  prop: 'confirm-text',
  desc: $t('attribute.drawer.confirm-text'),
  type: 'string',
  default: '确认'
}])
const drawerSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.drawer.default')
}, {
  name: 'title',
  desc: $t('slot.drawer.title')
}, {
  name: 'footer',
  desc: $t('slot.drawer.footer')
}])
const drawerEvents = computed(() => [{
  name: 'open',
  desc: $t('event.drawer.open')
}, {
  name: 'close',
  desc: $t('event.drawer.close')
}, {
  name: 'cancel',
  desc: $t('event.drawer.cancel')
}, {
  name: 'confirm',
  desc: $t('event.drawer.confirm')
}])
</script>