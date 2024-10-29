<template>
  <div class="component">
    <div class="component-title">Select 选择器</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select placeholder="请选择">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select placeholder="请选择" disabled>
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">可清空</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select placeholder="请选择" clearable>
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.clearable"></source-code>
    </div>
    <div class="component-header">自定义模板</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select placeholder="请选择">
          <z-option value="30" label="等级 Lv.30">
            <i class="z-icon-info"></i>
            <span style="margin-left: 5px;">等级 Lv.30</span>
          </z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-select placeholder="请选择" size="extra">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
        <z-select placeholder="请选择" size="large">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <div class="component-preview-line">
        <z-select placeholder="请选择">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
        <z-select placeholder="请选择" size="small">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
        <z-select placeholder="请选择" size="mini">
          <z-option value="30" label="等级 Lv.30"></z-option>
          <z-option value="40" label="等级 Lv.40"></z-option>
          <z-option value="50" label="等级 Lv.50"></z-option>
          <z-option value="60" label="等级 Lv.60" disabled></z-option>
        </z-select>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Select Attributes</div>
    <z-table :data="selectAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Select Slots</div>
    <z-table :data="selectSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">Select Events</div>
    <z-table :data="selectEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">Option Attributes</div>
    <z-table :data="optionAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-select placeholder="请选择">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>`,
  disabled: `<z-select placeholder="请选择" disabled>
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>`,
  clearable: `<z-select placeholder="请选择" clearable>
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>`,
  custom: `<z-select placeholder="请选择">
  <z-option value="30" label="等级 Lv.30">
    <i class="z-icon-info"></i>
    <span style="margin-left: 5px;">等级 Lv.30</span>
  </z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>`,
  size: `<z-select placeholder="请选择" size="extra">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>
<z-select placeholder="请选择" size="large">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>
<z-select placeholder="请选择">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>
<z-select placeholder="请选择" size="small">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>
<z-select placeholder="请选择" size="mini">
  <z-option value="30" label="等级 Lv.30"></z-option>
  <z-option value="40" label="等级 Lv.40"></z-option>
  <z-option value="50" label="等级 Lv.50"></z-option>
  <z-option value="60" label="等级 Lv.60" disabled></z-option>
</z-select>`
}
const selectAttributes = [{
  prop: 'name',
  desc: '选择器的 name 属性',
  type: 'string'
}, {
  prop: 'disabled',
  desc: '是否禁用',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'placeholder',
  desc: '占位符',
  type: 'string'
}, {
  prop: 'clearable',
  desc: '是否可清空',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'size',
  desc: '选择器的尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'empty-text',
  desc: '选项为空时显示的文字',
  type: 'string',
  default: '暂无数据... \\[ o_x ]/'
}]
const selectSlots = [{
  name: 'default',
  desc: 'option 列表'
}, {
  name: 'empty',
  desc: '选项为空时显示的内容'
}]
const selectEvents = [{
  name: 'change',
  desc: '选中值发生变化时触发',
  params: '当前选中的值'
}, {
  name: 'clear',
  desc: '点击清空时触发'
}]
const optionAttributes = [{
  prop: 'value',
  desc: '选项的值',
  type: 'string / number'
}, {
  prop: 'label',
  desc: '选项的标签',
  type: 'string',
  default: '与 value 相同'
}, {
  prop: 'disabled',
  desc: '是否禁用',
  type: 'boolean',
  default: 'false'
}]
</script>

<style scoped>
.z-select {
  flex: 1;
  max-width: 300px;
  margin-right: 10px;
}
</style>