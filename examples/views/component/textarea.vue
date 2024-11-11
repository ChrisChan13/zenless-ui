<template>
  <div class="component">
    <div class="component-title">{{ $t('component.textarea.title') }}</div>
    <div class="component-header">{{ $t('component.textarea.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea :placeholder="$t('component.textarea.placeholder')"></z-textarea>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.textarea.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea :placeholder="$t('component.textarea.placeholder')" disabled></z-textarea>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.textarea.rows') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea :placeholder="$t('component.textarea.placeholder')" rows="5"></z-textarea>
      </div>
      <source-code collapse :code="codes.rows"></source-code>
    </div>
    <div class="component-header">{{ $t('component.textarea.auto-size') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea
          :placeholder="$t('component.textarea.placeholder')"
          auto-size
          style="min-height: 100px; max-height: 200px;"
        ></z-textarea>
      </div>
      <source-code collapse :code="codes.autosize"></source-code>
    </div>
    <div class="component-header">Textarea Attributes</div>
    <attribute-table :data="textareaAttributes"></attribute-table>
    <div class="component-header">Textarea Events</div>
    <event-table :data="textareaEvents"></event-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-textarea placeholder="${$t('component.textarea.placeholder')}"></z-textarea>`,
  disabled: `<z-textarea placeholder="${$t('component.textarea.placeholder')}" disabled></z-textarea>`,
  rows: `<z-textarea placeholder="${$t('component.textarea.placeholder')}" rows="5"></z-textarea>`,
  autosize: `<z-textarea
  placeholder="${$t('component.textarea.placeholder')}"
  auto-size
  style="min-height: 100px; max-height: 200px;"
></z-textarea>`
}))
const textareaAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.textarea.v-model'),
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: $t('attribute.textarea.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'name',
  desc: $t('attribute.textarea.name'),
  type: 'string'
}, {
  prop: 'rows',
  desc: $t('attribute.textarea.rows'),
  type: 'string / number',
  default: '2'
}, {
  prop: 'tabindex',
  desc: $t('attribute.textarea.tabindex'),
  type: 'string / number'
}, {
  prop: 'maxlength',
  desc: $t('attribute.textarea.maxlength'),
  type: 'string / number'
}, {
  prop: 'minlength',
  desc: $t('attribute.textarea.minlength'),
  type: 'string / number'
}, {
  prop: 'placeholder',
  desc: $t('attribute.textarea.placeholder'),
  type: 'string'
}, {
  prop: 'size',
  desc: $t('attribute.textarea.size'),
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'autocomplete',
  desc: $t('attribute.textarea.autocomplete'),
  type: 'string',
  values: 'on / off',
  default: 'off'
}, {
  prop: 'autofocus',
  desc: $t('attribute.textarea.autofocus'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'readonly',
  desc: $t('attribute.textarea.readonly'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'text-align',
  desc: $t('attribute.textarea.text-align'),
  type: 'string',
  values: $t('attribute.textarea.text-align-values')
}, {
  prop: 'auto-size',
  desc: $t('attribute.textarea.auto-size'),
  type: 'boolean',
  default: 'false'
}])
const textareaEvents = computed(() => [{
  name: 'blur',
  desc: $t('event.textarea.blur'),
  params: '(e: Event)'
}, {
  name: 'focus',
  desc: $t('event.textarea.focus'),
  params: '(e: Event)'
}, {
  name: 'change',
  desc: $t('event.textarea.change'),
  params: '(value: string | number)'
}, {
  name: 'input',
  desc: $t('event.textarea.input'),
  params: '(value: string | number)'
}])
</script>

<style scoped>
.z-textarea {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>