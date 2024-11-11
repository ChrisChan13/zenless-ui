<template>
  <div class="component">
    <div class="component-title">{{ $t('component.modal.title') }}</div>
    <div class="component-header">{{ $t('component.modal.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible = !visible">{{ $t('component.modal.open') }}</z-button>
        <z-modal v-model="visible" :title="$t('component.modal.modal-title')" @cancel="visible = false" @confirm="visible = false">
          <span>{{ $t('component.modal.modal-text') }}</span>
        </z-modal>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.modal.fullscreen') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="visible2 = !visible2">{{ $t('component.modal.open') }}</z-button>
        <z-modal v-model="visible2" :title="$t('component.modal.modal-title')" fullscreen @cancel="visible2 = false" @confirm="visible2 = false">
          <span>{{ $t('component.modal.modal-text') }}</span>
        </z-modal>
      </div>
      <source-code :code="codes.fullscreen" collapse></source-code>
    </div>
    <div class="component-header">Modal Attributes</div>
    <attribute-table :data="modalAttributes"></attribute-table>
    <div class="component-header">Modal Slots</div>
    <slot-table :data="modalSlots"></slot-table>
    <div class="component-header">Modal Events</div>
    <event-table :data="modalEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const visible = ref(false)
const visible2 = ref(false)
const codes = computed(() => ({
  general: `<z-button @click="visible = !visible">${$t('component.modal.open')}</z-button>
<z-modal v-model="visible" title="${$t('component.modal.modal-title')}">
  <span>${$t('component.modal.modal-text')}</span>
</z-modal>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`,
  fullscreen: `<z-button @click="visible = !visible">${$t('component.modal.open')}</z-button>
<z-modal v-model="visible" title="${$t('component.modal.modal-title')}" fullscreen>
  <span>${$t('component.modal.modal-text')}</span>
</z-modal>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
<\/script>`
}))
const modalAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.modal.v-model'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'title',
  desc: $t('attribute.modal.title'),
  type: 'string'
}, {
  prop: 'mask',
  desc: $t('attribute.modal.mask'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'mask-closable',
  desc: $t('attribute.modal.mask-closable'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'closable',
  desc: $t('attribute.modal.closable'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'fullscreen',
  desc: $t('attribute.modal.fullscreen'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'show-footer',
  desc: $t('attribute.modal.show-footer'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'show-cancel',
  desc: $t('attribute.modal.show-cancel'),
  type: 'boolean',
  default: 'true'
}, {
  prop: 'cancel-text',
  desc: $t('attribute.modal.cancel-text'),
  type: 'string',
  default: '取消'
}, {
  prop: 'confirm-text',
  desc: $t('attribute.modal.confirm-text'),
  type: 'string',
  default: '确认'
}])
const modalSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.modal.default')
}, {
  name: 'title',
  desc: $t('slot.modal.title')
}, {
  name: 'footer',
  desc: $t('slot.modal.footer')
}])
const modalEvents = computed(() => [{
  name: 'open',
  desc: $t('event.modal.open')
}, {
  name: 'close',
  desc: $t('event.modal.close')
}, {
  name: 'cancel',
  desc: $t('event.modal.cancel')
}, {
  name: 'confirm',
  desc: $t('event.modal.confirm')
}])
</script>