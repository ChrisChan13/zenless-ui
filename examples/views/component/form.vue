<template>
  <div class="component">
    <div class="component-title">{{ $t('component.form.title') }}</div>
    <div class="component-header">{{ $t('component.form.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-form label-width="100px" style="width: 500px;">
          <z-form-item label="Input">
            <z-input :placeholder="$t('component.input.placeholder')"></z-input>
          </z-form-item>
          <z-form-item label="Select" style="width: 350px;">
            <z-select :placeholder="$t('component.select.placeholder')">
              <z-option value="30" :label="$t('component.select.opt-1')"></z-option>
              <z-option value="40" :label="$t('component.select.opt-2')"></z-option>
              <z-option value="50" :label="$t('component.select.opt-3')"></z-option>
              <z-option value="60" :label="$t('component.select.opt-4')"></z-option>
            </z-select>
          </z-form-item>
          <z-form-item label="Switch">
            <z-switch></z-switch>
          </z-form-item>
          <z-form-item label="Radio">
            <z-radio-group>
              <z-radio value="1">{{ $t('component.radio.opt-1') }}</z-radio>
              <z-radio value="2">{{ $t('component.radio.opt-2') }}</z-radio>
            </z-radio-group>
          </z-form-item>
          <z-form-item label="Checkbox">
            <z-checkbox-group>
              <z-checkbox value="1">{{ $t('component.checkbox.opt-1') }}</z-checkbox>
              <z-checkbox value="2">{{ $t('component.checkbox.opt-2') }}</z-checkbox>
              <z-checkbox value="3">{{ $t('component.checkbox.opt-3') }}</z-checkbox>
            </z-checkbox-group>
          </z-form-item>
          <z-form-item label="Slider">
            <z-slider></z-slider>
          </z-form-item>
          <z-form-item label="Textarea">
            <z-textarea rows="4" :placeholder="$t('component.textarea.placeholder')"></z-textarea>
          </z-form-item>
          <z-form-item>
            <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
            <z-button :icon="{ loading: '#ff5522' }">Reset</z-button>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.form.inline') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-form inline>
          <z-form-item label="Input1">
            <z-input :placeholder="$t('component.input.placeholder')" style="width: 200px"></z-input>
          </z-form-item>
          <z-form-item label="Input2">
            <z-input :placeholder="$t('component.input.placeholder')" style="width: 200px"></z-input>
          </z-form-item>
          <z-form-item>
            <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.inline"></source-code>
    </div>
    <div class="component-header">{{ $t('component.form.align') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-radio-group v-model="labelPosition">
          <z-radio-button value="left">{{ $t('component.form.left') }}</z-radio-button>
          <z-radio-button value="right">{{ $t('component.form.right') }}</z-radio-button>
          <z-radio-button value="top">{{ $t('component.form.top') }}</z-radio-button>
        </z-radio-group>
      </div>
      <div class="component-preview-line">
        <z-form label-width="100px" :label-position="labelPosition" style="width: 400px;">
          <z-form-item label="Input1">
            <z-input :placeholder="$t('component.input.placeholder')"></z-input>
          </z-form-item>
          <z-form-item label="Input2">
            <z-input :placeholder="$t('component.input.placeholder')"></z-input>
          </z-form-item>
          <z-form-item label="Input3">
            <z-input :placeholder="$t('component.input.placeholder')"></z-input>
          </z-form-item>
        </z-form>
      </div>
      <source-code collapse :code="codes.align"></source-code>
    </div>
    <div class="component-header">Form Attributes</div>
    <attribute-table :data="formAttributes"></attribute-table>
    <div class="component-header">Form-Item Attributes</div>
    <attribute-table :data="formItemAttributes"></attribute-table>
    <div class="component-header">Form-Item Slots</div>
    <slot-table :data="formItemSlots"></slot-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const labelPosition = ref('right')
const codes = computed(() => ({
  general: `<z-form label-width="100px" style="width: 500px;">
  <z-form-item label="Input">
    <z-input placeholder="${$t('component.input.placeholder')}"></z-input>
  </z-form-item>
  <z-form-item label="Select" style="width: 350px;">
    <z-select placeholder="${$t('component.select.placeholder')}">
      <z-option value="30" label="${$t('component.select.opt-1')}"></z-option>
      <z-option value="40" label="${$t('component.select.opt-2')}"></z-option>
      <z-option value="50" label="${$t('component.select.opt-3')}"></z-option>
      <z-option value="60" label="${$t('component.select.opt-4')}"></z-option>
    </z-select>
  </z-form-item>
  <z-form-item label="Switch">
    <z-switch></z-switch>
  </z-form-item>
  <z-form-item label="Radio">
    <z-radio-group>
      <z-radio value="1">${$t('component.radio.opt-1')}</z-radio>
      <z-radio value="2">${$t('component.radio.opt-2')}</z-radio>
    </z-radio-group>
  </z-form-item>
  <z-form-item label="Checkbox">
    <z-checkbox-group>
      <z-checkbox value="1">${$t('component.checkbox.opt-1')}</z-checkbox>
      <z-checkbox value="2">${$t('component.checkbox.opt-2')}</z-checkbox>
      <z-checkbox value="3">${$t('component.checkbox.opt-3')}</z-checkbox>
    </z-checkbox-group>
  </z-form-item>
  <z-form-item label="Slider">
    <z-slider></z-slider>
  </z-form-item>
  <z-form-item label="Textarea">
    <z-textarea rows="4" placeholder="${$t('component.textarea.placeholder')}"></z-textarea>
  </z-form-item>
  <z-form-item>
    <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
    <z-button :icon="{ loading: '#ff5522' }">Reset</z-button>
  </z-form-item>
</z-form>`,
  inline: `<z-form inline>
  <z-form-item label="Input1">
    <z-input placeholder="${$t('component.input.placeholder')}" style="width: 200px"></z-input>
  </z-form-item>
  <z-form-item label="Input2">
    <z-input placeholder="${$t('component.input.placeholder')}" style="width: 200px"></z-input>
  </z-form-item>
  <z-form-item>
    <z-button :icon="{ success: '#00cc0d' }">Submit</z-button>
  </z-form-item>
</z-form>`,
  align: `<z-radio-group v-model="labelPosition">
  <z-radio-button value="left">${$t('component.form.left')}</z-radio-button>
  <z-radio-button value="right">${$t('component.form.right')}</z-radio-button>
  <z-radio-button value="top">${$t('component.form.top')}</z-radio-button>
</z-radio-group>

<z-form label-width="100px" :label-position="labelPosition" style="width: 400px;">
  <z-form-item label="Input1">
    <z-input placeholder="${$t('component.input.placeholder')}"></z-input>
  </z-form-item>
  <z-form-item label="Input2">
    <z-input placeholder="${$t('component.input.placeholder')}"></z-input>
  </z-form-item>
  <z-form-item label="Input3">
    <z-input placeholder="${$t('component.input.placeholder')}"></z-input>
  </z-form-item>
</z-form>

<script setup>
import { ref } from 'vue'

const labelPosition = ref('right')
<\/script>`
}))
const formAttributes = computed(() => [{
  prop: 'inline',
  desc: $t('attribute.form.inline'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'label-width',
  desc: $t('attribute.form.label-width'),
  type: 'string / number'
}, {
  prop: 'label-position',
  desc: $t('attribute.form.label-position'),
  type: 'string',
  values: 'left / right / top',
  default: 'right'
}])
const formItemAttributes = computed(() => [{
  prop: 'label',
  desc: $t('attribute.form-item.label'),
  type: 'string'
}, {
  prop: 'label-width',
  desc: $t('attribute.form-item.label-width'),
  type: 'string / number'
}, {
  prop: 'required',
  desc: $t('attribute.form-item.required'),
  type: 'boolean',
  default: 'false'
}])
const formItemSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.form-item.default')
}, {
  name: 'label',
  desc: $t('slot.form-item.label')
}])
</script>