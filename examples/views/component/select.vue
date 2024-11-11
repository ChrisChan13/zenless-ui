<template>
  <div class="component">
    <div class="component-title">{{ $t('component.select.title') }}</div>
    <div class="component-header">{{ $t('component.select.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.select.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')" disabled>
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.select.clearable') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')" clearable>
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.clearable"></source-code>
    </div>
    <div class="component-header">{{ $t('component.select.custom') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')">
          <z-option value="30" :label="$t('component.select.opt-1')">
            <i class="z-icon-info"></i>
            <span style="margin-left: 5px;">{{ $t('component.select.opt-1') }}</span>
          </z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">{{ $t('component.select.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')" size="extra">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
        <z-select :placeholder="$t('component.select.placeholder')" size="large">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <div class="component-preview-line">
        <z-select :placeholder="$t('component.select.placeholder')">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
        <z-select :placeholder="$t('component.select.placeholder')" size="small">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
        <z-select :placeholder="$t('component.select.placeholder')" size="mini">
          <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
          <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
          <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
          <z-option value="60" :label="$t('component.select.opt-4')" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Select Attributes</div>
    <attribute-table :data="selectAttributes"></attribute-table>
    <div class="component-header">Select Slots</div>
    <slot-table :data="selectSlots"></slot-table>
    <div class="component-header">Select Events</div>
    <event-table :data="selectEvents"></event-table>
    <div class="component-header">Option Attributes</div>
    <attribute-table :data="optionAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-select placeholder="${$t('component.select.placeholder')}">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>`,
  disabled: `<z-select placeholder="${$t('component.select.placeholder')}" disabled>
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>`,
  clearable: `<z-select placeholder="${$t('component.select.placeholder')}" clearable>
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>`,
  custom: `<z-select placeholder="${$t('component.select.placeholder')}">
  <z-option value="30" label="${$t('component.select.opt-1')}">
    <i class="z-icon-info"></i>
    <span style="margin-left: 5px;">${$t('component.select.opt-1')}</span>
  </z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>`,
  size: `<z-select placeholder="${$t('component.select.placeholder')}" size="extra">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>
<z-select placeholder="${$t('component.select.placeholder')}" size="large">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>
<z-select placeholder="${$t('component.select.placeholder')}">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>
<z-select placeholder="${$t('component.select.placeholder')}" size="small">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>
<z-select placeholder="${$t('component.select.placeholder')}" size="mini">
  <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
  <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
  <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
  <z-option value="60" label="${$t('component.select.opt-4')}" disabled></z-option>
</z-select>`
}))
const selectAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.select.v-model'),
  type: 'string / number'
}, {
  prop: 'name',
  desc: $t('attribute.select.name'),
  type: 'string'
}, {
  prop: 'disabled',
  desc: $t('attribute.select.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'placeholder',
  desc: $t('attribute.select.placeholder'),
  type: 'string'
}, {
  prop: 'clearable',
  desc: $t('attribute.select.clearable'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.select.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'empty-text',
  desc: $t('attribute.select.empty-text'),
  type: 'string',
  default: $t('attribute.select.empty-text-default')
}])
const selectSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.select.default')
}, {
  name: 'empty',
  desc: $t('slot.select.empty')
}])
const selectEvents = computed(() => [{
  name: 'change',
  desc: $t('event.select.change'),
  params: $t('event.select.change-params')
}, {
  name: 'clear',
  desc: $t('event.select.clear')
}])
const optionAttributes = computed(() => [{
  prop: 'value',
  desc: $t('attribute.option.value'),
  type: 'string / number'
}, {
  prop: 'label',
  desc: $t('attribute.option.label'),
  type: 'string',
  default: $t('attribute.option.label-default')
}, {
  prop: 'disabled',
  desc: $t('attribute.option.disabled'),
  type: 'boolean',
  default: 'false'
}])
</script>

<style scoped>
.z-select {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>