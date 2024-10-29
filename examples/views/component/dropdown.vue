<template>
  <div class="component">
    <div class="component-title">Dropdown 下拉菜单</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown>
          <z-button hollow icon="arrow-bottom">
            <span>下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">点击触发</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown trigger="click">
          <z-button hollow icon="arrow-bottom">
            <span>下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.click"></source-code>
    </div>
    <div class="component-header">菜单隐藏方式</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown :hide-on-command="false">
          <z-button hollow icon="arrow-bottom">
            <span>下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.hidden"></source-code>
    </div>
    <div class="component-header">不同尺寸</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-dropdown size="extra">
          <z-button size="extra" hollow icon="arrow-bottom">
            <span>超大下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="large">
          <z-button size="large" hollow icon="arrow-bottom">
            <span>大型下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <div class="component-preview-line">
        <z-dropdown>
          <z-button hollow icon="arrow-bottom">
            <span>默认下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="small">
          <z-button size="small" hollow icon="arrow-bottom">
            <span>小型下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
        <z-dropdown size="mini">
          <z-button size="mini" hollow icon="arrow-bottom">
            <span>超小下拉菜单</span>
          </z-button>
          <template #dropdown>
            <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
            <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
            <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
            <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
          </template>
        </z-dropdown>
      </div>
      <source-code collapse :code="codes.size"></source-code>
    </div>
    <div class="component-header">Dropdown Attributes</div>
    <z-table :data="dropdownAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Dropdown Slots</div>
    <z-table :data="dropdownSlots">
      <z-table-column prop="name" label="name"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
    </z-table>
    <div class="component-header">Dropdown Events</div>
    <z-table :data="dropdownEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">DropdownItem Attributes</div>
    <z-table :data="dropdownItemAttributes">
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
  general: `<z-dropdown>
  <z-button hollow icon="arrow-bottom">
    <span>下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>`,
  click: `<z-dropdown trigger="click">
  <z-button hollow icon="arrow-bottom">
    <span>下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>`,
  hidden: `<z-dropdown :hide-on-command="false">
  <z-button hollow icon="arrow-bottom">
    <span>下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>`,
  size: `<z-dropdown size="extra">
  <z-button size="extra" hollow icon="arrow-bottom">
    <span>超大下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="large">
  <z-button size="large" hollow icon="arrow-bottom">
    <span>大型下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown>
  <z-button hollow icon="arrow-bottom">
    <span>默认下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="small">
  <z-button size="small" hollow icon="arrow-bottom">
    <span>小型下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>
<z-dropdown size="mini">
  <z-button size="mini" hollow icon="arrow-bottom">
    <span>超小下拉菜单</span>
  </z-button>
  <template #dropdown>
    <z-dropdown-item command="30">等级 Lv.30</z-dropdown-item>
    <z-dropdown-item command="40">等级 Lv.40</z-dropdown-item>
    <z-dropdown-item command="50">等级 Lv.50</z-dropdown-item>
    <z-dropdown-item command="60" disabled>等级 Lv.60</z-dropdown-item>
  </template>
</z-dropdown>`
}
const dropdownAttributes = [{
  prop: 'trigger',
  desc: '触发下拉的行为',
  type: 'string',
  values: 'hover / click',
  default: 'hover'
}, {
  prop: 'size',
  desc: '菜单尺寸',
  type: 'string',
  values: 'extra / large / small / mini'
}, {
  prop: 'hide-on-command',
  desc: '是否在点击菜单项后隐藏菜单',
  type: 'boolean',
  default: 'true'
}]
const dropdownSlots = [{
  name: 'default',
  desc: '出发下拉的元素'
}, {
  name: 'dropdown',
  desc: '下拉列表，z-dropdown-item 组件'
}]
const dropdownEvents = [{
  name: 'command',
  desc: '点击菜单项触发的事件回调',
  params: 'dropdown-item 的 command'
}, {
  name: 'trigger',
  desc: '下拉列表出现/隐藏时触发',
  params: '出现则为 true，隐藏则为 false'
}]
const dropdownItemAttributes = [{
  prop: 'command',
  desc: '指令',
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: '是否禁用',
  type: 'boolean',
  default: 'false'
}]
</script>