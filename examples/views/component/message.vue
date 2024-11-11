<template>
  <div class="component">
    <div class="component-title">{{ $t('component.message.title') }}</div>
    <div class="component-header">{{ $t('component.message.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="openMessage">{{ $t('component.message.show') }}</z-button>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.message.type') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="successMessage">{{ $t('component.message.success') }}</z-button>
        <z-button @click="warningMessage">{{ $t('component.message.warning') }}</z-button>
        <z-button @click="errorMessage">{{ $t('component.message.error') }}</z-button>
      </div>
      <source-code :code="codes.type" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.message.import') }}</div>
    <source-code class="component-codeblock" :code="codes.usage" lang="js"></source-code>
    <div class="component-content" v-html="$t('component.message.import-desc')"></div>
    <div class="component-header">Message Options</div>
    <attribute-table :data="messageOptions"></attribute-table>
    <div class="component-header">Message Methods</div>
    <method-table :data="messageMethods"></method-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMessage } from 'zenless-ui'
import { $t } from '@/locale'

const message = useMessage()
const openMessage = () => {
  message($t('component.message.text'))
}
const successMessage = () => {
  message.success($t('component.message.success-text'))
}
const warningMessage = () => {
  message.warning($t('component.message.warning-text'))
}
const errorMessage = () => {
  message.error($t('component.message.error-text'))
}

const codes = computed(() => ({
  general: `<z-button @click="openMessage">${$t('component.message.show')}</z-button>

<script>
import { useMessage } from 'zenless-ui'

const message = useMessage()
const openMessage = () => {
  message('${$t('component.message.text')}')
}
<\/script>`,
  type: `<z-button @click="successMessage">${$t('component.message.success')}</z-button>
<z-button @click="warningMessage">${$t('component.message.warning')}</z-button>
<z-button @click="errorMessage">${$t('component.message.error')}</z-button>

<script>
import { useMessage } from 'zenless-ui'

const message = useMessage()
const successMessage = () => {
  message.success('${$t('component.message.success-text')}')
}
const warningMessage = () => {
  message.warning('${$t('component.message.warning-text')}')
}
const errorMessage = () => {
  message.error('${$t('component.message.error-text')}')
}
<\/script>`,
  usage: `import { useMessage } from 'zenless-ui'

const message = useMessage()`
}))
const messageOptions = computed(() => [{
  prop: 'message',
  desc: $t('option.message.message'),
  type: 'string'
}, {
  prop: 'type',
  desc: $t('option.message.type'),
  type: 'string',
  values: 'success / warning / error'
}, {
  prop: 'duration',
  desc: $t('option.message.duration'),
  type: 'number',
  default: '3000'
}])
const messageMethods = computed(() => [{
  name: 'success',
  desc: $t('method.message.success')
}, {
  name: 'warning',
  desc: $t('method.message.warning')
}, {
  name: 'error',
  desc: $t('method.message.error')
}])
</script>