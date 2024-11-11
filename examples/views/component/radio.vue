<template>
  <div class="component">
    <div class="component-title">{{ $t('component.radio.title') }}</div>
    <div class="component-header">{{ $t('component.radio.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value1" value="1">{{ $t('component.radio.opt-1') }}</z-radio>
        <z-radio v-model="value1" value="2">{{ $t('component.radio.opt-2') }}</z-radio>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.radio.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value1" value="1" disabled>{{ $t('component.radio.opt-1') }}</z-radio>
        <z-radio v-model="value1" value="2" disabled>{{ $t('component.radio.opt-2') }}</z-radio>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.radio.group') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio-group v-model="value2">
          <z-radio value="1">{{ $t('component.radio.opt-1') }}</z-radio>
          <z-radio value="2">{{ $t('component.radio.opt-2') }}</z-radio>
          <z-radio value="3">{{ $t('component.radio.opt-3') }}</z-radio>
        </z-radio-group>
      </div>
      <source-code collapse :code="codes.group"></source-code>
    </div>
    <div class="component-header">{{ $t('component.radio.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-radio v-model="value3" value="1" size="extra">{{ $t('component.radio.extra') }}</z-radio>
        <z-radio v-model="value3" value="2" size="large">{{ $t('component.radio.large') }}</z-radio>
        <z-radio v-model="value3" value="3">{{ $t('component.radio.default') }}</z-radio>
        <z-radio v-model="value3" value="4" size="small">{{ $t('component.radio.small') }}</z-radio>
        <z-radio v-model="value3" value="5" size="mini">{{ $t('component.radio.mini') }}</z-radio>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">{{ $t('component.radio.button') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-radio-group v-model="value4">
          <z-radio-button value="1">{{ $t('component.radio.opt-1') }}</z-radio-button>
          <z-radio-button value="2">{{ $t('component.radio.opt-2') }}</z-radio-button>
          <z-radio-button value="3" disabled>{{ $t('component.radio.opt-3') }}</z-radio-button>
        </z-radio-group>
      </div>
      <source-code collapse :code="codes.button"></source-code>
    </div>
    <div class="component-header">Radio / RadioButton Attributes</div>
    <attribute-table :data="radioAttributes"></attribute-table>
    <div class="component-header">Radio / RadioButton Events</div>
    <event-table :data="radioEvents"></event-table>
    <div class="component-header">RadioGroup Attributes</div>
    <attribute-table :data="radioGroupAttributes"></attribute-table>
    <div class="component-header">RadioGroup Events</div>
    <event-table :data="radioGroupEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const value1 = ref('1')
const value2 = ref('1')
const value3 = ref('3')
const value4 = ref('1')

const codes = computed(() => ({
  general: `<z-radio v-model="value" value="1">${$t('component.radio.opt-1')}</z-radio>
<z-radio v-model="value" value="2">${$t('component.radio.opt-2')}</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  disabled: `<z-radio v-model="value" value="1" disabled>${$t('component.radio.opt-1')}</z-radio>
<z-radio v-model="value" value="2" disabled>${$t('component.radio.opt-2')}</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  group: `<z-radio-group v-model="value">
  <z-radio value="1">${$t('component.radio.opt-1')}</z-radio>
  <z-radio value="2">${$t('component.radio.opt-2')}</z-radio>
  <z-radio value="3">${$t('component.radio.opt-3')}</z-radio>
</z-radio-group>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  size: `<z-radio v-model="value" value="1" size="extra">${$t('component.radio.extra')}</z-radio>
<z-radio v-model="value" value="2" size="large">${$t('component.radio.large')}</z-radio>
<z-radio v-model="value" value="3">${$t('component.radio.default')}</z-radio>
<z-radio v-model="value" value="4" size="small">${$t('component.radio.small')}</z-radio>
<z-radio v-model="value" value="5" size="mini">${$t('component.radio.mini')}</z-radio>

<script setup>
import { ref } from 'vue'

const value = ref('3')
<\/script>`,
  button: `<z-radio-group v-model="value">
  <z-radio-button value="1">${$t('component.radio.opt-1')}</z-radio-button>
  <z-radio-button value="2">${$t('component.radio.opt-2')}</z-radio-button>
  <z-radio-button value="3" disabled>${$t('component.radio.opt-3')}</z-radio-button>
</z-radio-group>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`
}))
const radioAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.radio.v-model'),
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: $t('attribute.radio.value'),
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: $t('attribute.radio.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.radio.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'name',
  desc: $t('attribute.radio.name'),
  type: 'string'
}])
const radioEvents = computed(() => [{
  name: 'change',
  desc: $t('event.radio.change'),
  params: $t('event.radio.change-params')
}])
const radioGroupAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.radio-group.v-model'),
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: $t('attribute.radio-group.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.radio-group.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}])
const radioGroupEvents = computed(() => [{
  name: 'change',
  desc: $t('event.radio-group.change'),
  params: $t('event.radio-group.change-params')
}])
</script>