<template>
  <div class="component">
    <div class="component-title">{{ $t('component.tabs.title') }}</div>
    <div class="component-header">{{ $t('component.tabs.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value1">
          <z-tab-panel :label="$t('component.tabs.tab-1')" name="basic">{{ $t('component.tabs.tab-1') }}</z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-2')" name="skills">{{ $t('component.tabs.tab-2') }}</z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-3')" name="gears">{{ $t('component.tabs.tab-3') }}</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.tabs.custom') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value2">
          <z-tab-panel :label="$t('component.tabs.tab-1')" name="basic">
            <template #label>
              <span style="margin-right: 5px">{{ $t('component.tabs.tab-1') }}</span>
              <i class="z-icon-success"></i>
            </template>
            {{ $t('component.tabs.tab-1') }}
          </z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-2')" name="skills">{{ $t('component.tabs.tab-2') }}</z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-3')" name="gears">{{ $t('component.tabs.tab-3') }}</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">{{ $t('component.tabs.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tabs v-model="value3">
          <z-tab-panel :label="$t('component.tabs.tab-1')" name="basic">{{ $t('component.tabs.tab-1') }}</z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-2')" name="skills">{{ $t('component.tabs.tab-2') }}</z-tab-panel>
          <z-tab-panel :label="$t('component.tabs.tab-3')" name="gears" disabled>{{ $t('component.tabs.tab-3') }}</z-tab-panel>
        </z-tabs>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Tabs Attributes</div>
    <attribute-table :data="tabsAttributes"></attribute-table>
    <div class="component-header">Tabs Events</div>
    <event-table :data="tabsEvents"></event-table>
    <div class="component-header">TabPanel Attributes</div>
    <attribute-table :data="tabPanelAttributes"></attribute-table>
    <div class="component-header">TabPanel Slots</div>
    <slot-table :data="tabPanelSlots"></slot-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const value1 = ref('basic')
const value2 = ref('basic')
const value3 = ref('basic')

const codes = computed(() => ({
  general: `<z-tabs v-model="value">
  <z-tab-panel label="${$t('component.tabs.tab-1')}" name="basic">${$t('component.tabs.tab-1')}</z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-2')}" name="skills">${$t('component.tabs.tab-2')}</z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-3')}" name="gears">${$t('component.tabs.tab-3')}</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`,
  custom: `<z-tabs v-model="value">
  <z-tab-panel label="${$t('component.tabs.tab-1')}" name="basic">
    <template #label>
      <span style="margin-right: 5px">${$t('component.tabs.tab-2')}</span>
      <i class="z-icon-success"></i>
    </template>
    ${$t('component.tabs.tab-1')}
  </z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-2')}" name="skills">${$t('component.tabs.tab-2')}</z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-3')}" name="gears">${$t('component.tabs.tab-3')}</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`,
  disabled: `<z-tabs v-model="value">
  <z-tab-panel label="${$t('component.tabs.tab-1')}" name="basic">${$t('component.tabs.tab-1')}</z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-2')}" name="skills">${$t('component.tabs.tab-2')}</z-tab-panel>
  <z-tab-panel label="${$t('component.tabs.tab-3')}" name="gears" disabled>${$t('component.tabs.tab-3')}</z-tab-panel>
</z-tabs>

<script setup>
import { ref } from 'vue'

const value = ref('basic')
<\/script>`
}))
const tabsAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.tabs.v-model'),
  type: 'string / number'
}, {
  prop: 'placement',
  desc: $t('attribute.tabs.placement'),
  type: 'boolean',
  values: 'top / top-left / top-right /\nbottom / bottom-left /\nbottom-right',
  default: 'top-right'
}])
const tabsEvents = [{
  name: 'change',
  desc: $t('event.tabs.change'),
  params: $t('event.tabs.change-params')
}]
const tabPanelAttributes = [{
  prop: 'label',
  desc: $t('attribute.tab-panel.label'),
  type: 'string'
}, {
  prop: 'name',
  desc: $t('attribute.tab-panel.name'),
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: $t('attribute.tab-panel.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'lazy',
  desc: $t('attribute.tab-panel.lazy'),
  type: 'boolean',
  default: 'false'
}]
const tabPanelSlots = [{
  name: 'default',
  desc: $t('slot.tab-panel.default')
}, {
  name: 'label',
  desc: $t('slot.tab-panel.label')
}]
</script>