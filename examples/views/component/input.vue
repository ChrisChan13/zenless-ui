<template>
  <div class="component">
    <div class="component-title">{{ $t('component.input.title') }}</div>
    <div class="component-header">{{ $t('component.input.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')"></z-input>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')" disabled></z-input>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.clearable') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')" clearable></z-input>
      </div>
      <source-code collapse :code="codes.clearable"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.password') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.pwd-placeholder')" type="password"></z-input>
      </div>
      <source-code collapse :code="codes.password"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.mixed') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')" prefix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')">
          <template #prefix>http(s)://</template>
          <template #suffix>.com</template>
        </z-input>
      </div>
      <source-code collapse :code="codes.affix"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.combined') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.combined-code')">
          <template #append>
            <z-button>{{ $t('component.input.combined-send') }}</z-button>
          </template>
        </z-input>
      </div>
      <source-code collapse :code="codes.compact"></source-code>
    </div>
    <div class="component-header">{{ $t('component.input.size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input size="extra" :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
        <z-input size="large" :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
        <z-input size="small" :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
        <z-input size="mini" :placeholder="$t('component.input.placeholder')" suffix-icon="info"></z-input>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Input Attributes</div>
    <attribute-table :data="inputAttributes"></attribute-table>
    <div class="component-header">Input Slots</div>
    <slot-table :data="inputSlots"></slot-table>
    <div class="component-header">Input Events</div>
    <event-table :data="inputEvents"></event-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-input placeholder="${$t('component.input.placeholder')}"></z-input>`,
  disabled: `<z-input placeholder="${$t('component.input.placeholder')}" disabled></z-input>`,
  clearable: `<z-input placeholder="${$t('component.input.placeholder')}" clearable></z-input>`,
  password: `<z-input placeholder="${$t('component.input.pwd-placeholder')}" type="password"></z-input>`,
  affix: `<z-input placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>
<z-input placeholder="${$t('component.input.placeholder')}" prefix-icon="info"></z-input>
<z-input placeholder="${$t('component.input.placeholder')}">
  <template #prefix>http(s)://</template>
  <template #suffix>.com</template>
</z-input>`,
  compact: `<z-input placeholder="${$t('component.input.combined-code')}">
  <template #append>
    <z-button>${$t('component.input.combined-send')}</z-button>
  </template>
</z-input>`,
  size: `<z-input size="extra" placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>
<z-input size="large" placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>
<z-input placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>
<z-input size="small" placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>
<z-input size="mini" placeholder="${$t('component.input.placeholder')}" suffix-icon="info"></z-input>`,
}))
const inputAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.input.v-model'),
  type: 'string / number'
}, {
  prop: 'type',
  desc: $t('attribute.input.type'),
  type: 'string',
  values: $t('attribute.input.type-values'),
  default: 'text'
}, {
  prop: 'disabled',
  desc: $t('attribute.input.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'name',
  desc: $t('attribute.input.name'),
  type: 'string'
}, {
  prop: 'tabindex',
  desc: $t('attribute.input.tabindex'),
  type: 'string / number'
}, {
  prop: 'maxlength',
  desc: $t('attribute.input.maxlength'),
  type: 'string / number'
}, {
  prop: 'minlength',
  desc: $t('attribute.input.minlength'),
  type: 'string / number'
}, {
  prop: 'placeholder',
  desc: $t('attribute.input.placeholder'),
  type: 'string'
}, {
  prop: 'clearable',
  desc: $t('attribute.input.clearable'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: $t('attribute.input.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'prefix-icon',
  desc: $t('attribute.input.prefix-icon'),
  type: 'string'
}, {
  prop: 'suffix-icon',
  desc: $t('attribute.input.suffix-icon'),
  type: 'string'
}, {
  prop: 'autocomplete',
  desc: $t('attribute.input.autocomplete'),
  type: 'string',
  values: 'on / off',
  default: 'off'
}, {
  prop: 'autofocus',
  desc: $t('attribute.input.autofocus'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'readonly',
  desc: $t('attribute.input.readonly'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'text-align',
  desc: $t('attribute.input.text-align'),
  type: 'string',
  values: $t('attribute.input.text-align-values')
}])
const inputEvents = computed(() => [{
  name: 'blur',
  desc: $t('event.input.blur'),
  params: '(e: Event)'
}, {
  name: 'focus',
  desc: $t('event.input.focus'),
  params: '(e: Event)'
}, {
  name: 'change',
  desc: $t('event.input.change'),
  params: '(value: string | number)'
}, {
  name: 'input',
  desc: $t('event.input.input'),
  params: '(value: string | number)'
}, {
  name: 'clear',
  desc: $t('event.input.clear')
}])
const inputSlots = computed(() => [{
  name: 'prefix',
  desc: $t('slot.input.prefix')
}, {
  name: 'suffix',
  desc: $t('slot.input.suffix')
}, {
  name: 'prepend',
  desc: $t('slot.input.prepend')
}, {
  name: 'append',
  desc: $t('slot.input.append')
}])
</script>

<style scoped>
.z-input {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>