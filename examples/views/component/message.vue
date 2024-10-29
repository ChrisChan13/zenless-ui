<template>
  <div class="component">
    <div class="component-title">Message 消息提示</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="openMessage">打开 Message</z-button>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">不同状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-button @click="successMessage">成功 Message</z-button>
        <z-button @click="warningMessage">警告 Message</z-button>
        <z-button @click="errorMessage">错误 Message</z-button>
      </div>
      <source-code :code="codes.type" collapse></source-code>
    </div>
    <div class="component-header">引用方式</div>
    <source-code class="component-codeblock" :code="codes.usage" lang="js"></source-code>
    <div class="component-content">此时调用方法为<code>message(options)</code>。其中 options 可以为 string，将视为仅传入 options.message。同时也为每个 type 定义了各自的方法，如<code>message.success(options)</code>。</div>
    <div class="component-header">Message Options</div>
    <z-table :data="messageOptions">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Message Methods</div>
    <z-table :data="messageMethods">
      <z-table-column prop="name" label="方法名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { useMessage } from 'zenless-ui'

const message = useMessage()
const openMessage = () => {
  message('这是一条消息提示')
}
const successMessage = () => {
  message.success('恭喜，这是一条成功消息')
}
const warningMessage = () => {
  message.warning('提示，这是一条警告消息')
}
const errorMessage = () => {
  message.error('抱歉，这是一条错误消息')
}

const codes = {
  general: `<z-button @click="openMessage">打开 Message</z-button>

<script>
import { useMessage } from 'zenless-ui'

const message = useMessage()
const openMessage = () => {
  message('这是一条消息提示')
}
<\/script>`,
  type: `<z-button @click="successMessage">成功 Message</z-button>
<z-button @click="warningMessage">警告 Message</z-button>
<z-button @click="errorMessage">错误 Message</z-button>

<script>
import { useMessage } from 'zenless-ui'

const message = useMessage()
const successMessage = () => {
  message.success('恭喜，这是一条成功消息')
}
const warningMessage = () => {
  message.warning('提示，这是一条警告消息')
}
const errorMessage = () => {
  message.error('抱歉，这是一条错误消息')
}
<\/script>`,
  usage: `import { useMessage } from 'zenless-ui'

const message = useMessage()`
}
const messageOptions = [{
  prop: 'message',
  desc: '消息文字',
  type: 'string'
}, {
  prop: 'type',
  desc: '主题',
  type: 'string',
  values: 'success / warning / error'
}, {
  prop: 'duration',
  desc: '显示时间，毫秒',
  type: 'number',
  default: '3000'
}]
const messageMethods = [{
  name: 'success',
  desc: '显示 success 主题的 message，参数与 message options 一致'
}, {
  name: 'warning',
  desc: '显示 warning 主题的 message，参数与 message options 一致'
}, {
  name: 'error',
  desc: '显示 error 主题的 message，参数与 message options 一致'
}]
</script>