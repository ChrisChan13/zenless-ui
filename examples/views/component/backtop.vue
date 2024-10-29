<template>
  <div class="component">
    <div class="component-title">Backtop 回到顶部</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <span>查看屏幕最右下角按钮</span>
        <z-backtop :target="scrollTarget" :visible-height="0"></z-backtop>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">Backtop Attributes</div>
    <z-table :data="backtopAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const scrollTarget = ref()
const codes = {
  general: `<z-backtop :target="scrollTarget"></z-backtop>

<script>
import { ref, onMounted } from 'vue'

const scrollTarget = ref()
onMounted(() => {
  scrollTarget.value = document.body
})
<\/script>`
}
const backtopAttributes = [{
  prop: 'target',
  desc: '触发滚动的元素',
  type: 'element'
}, {
  prop: 'visible-height',
  desc: '显示按钮的滚动高度阈值',
  type: 'number',
  default: '200'
}, {
  prop: 'right',
  desc: '按钮的窗口右边距',
  type: 'number',
  default: '60'
}, {
  prop: 'bottom',
  desc: '按钮的窗口底部边距',
  type: 'number',
  default: '60'
}]

onMounted(() => {
  scrollTarget.value = document.querySelector('.container>.container-wrap>.z-scrollbar__wrap')
})
</script>