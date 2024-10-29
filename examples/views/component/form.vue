<template>
  <div class="component">
    <div class="component-title">Form 表单</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-form label-width="100px" style="width: 500px;">
          <z-form-item label="Input">
            <z-input placeholder="请输入"></z-input>
          </z-form-item>
          <z-form-item label="Select" style="width: 350px;">
            <z-select placeholder="请选择">
              <z-option value="30" label="等级 Lv.30"></z-option>
              <z-option value="40" label="等级 Lv.40"></z-option>
              <z-option value="50" label="等级 Lv.50"></z-option>
              <z-option value="60" label="等级 Lv.60"></z-option>
            </z-select>
          </z-form-item>
          <z-form-item label="Switch">
            <z-switch></z-switch>
          </z-form-item>
          <z-form-item label="Radio">
            <z-radio-group>
              <z-radio value="1">备选项</z-radio>
              <z-radio value="2">备选项</z-radio>
            </z-radio-group>
          </z-form-item>
          <z-form-item label="Checkbox">
            <z-checkbox-group>
              <z-checkbox value="1">备选项</z-checkbox>
              <z-checkbox value="2">备选项</z-checkbox>
              <z-checkbox value="3">备选项</z-checkbox>
            </z-checkbox-group>
          </z-form-item>
          <z-form-item label="Slider">
            <z-slider></z-slider>
          </z-form-item>
          <z-form-item label="Textarea">
            <z-textarea rows="4" placeholder="请输入"></z-textarea>
          </z-form-item>
          <z-form-item>
            <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
            <z-button :icon="{ loading: '#ff5522' }">Reset</z-button>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">行内表单</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-form inline>
          <z-form-item label="Input1">
            <z-input placeholder="请输入" style="width: 200px"></z-input>
          </z-form-item>
          <z-form-item label="Input2">
            <z-input placeholder="请输入" style="width: 200px"></z-input>
          </z-form-item>
          <z-form-item>
            <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.inline"></source-code>
    </div>
    <div class="component-header">对齐方式</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-radio-group v-model="labelPosition">
          <z-radio-button value="left">左对齐</z-radio-button>
          <z-radio-button value="right">右对齐</z-radio-button>
          <z-radio-button value="top">顶部对齐</z-radio-button>
        </z-radio-group>
      </div>
      <div class="component-preview-line">
        <z-form label-width="100px" :label-position="labelPosition" style="width: 400px;">
          <z-form-item label="Input1">
            <z-input placeholder="请输入"></z-input>
          </z-form-item>
          <z-form-item label="Input2">
            <z-input placeholder="请输入"></z-input>
          </z-form-item>
          <z-form-item label="Input3">
            <z-input placeholder="请输入"></z-input>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.align"></source-code>
    </div>
    <div class="component-header">Form Attributes</div>
    <z-table :data="formAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Form-Item Attributes</div>
    <z-table :data="formItemAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Form-Item Slots</div>
    <z-table :data="formItemSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const labelPosition = ref('right')
const codes = {
  general: `<z-form label-width="100px" style="width: 500px;">
  <z-form-item label="Input">
    <z-input placeholder="请输入"></z-input>
  </z-form-item>
  <z-form-item label="Select" style="width: 350px;">
    <z-select placeholder="请选择">
      <z-option value="30" label="等级 Lv.30"></z-option>
      <z-option value="40" label="等级 Lv.40"></z-option>
      <z-option value="50" label="等级 Lv.50"></z-option>
      <z-option value="60" label="等级 Lv.60"></z-option>
    </z-select>
  </z-form-item>
  <z-form-item label="Switch">
    <z-switch></z-switch>
  </z-form-item>
  <z-form-item label="Radio">
    <z-radio-group>
      <z-radio value="1">备选项</z-radio>
      <z-radio value="2">备选项</z-radio>
    </z-radio-group>
  </z-form-item>
  <z-form-item label="Checkbox">
    <z-checkbox-group>
      <z-checkbox value="1">备选项</z-checkbox>
      <z-checkbox value="2">备选项</z-checkbox>
      <z-checkbox value="3">备选项</z-checkbox>
    </z-checkbox-group>
  </z-form-item>
  <z-form-item label="Slider">
    <z-slider></z-slider>
  </z-form-item>
  <z-form-item label="Textarea">
    <z-textarea rows="4" placeholder="请输入"></z-textarea>
  </z-form-item>
  <z-form-item>
    <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
    <z-button :icon="{ loading: '#ff5522' }">Reset</z-button>
  </z-form-item>
</z-form>`,
  inline: `<z-form inline>
  <z-form-item label="Input1">
    <z-input placeholder="请输入" style="width: 200px"></z-input>
  </z-form-item>
  <z-form-item label="Input2">
    <z-input placeholder="请输入" style="width: 200px"></z-input>
  </z-form-item>
  <z-form-item>
    <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
  </z-form-item>
</z-form>`,
  align: `<z-radio-group v-model="labelPosition">
  <z-radio-button value="left">左对齐</z-radio-button>
  <z-radio-button value="right">右对齐</z-radio-button>
  <z-radio-button value="top">顶部对齐</z-radio-button>
</z-radio-group>

<z-form label-width="100px" :label-position="labelPosition" style="width: 400px;">
  <z-form-item label="Input1">
    <z-input placeholder="请输入"></z-input>
  </z-form-item>
  <z-form-item label="Input2">
    <z-input placeholder="请输入"></z-input>
  </z-form-item>
  <z-form-item label="Input3">
    <z-input placeholder="请输入"></z-input>
  </z-form-item>
</z-form>

<script setup>
import { ref } from 'vue'

const labelPosition = ref('right')
<\/script>`
}
const formAttributes = [{
  prop: 'inline',
  desc: '行内表单模式',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'label-width',
  desc: '表单标签的宽度',
  type: 'string / number'
}, {
  prop: 'label-position',
  desc: '表单标签的位置',
  type: 'string',
  values: 'left / right / top',
  default: 'right'
}]
const formItemAttributes = [{
  prop: 'label',
  desc: '表单标签的内容',
  type: 'string'
}, {
  prop: 'label-width',
  desc: '表单标签的宽度',
  type: 'string / number'
}, {
  prop: 'required',
  desc: '是否必填',
  type: 'boolean',
  default: 'false'
}]
const formItemSlots = [{
  name: 'default',
  desc: '表单项内容'
}, {
  name: 'label',
  desc: '表单标签的内容'
}]
</script>