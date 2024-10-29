<template>
  <div class="component">
    <div class="component-title">Progress 进度条</div>
    <div class="component-header">基础用法</div>
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
    <div class="component-header">进度圈</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-progress type="circle" :percent="42">42%</z-progress>
        <z-progress type="circle" :percent="42" :size="80" color="greenyellow">42%</z-progress>
        <z-progress type="circle" :percent="42" :size="60" color="#ffc300">42%</z-progress>
      </div>
      <source-code collapse :code="codes.circle"></source-code>
    </div>
    <div class="component-header">Progress Attributes</div>
    <z-table :data="progressAttributes">
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
  general: `<z-progress :percent="42"></z-progress>
<z-progress :percent="42" color="greenyellow"></z-progress>
<z-progress :percent="42" color="#ffc300"></z-progress>`,
  circle: `<z-progress type="circle" :percent="42">42%</z-progress>
<z-progress type="circle" :percent="42" :size="80" color="greenyellow">42%</z-progress>
<z-progress type="circle" :percent="42" :size="60" color="#ffc300">42%</z-progress>`
}
const progressAttributes = [{
  prop: 'type',
  desc: '进度条类型',
  type: 'string',
  values: 'circle'
}, {
  prop: 'size',
  desc: '环形进度圈大小（只在 type 为 circle 时可用）',
  type: 'number / string'
}, {
  prop: 'percent',
  desc: '百分比',
  type: 'number'
}, {
  prop: 'color',
  desc: '进度条颜色',
  type: 'string'
}]
</script>

<style scoped>
.z-progress {
  margin-right: 20px;
}
</style>
