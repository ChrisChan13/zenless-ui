<template>
  <div class="component">
    <div class="component-title">Textarea 输入框</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea placeholder="请输入"></z-textarea>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea placeholder="请输入" disabled></z-textarea>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">设置行数</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea placeholder="请输入" rows="5"></z-textarea>
      </div>
      <source-code collapse :code="codes.rows"></source-code>
    </div>
    <div class="component-header">自适应高度</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-textarea
          placeholder="请输入"
          auto-size
          style="min-height: 100px; max-height: 200px;"
        ></z-textarea>
      </div>
      <source-code collapse :code="codes.autosize"></source-code>
    </div>
    <div class="component-header">Textarea Attributes</div>
    <z-table :data="textareaAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Textarea Events</div>
    <z-table :data="textareaEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-textarea placeholder="请输入"></z-textarea>`,
  disabled: `<z-textarea placeholder="请输入" disabled></z-textarea>`,
  rows: `<z-textarea placeholder="请输入" rows="5"></z-textarea>`,
  autosize: `<z-textarea
  placeholder="请输入"
  auto-size
  style="min-height: 100px; max-height: 200px;"
></z-textarea>`
}
const textareaAttributes = [{
  prop: 'v-model',
  desc: '绑定值',
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: '是否禁用',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'name',
  desc: '原生属性',
  type: 'string'
}, {
  prop: 'rows',
  desc: '原生属性',
  type: 'string / number',
  default: '2'
}, {
  prop: 'tabindex',
  desc: '原生属性',
  type: 'string / number'
}, {
  prop: 'maxlength',
  desc: '原生属性',
  type: 'string / number'
}, {
  prop: 'minlength',
  desc: '原生属性',
  type: 'string / number'
}, {
  prop: 'placeholder',
  desc: '输入框占位文本',
  type: 'string'
}, {
  prop: 'size',
  desc: '输入框尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'autocomplete',
  desc: '原生属性',
  type: 'string',
  values: 'on / off',
  default: 'off'
}, {
  prop: 'autofocus',
  desc: '原生属性',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'readonly',
  desc: '原生属性',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'text-align',
  desc: '输入框文字对齐方式',
  type: 'string',
  values: '同 css 中 text-align 的值'
}, {
  prop: 'auto-size',
  desc: '自适应内容高度',
  type: 'boolean',
  default: 'false'
}]
const textareaEvents = [{
  name: 'blur',
  desc: 'textarea 失去焦点',
  params: '(e: Event)'
}, {
  name: 'focus',
  desc: 'textarea 获得焦点',
  params: '(e: Event)'
}, {
  name: 'change',
  desc: 'textarea 内容改变',
  params: '(value: string | number)'
}, {
  name: 'input',
  desc: 'textarea 的值改变',
  params: '(value: string | number)'
}]
</script>

<style scoped>
.z-textarea {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>