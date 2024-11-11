<template>
  <div class="component">
    <div class="component-title">{{ $t('component.progress.title') }}</div>
    <div class="component-header">{{ $t('component.progress.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-progress :percent="42"></z-progress>
      </div>
      <div class="component-preview-line">
        <z-progress :percent="42" color="greenyellow"></z-progress>
      </div>
      <div class="component-preview-line">
        <z-progress :percent="42" color="#ffc300"></z-progress>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.progress.circle') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-progress type="circle" :percent="42">42%</z-progress>
        <z-progress type="circle" :percent="42" :size="80" color="greenyellow">42%</z-progress>
        <z-progress type="circle" :percent="42" :size="60" color="#ffc300">42%</z-progress>
      </div>
      <source-code collapse :code="codes.circle"></source-code>
    </div>
    <div class="component-header">Progress Attributes</div>
    <attribute-table :data="progressAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-progress :percent="42"></z-progress>
<z-progress :percent="42" color="greenyellow"></z-progress>
<z-progress :percent="42" color="#ffc300"></z-progress>`,
  circle: `<z-progress type="circle" :percent="42">42%</z-progress>
<z-progress type="circle" :percent="42" :size="80" color="greenyellow">42%</z-progress>
<z-progress type="circle" :percent="42" :size="60" color="#ffc300">42%</z-progress>`
}))
const progressAttributes = computed(() => [{
  prop: 'type',
  desc: $t('attribute.progress.type'),
  type: 'string',
  values: 'circle'
}, {
  prop: 'size',
  desc: $t('attribute.progress.size'),
  type: 'number / string'
}, {
  prop: 'percent',
  desc: $t('attribute.progress.percent'),
  type: 'number'
}, {
  prop: 'color',
  desc: $t('attribute.progress.color'),
  type: 'string'
}])
</script>

<style scoped>
.z-progress {
  margin-right: 20px;
}
</style>
