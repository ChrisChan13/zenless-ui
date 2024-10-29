<template>
  <div class="component">
    <div class="component-title">Input 输入框</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="请输入"></z-input>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="请输入" disabled></z-input>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">可清空</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="请输入" clearable></z-input>
      </div>
      <source-code collapse :code="codes.clearable"></source-code>
    </div>
    <div class="component-header">密码框</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="请输入密码" type="password"></z-input>
      </div>
      <source-code collapse :code="codes.password"></source-code>
    </div>
    <div class="component-header">前缀和后缀</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="请输入" suffix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input placeholder="请输入" prefix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input placeholder="请输入">
          <template #prefix>http(s)://</template>
          <template #suffix>.com</template>
        </z-input>
      </div>
      <source-code collapse :code="codes.affix"></source-code>
    </div>
    <div class="component-header">复合输入框</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input placeholder="验证码">
          <template #append>
            <z-button>发送</z-button>
          </template>
        </z-input>
      </div>
      <source-code collapse :code="codes.compact"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-input size="extra" placeholder="请输入" suffix-icon="info"></z-input>
        <z-input size="large" placeholder="请输入" suffix-icon="info"></z-input>
      </div>
      <div class="component-preview-line">
        <z-input placeholder="请输入" suffix-icon="info"></z-input>
        <z-input size="small" placeholder="请输入" suffix-icon="info"></z-input>
        <z-input size="mini" placeholder="请输入" suffix-icon="info"></z-input>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Input Attributes</div>
    <z-table :data="inputAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Input Slots</div>
    <z-table :data="inputSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">Input Events</div>
    <z-table :data="inputEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-input placeholder="请输入"></z-input>`,
  disabled: `<z-input placeholder="请输入" disabled></z-input>`,
  clearable: `<z-input placeholder="请输入" clearable></z-input>`,
  password: `<z-input placeholder="请输入密码" type="password"></z-input>`,
  affix: `<z-input placeholder="请输入" suffix-icon="info"></z-input>
<z-input placeholder="请输入" prefix-icon="info"></z-input>
<z-input placeholder="请输入">
  <template #prefix>http(s)://</template>
  <template #suffix>.com</template>
</z-input>`,
  compact: `<z-input placeholder="验证码">
  <template #append>
    <z-button>发送</z-button>
  </template>
</z-input>`,
  size: `<z-input size="extra" placeholder="请输入" suffix-icon="info"></z-input>
<z-input size="large" placeholder="请输入" suffix-icon="info"></z-input>
<z-input placeholder="请输入" suffix-icon="info"></z-input>
<z-input size="small" placeholder="请输入" suffix-icon="info"></z-input>
<z-input size="mini" placeholder="请输入" suffix-icon="info"></z-input>`,
}
const inputAttributes = [{
  prop: 'v-model',
  desc: '绑定值',
  type: 'string / number'
}, {
  prop: 'type',
  desc: '类型',
  type: 'string',
  values: 'text 和其他原生 input 的 type 值',
  default: 'text'
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
  prop: 'clearable',
  desc: '是否可清空',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: '输入框尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'prefix-icon',
  desc: '输入框头部图标',
  type: 'string'
}, {
  prop: 'suffix-icon',
  desc: '输入框尾部图标',
  type: 'string'
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
}]
const inputEvents = [{
  name: 'blur',
  desc: 'input 失去焦点',
  params: '(e: Event)'
}, {
  name: 'focus',
  desc: 'input 获得焦点',
  params: '(e: Event)'
}, {
  name: 'change',
  desc: 'input 内容改变',
  params: '(value: string | number)'
}, {
  name: 'input',
  desc: 'input 的值改变',
  params: '(value: string | number)'
}, {
  name: 'clear',
  desc: 'input 点击清空'
}]
const inputSlots = [{
  name: 'prefix',
  desc: '输入框头部内容'
}, {
  name: 'suffix',
  desc: '输入框尾部内容'
}, {
  name: 'prepend',
  desc: '输入框前置内容'
}, {
  name: 'append',
  desc: '输入框后置内容'
}]
</script>

<style scoped>
.z-input {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>