<template>
  <div class="component">
    <div class="component-title">{{ $t('component.switch.title') }}</div>
    <div class="component-header">{{ $t('component.switch.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-switch v-model="value1"></z-switch>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.switch.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-switch v-model="value2" disabled></z-switch>
        <z-switch v-model="value3" disabled></z-switch>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Switch Attributes</div>
    <attribute-table :data="switchAttributes"></attribute-table>
    <div class="component-header">Switch Events</div>
    <event-table :data="switchEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(false)

const codes = computed(() => ({
  general: `<z-switch v-model="value"></z-switch>

<script setup>
import { ref } from 'vue'

const value = ref(true)
<\/script>`,
  disabled: `<z-switch v-model="value1" disabled></z-switch>
<z-switch v-model="value2" disabled></z-switch>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
<\/script>`
}))
const switchAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.switch.v-model'),
  type: 'string / number / boolean'
}, {
  prop: 'value',
  desc: $t('attribute.switch.value'),
  type: 'string / number / boolean'
}, {
  prop: 'name',
  desc: $t('attribute.switch.name'),
  type: 'string'
}, {
  prop: 'disabled',
  desc: $t('attribute.switch.disabled'),
  type: 'boolean',
  default: 'false'
}])
const switchEvents = computed(() => [{
  name: 'change',
  desc: $t('event.switch.change'),
  params: $t('event.switch.change-params')
}])
</script>

<style scoped>
.z-switch {
  margin-right: 20px;
}
</style>