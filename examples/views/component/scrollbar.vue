<template>
  <div class="component">
    <div class="component-title">Scrollbar 滚动视图</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <z-scrollbar class="component-scrollbar" :resizable="false">
        <div class="scrollbar-content"></div>
      </z-scrollbar>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">Scrollbar Attributes</div>
    <z-table :data="scrollbarAttributes">
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
  general: `<z-scrollbar class="component-scrollbar">
  <div class="scrollbar-content"></div>
</z-scrollbar>

<style>
.component-scrollbar {
  width: 100%;
  height: 300px;
}
.scrollbar-content {
  width: 100%;
  height: 600px;
  background: linear-gradient(transparent, #000);
}
</style>`
}
const scrollbarAttributes = [{
  prop: 'fixed',
  desc: '设置内容不超过 container 时是否显示滚动条，\n可单独设置 x 轴和 y 轴',
  type: 'boolean / object',
  default: '{ y: true }'
}, {
  prop: 'hide-scroll',
  desc: '隐藏滚动条，优先级高于 fixed',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'resizable',
  desc: '尺寸是否会变化，若 container 尺寸不会发生变化，\n设置为 false 可以优化性能',
  type: 'boolean',
  default: 'true'
}]
</script>

<style scoped lang="scss">
.component-scrollbar {
  width: 100%;
  height: 300px;
}
.scrollbar-content {
  width: 100%;
  height: 600px;
  background: linear-gradient(transparent, #000);
}
</style>