<template>
  <div class="component">
    <div class="component-title">{{ $t('component.menu.title') }}</div>
    <div class="component-header">{{ $t('component.menu.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-menu v-model="value">
          <z-sub-menu name="1-0" icon="info" :title="$t('component.menu.nav-1')">
            <z-menu-item name="1-1" icon="info" :title="$t('component.menu.opt-1')" ></z-menu-item>
            <z-menu-item name="1-2">{{ $t('component.menu.opt-2') }}</z-menu-item>
            <z-menu-item name="1-3" disabled>{{ $t('component.menu.opt-3') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="2-0" icon="info">
            <template #title>
              <span>{{ $t('component.menu.nav-2') }}</span>
            </template>
            <z-menu-item name="2-1" :title="$t('component.menu.opt-4')"></z-menu-item>
          </z-sub-menu>
          <z-menu-item name="3-0">{{ $t('component.menu.nav-3') }}</z-menu-item>
          <z-menu-item name="4-0" disabled>{{ $t('component.menu.nav-4') }}</z-menu-item>
        </z-menu>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.menu.accordion') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-menu accordion>
          <z-sub-menu name="1-0" :title="$t('component.menu.nav-1')">
            <z-menu-item name="1-1" :title="$t('component.menu.opt-1')" ></z-menu-item>
            <z-menu-item name="1-2">{{ $t('component.menu.opt-2') }}</z-menu-item>
            <z-menu-item name="1-3">{{ $t('component.menu.opt-3') }}</z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="2-0" :title="$t('component.menu.nav-2')">
            <z-menu-item name="2-1" :title="$t('component.menu.opt-4')"></z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="3-0" :title="$t('component.menu.nav-3')">
            <z-menu-item name="3-1" :title="$t('component.menu.opt-5')"></z-menu-item>
          </z-sub-menu>
          <z-sub-menu name="4-0" :title="$t('component.menu.nav-4')">
            <z-menu-item name="4-1" :title="$t('component.menu.opt-6')"></z-menu-item>
          </z-sub-menu>
        </z-menu>
      </div>
      <source-code collapse :code="codes.accordion"></source-code>
    </div>
    <div class="component-header">Menu Attributes</div>
    <attribute-table :data="menuAttributes"></attribute-table>
    <div class="component-header">Menu Events</div>
    <event-table :data="menuEvents"></event-table>
    <div class="component-header">SubMenu Attributes</div>
    <attribute-table :data="subMenuAttributes"></attribute-table>
    <div class="component-header">SubMenu Slots</div>
    <slot-table :data="subMenuSlots"></slot-table>
    <div class="component-header">MenuItem Attributes</div>
    <attribute-table :data="menuItemAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const value = ref('1-2')
const codes = computed(() => ({
  general: `<z-menu v-model="value">
  <z-sub-menu name="1-0" icon="info" title="${$t('component.menu.nav-1')}">
    <z-menu-item name="1-1" icon="info" title="${$t('component.menu.opt-1')}" ></z-menu-item>
    <z-menu-item name="1-2">${$t('component.menu.opt-1')}</z-menu-item>
    <z-menu-item name="1-3" disabled>${$t('component.menu.opt-3')}</z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="2-0" icon="info">
    <template #title>
      <span>${$t('component.menu.nav-2')}</span>
    </template>
    <z-menu-item name="2-1" title="${$t('component.menu.opt-4')}"></z-menu-item>
  </z-sub-menu>
  <z-menu-item name="3-0">${$t('component.menu.nav-3')}</z-menu-item>
  <z-menu-item name="4-0" disabled>${$t('component.menu.nav-4')}</z-menu-item>
</z-menu>

<script setup>
import { ref } from 'vue'

const value = ref('1-2')
<\/script>`,
  accordion: `<z-menu accordion>
  <z-sub-menu name="1-0" title="${$t('component.menu.nav-1')}">
    <z-menu-item name="1-1" title="${$t('component.menu.opt-1')}" ></z-menu-item>
    <z-menu-item name="1-2">${$t('component.menu.opt-1')}</z-menu-item>
    <z-menu-item name="1-3">${$t('component.menu.opt-3')}</z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="2-0" title="${$t('component.menu.nav-2')}">
    <z-menu-item name="2-1" title="${$t('component.menu.opt-4')}"></z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="3-0" title="${$t('component.menu.nav-3')}">
    <z-menu-item name="3-1" title="${$t('component.menu.opt-5')}"></z-menu-item>
  </z-sub-menu>
  <z-sub-menu name="4-0" title="${$t('component.menu.nav-4')}">
    <z-menu-item name="4-1" title="${$t('component.menu.opt-6')}"></z-menu-item>
  </z-sub-menu>
</z-menu>`
}))
const menuAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.menu.v-model'),
  type: 'string / number'
}, {
  prop: 'accordion',
  desc: $t('attribute.menu.accordion'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'default-open',
  desc: $t('attribute.menu.default-open'),
  type: 'string / number / array'
}])
const menuEvents = computed(() => [{
  name: 'change',
  desc: $t('event.menu.change'),
  params: $t('event.menu.change-params')
}])
const subMenuAttributes = computed(() => [{
  prop: 'name',
  desc: $t('attribute.sub-menu.name'),
  type: 'string / number'
}, {
  prop: 'title',
  desc: $t('attribute.sub-menu.title'),
  type: 'string'
}, {
  prop: 'disabled',
  desc: $t('attribute.sub-menu.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'icon',
  desc: $t('attribute.sub-menu.icon'),
  type: 'string'
}])
const subMenuSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.sub-menu.default')
}, {
  name: 'title',
  desc: $t('slot.sub-menu.title')
}])
const menuItemAttributes = computed(() => [{
  prop: 'name',
  desc: $t('attribute.menu-item.name'),
  type: 'string / number'
}, {
  prop: 'title',
  desc: $t('attribute.menu-item.title'),
  type: 'string'
}, {
  prop: 'disabled',
  desc: $t('attribute.menu-item.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'icon',
  desc: $t('attribute.menu-item.icon'),
  type: 'string'
}])
</script>
