<template>
  <div class="component">
    <div class="component-title">Icon 图标</div>
    <div class="component-header">使用方法</div>
    <div class="component-content">直接通过设置类名为<code>z-icon-iconName</code>，或使用<code>z-icon</code>组件。例如：</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <i class="z-icon-success"></i>
        <z-icon name="error"></z-icon>
        <i class="z-icon-success" style="font-size: 40px; color: #00cc0d;"></i>
        <z-icon name="error" :size="40" color="#c01c00"></z-icon>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">Tips</div>
    <div class="component-content">你可以引入自己准备的图标字体，将图标字体类名替换<code>z-icon-</code>作为类名的前缀，从而达到拓展图标库图标的效果。</div>
    <div class="component-header">Attributes</div>
    <z-table :data="attributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">图标集合</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <div class="icon-wrap">
          <i class="z-icon-success"></i>
          <span>z-icon-success</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-error"></i>
          <span>z-icon-error</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-caret-left"></i>
          <span>z-icon-caret-left</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-caret-top"></i>
          <span>z-icon-caret-top</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-caret-right"></i>
          <span>z-icon-caret-right</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-caret-bottom"></i>
          <span>z-icon-caret-bottom</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-loading"></i>
          <span>z-icon-loading</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-info"></i>
          <span>z-icon-info</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-arrow-left"></i>
          <span>z-icon-arrow-left</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-arrow-top"></i>
          <span>z-icon-arrow-top</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-arrow-right"></i>
          <span>z-icon-arrow-right</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-arrow-bottom"></i>
          <span>z-icon-arrow-bottom</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-bold"></i>
          <span>z-icon-bold</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-italic"></i>
          <span>z-icon-italic</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-close"></i>
          <span>z-icon-close</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-check"></i>
          <span>z-icon-check</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-plus"></i>
          <span>z-icon-plus</span>
        </div>
        <div class="icon-wrap">
          <i class="z-icon-minus"></i>
          <span>z-icon-minus</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const codes = {
  general: `<i class="z-icon-success"></i>
<z-icon name="error"></z-icon>
<i class="z-icon-success" style="font-size: 40px; color: #00cc0d;"></i>
<z-icon name="error" :size="40" color="#c01c00"></z-icon>`
}
const attributes = [{
  prop: 'name',
  desc: '图标名称，省略“z-icon-”前缀',
  type: 'string'
}, {
  prop: 'size',
  desc: '图标大小，number 类型默认使用 px 单位',
  type: 'number / string'
}, {
  prop: 'color',
  desc: '图标颜色',
  type: 'string'
}]
</script>

<style scoped lang="scss">
.component-preview-line {
  >[class*=z-icon-] {
    font-size: 24px;
    margin: 0 20px;
  }
}
.icon-wrap {
  width: 16.66%;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: center;
  padding: 0 10px;
  &:hover {
    background: #2e2e2e;
  }
  >[class*=z-icon-] {
    font-size: 32px;
    margin: 25px 0 14px;
  }
}
</style>