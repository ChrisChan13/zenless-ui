<template>
  <div class="component">
    <div class="component-title">{{ $t('component.checkbox.title') }}</div>
    <div class="component-header">{{ $t('component.checkbox.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked1">{{ $t('component.checkbox.opt-1') }}</z-checkbox>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked2" disabled>{{ $t('component.checkbox.opt-1') }}</z-checkbox>
        <z-checkbox v-model="checked3" disabled>{{ $t('component.checkbox.opt-2') }}</z-checkbox>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.group') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked4">
          <z-checkbox value="1">{{ $t('component.checkbox.opt-1') }}</z-checkbox>
          <z-checkbox value="2">{{ $t('component.checkbox.opt-2') }}</z-checkbox>
          <z-checkbox value="3">{{ $t('component.checkbox.opt-3') }}</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.group"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.limit') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked9" :min="1" :max="2">
          <z-checkbox value="1">{{ $t('component.checkbox.opt-1') }}</z-checkbox>
          <z-checkbox value="2">{{ $t('component.checkbox.opt-2') }}</z-checkbox>
          <z-checkbox value="3">{{ $t('component.checkbox.opt-3') }}</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.limit"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.indeterminate') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox v-model="checked5" :indeterminate="indeterminate" @change="handleCheckAll">{{ $t('component.checkbox.all') }}</z-checkbox>
      </div>
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked6" @change="handleItemCheck">
          <z-checkbox value="1">{{ $t('component.checkbox.opt-1') }}</z-checkbox>
          <z-checkbox value="2">{{ $t('component.checkbox.opt-2') }}</z-checkbox>
          <z-checkbox value="3">{{ $t('component.checkbox.opt-3') }}</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.indeterminate"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked7">
          <z-checkbox value="1" size="extra">{{ $t('component.checkbox.extra') }}</z-checkbox>
          <z-checkbox value="2" size="large">{{ $t('component.checkbox.large') }}</z-checkbox>
          <z-checkbox value="3">{{ $t('component.checkbox.default') }}</z-checkbox>
          <z-checkbox value="4" size="small">{{ $t('component.checkbox.small') }}</z-checkbox>
          <z-checkbox value="5" size="mini">{{ $t('component.checkbox.mini') }}</z-checkbox>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">{{ $t('component.checkbox.button') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-checkbox-group v-model="checked8">
          <z-checkbox-button value="1">{{ $t('component.checkbox.opt-1') }}</z-checkbox-button>
          <z-checkbox-button value="2">{{ $t('component.checkbox.opt-2') }}</z-checkbox-button>
          <z-checkbox-button value="3" disabled>{{ $t('component.checkbox.opt-3') }}</z-checkbox-button>
        </z-checkbox-group>
      </div>
      <source-code collapse :code="codes.button"></source-code>
    </div>
    <div class="component-header">Checkbox / CheckboxButton Attributes</div>
    <attribute-table :data="checkboxAttributes"></attribute-table>
    <div class="component-header">Checkbox / CheckboxButton Events</div>
    <event-table :data="checkboxEvents"></event-table>
    <div class="component-header">CheckboxGroup Attributes</div>
    <attribute-table :data="checkboxGroupAttributes"></attribute-table>
    <div class="component-header">CheckboxGroup Events</div>
    <event-table :data="checkboxGroupEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(['1'])
const checked5 = ref(false)
const indeterminate = ref(true)
const checked6 = ref(['1', '2'])
const checked7 = ref(['3'])
const checked8 = ref(['1'])
const checked9 = ref(['1', '2'])

const codes = computed(() => ({
  general: `<z-checkbox v-model="checked">${$t('component.checkbox.opt-1')}</z-checkbox>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
<\/script>`,
  disabled: `<z-checkbox v-model="checked1" disabled>${$t('component.checkbox.opt-1')}</z-checkbox>
<z-checkbox v-model="checked2" disabled>${$t('component.checkbox.opt-2')}</z-checkbox>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
<\/script>`,
  group: `<z-checkbox-group v-model="checked">
  <z-checkbox value="1">${$t('component.checkbox.opt-1')}</z-checkbox>
  <z-checkbox value="2">${$t('component.checkbox.opt-2')}</z-checkbox>
  <z-checkbox value="3">${$t('component.checkbox.opt-3')}</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1'])
<\/script>`,
  limit: `<z-checkbox-group v-model="checked" :min="1" :max="2">
  <z-checkbox value="1">${$t('component.checkbox.opt-1')}</z-checkbox>
  <z-checkbox value="2">${$t('component.checkbox.opt-2')}</z-checkbox>
  <z-checkbox value="3">${$t('component.checkbox.opt-3')}</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1', '2'])
<\/script>`,
  indeterminate: `<z-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll">全选</z-checkbox>

<z-checkbox-group v-model="checked" @change="handleItemCheck">
  <z-checkbox value="1">${$t('component.checkbox.opt-1')}</z-checkbox>
  <z-checkbox value="2">${$t('component.checkbox.opt-2')}</z-checkbox>
  <z-checkbox value="3">${$t('component.checkbox.opt-3')}</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checked = ref(['1', '2'])

const handleCheckAll = (value) => {
  if (value) {
    checked.value = ['1', '2', '3']
  } else {
    checked.value = []
  }
  isIndeterminate.value = false
}

const handleItemCheck = (value) => {
  checked.value = value
  checkAll.value = value.length === 3
  isIndeterminate.value = value.length > 0 && value.length < 3
}
<\/script>`,
  size: `<z-checkbox-group v-model="checked">
  <z-checkbox value="1" size="extra">${$t('component.checkbox.extra')}</z-checkbox>
  <z-checkbox value="2" size="large">${$t('component.checkbox.large')}</z-checkbox>
  <z-checkbox value="3">${$t('component.checkbox.default')}</z-checkbox>
  <z-checkbox value="4" size="small">${$t('component.checkbox.small')}</z-checkbox>
  <z-checkbox value="5" size="mini">${$t('component.checkbox.mini')}</z-checkbox>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['3'])
<\/script>`,
  button: `<z-checkbox-group v-model="checked">
  <z-checkbox-button value="1">${$t('component.checkbox.opt-1')}</z-checkbox-button>
  <z-checkbox-button value="2">${$t('component.checkbox.opt-2')}</z-checkbox-button>
  <z-checkbox-button value="3" disabled>${$t('component.checkbox.opt-3')}</z-checkbox-button>
</z-checkbox-group>

<script setup>
import { ref } from 'vue'

const checked = ref(['1'])
<\/script>`,
}))
const checkboxAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.checkbox.v-model'),
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: $t('attribute.checkbox.value'),
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: $t('attribute.checkbox.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.checkbox.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'name',
  desc: $t('attribute.checkbox.name'),
  type: 'string'
}, {
  prop: 'indeterminate',
  desc: $t('attribute.checkbox.indeterminate'),
  type: 'boolean',
  default: 'false'
}])
const checkboxEvents = computed(() => [{
  name: 'change',
  desc: $t('event.checkbox.change'),
  params: $t('event.checkbox.change-params')
}])
const checkboxGroupAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.checkbox-group.v-model'),
  type: 'string / number / boolean'
}, {
  prop: 'disabled',
  desc: $t('attribute.checkbox-group.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.checkbox-group.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'min',
  desc: $t('attribute.checkbox-group.min'),
  type: 'number'
}, {
  prop: 'max',
  desc: $t('attribute.checkbox-group.max'),
  type: 'number'
}])
const checkboxGroupEvents = computed(() => [{
  name: 'change',
  desc: $t('event.checkbox-group.change'),
  params: $t('event.checkbox-group.change-params')
}])

const handleCheckAll = (value) => {
  if (value) {
    checked6.value = ['1', '2', '3']
  } else {
    checked6.value = []
  }
  indeterminate.value = false
}
const handleItemCheck = (value) => {
  checked6.value = value
  checked5.value = value.length === 3
  indeterminate.value = value.length > 0 && value.length < 3
}
</script>