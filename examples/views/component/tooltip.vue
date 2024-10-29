<template>
  <div class="component">
    <div class="component-title">Tooltip 文字提示</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <div class="box">
          <div class="top">
            <z-tooltip content="bottom-left 文字提示内容" placement="bottom-left">
              <z-button>下左</z-button>
            </z-tooltip>
            <z-tooltip content="bottom 文字提示内容" placement="bottom">
              <z-button>下方</z-button>
            </z-tooltip>
            <z-tooltip content="bottom-right 文字提示内容" placement="bottom-right">
              <z-button>下右</z-button>
            </z-tooltip>
          </div>
          <div class="left">
            <z-tooltip content="right-top 文字提示内容" placement="right-top">
              <z-button>右上</z-button>
            </z-tooltip>
            <z-tooltip content="right 文字提示内容" placement="right">
              <z-button>右方</z-button>
            </z-tooltip>
            <z-tooltip content="right-bottom 文字提示内容" placement="right-bottom">
              <z-button>右下</z-button>
            </z-tooltip>
          </div>
          <div class="right">
            <z-tooltip content="left-top 文字提示内容" placement="left-top">
              <z-button>左上</z-button>
            </z-tooltip>
            <z-tooltip content="left 文字提示内容" placement="left">
              <z-button>左方</z-button>
            </z-tooltip>
            <z-tooltip content="left-bottom 文字提示内容" placement="left-bottom">
              <z-button>左下</z-button>
            </z-tooltip>
          </div>
          <div class="bottom">
            <z-tooltip content="top-left 文字提示内容" placement="top-left">
              <z-button>上左</z-button>
            </z-tooltip>
            <z-tooltip content="top 文字提示内容" placement="top">
              <z-button>上方</z-button>
            </z-tooltip>
            <z-tooltip content="top-right 文字提示内容" placement="top-right">
              <z-button>上右</z-button>
            </z-tooltip>
          </div>
        </div>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">禁用状态</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tooltip content="文字提示内容" disabled>
          <z-button>禁用 Tooltip</z-button>
        </z-tooltip>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">自定义内容</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tooltip>
          <template #content>
            <i class="z-icon-info"></i>
            <span style="margin-left: 5px;">文字提示内容</span>
          </template>
          <z-button>自定义 Tooltip</z-button>
        </z-tooltip>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">Tooltip Attributes</div>
    <z-table :data="tooltipAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Tooltip Slots</div>
    <z-table :data="tooltipSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<div class="box">
  <div class="top">
    <z-tooltip content="bottom-left 文字提示内容" placement="bottom-left">
      <z-button>下左</z-button>
    </z-tooltip>
    <z-tooltip content="bottom 文字提示内容" placement="bottom">
      <z-button>下方</z-button>
    </z-tooltip>
    <z-tooltip content="bottom-right 文字提示内容" placement="bottom-right">
      <z-button>下右</z-button>
    </z-tooltip>
  </div>
  <div class="left">
    <z-tooltip content="right-top 文字提示内容" placement="right-top">
      <z-button>右上</z-button>
    </z-tooltip>
    <z-tooltip content="right 文字提示内容" placement="right">
      <z-button>右方</z-button>
    </z-tooltip>
    <z-tooltip content="right-bottom 文字提示内容" placement="right-bottom">
      <z-button>右下</z-button>
    </z-tooltip>
  </div>
  <div class="right">
    <z-tooltip content="left-top 文字提示内容" placement="left-top">
      <z-button>左上</z-button>
    </z-tooltip>
    <z-tooltip content="left 文字提示内容" placement="left">
      <z-button>左方</z-button>
    </z-tooltip>
    <z-tooltip content="left-bottom 文字提示内容" placement="left-bottom">
      <z-button>左下</z-button>
    </z-tooltip>
  </div>
  <div class="bottom">
    <z-tooltip content="top-left 文字提示内容" placement="top-left">
      <z-button>上左</z-button>
    </z-tooltip>
    <z-tooltip content="top 文字提示内容" placement="top">
      <z-button>上方</z-button>
    </z-tooltip>
    <z-tooltip content="top-right 文字提示内容" placement="top-right">
      <z-button>上右</z-button>
    </z-tooltip>
  </div>
</div>`,
  disabled: `<z-tooltip content="文字提示内容" disabled>
  <z-button>禁用 Tooltip</z-button>
</z-tooltip>`,
  custom: `<z-tooltip>
  <template #content>
    <i class="z-icon-info"></i>
    <span style="margin-left: 5px;">文字提示内容</span>
  </template>
  <z-button>自定义 Tooltip</z-button>
</z-tooltip>`
}
const tooltipAttributes = [{
  prop: 'content',
  desc: '显示的内容',
  type: 'string',
}, {
  prop: 'placement',
  desc: 'tooltip 出现的位置',
  type: 'string',
  values: 'top / left / right / bottom / top-left / top-right /\nbottom-left / bottom-right / left-top / left-bottom /\nright-top / right-bottom',
  default: 'top'
}, {
  prop: 'visible',
  desc: '是否显示',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}]
const tooltipSlots = [{
  name: 'default',
  desc: '触发 tooltip 的内容'
}, {
  name: 'content',
  desc: 'tooltip 显示的内容'
}]
</script>

<style scoped lang="scss">
.box {
  width: fit-content;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .left,
  .right {
    width: 90px;
    .z-tooltip {
      margin: 5px 0;
    }
  }
  .top,
  .bottom {
    padding: 0 100px;
    clear: both;
  }
}
</style>