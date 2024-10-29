<template>
  <div class="component">
    <div class="component-title">Collapse 折叠面板</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse v-model="value">
          <z-collapse-item title="额外能力：风暴潮" name="1">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅猎群" name="2">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅舞会" name="3">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：武装协同" name="4">
            <span>队伍中存在[支援]角色或与自身阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：阳关三叠" name="5">
            <span>队伍中存在[强攻]角色或与自身阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：狡兔三窟" name="6">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">朴素面板</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-collapse plain>
          <z-collapse-item title="录像店等级 1" name="1">
            <span>经营状况：小众门店 —— 默默无闻的街区录像店，没有多少额外的营业收益。</span>
          </z-collapse-item>
          <z-collapse-item title="录像店等级 2" name="2">
            <span style="color: #94F816;">解锁条件：达到绳网等级 20 级并通关序章剧情和完成对应任务</span><br>
            <span>经营状况：引人瞩目 —— 偶尔有新客人被吸引至此，目常收入能覆盖店铺经营成本。</span>
          </z-collapse-item>
          <z-collapse-item title="录像店等级 3" name="3">
            <span style="color: #94F816;">解锁条件：达到绳网等级 25 级并通关一章剧情和完成对应任务</span><br>
            <span>经营状况：略有名气 -- 有了不少定期前来的熟客，店铺在维持周转之外还有结余。</span>
          </z-collapse-item>
          <z-collapse-item title="录像店等级 4" name="4">
            <span style="color: #94F816;">解锁条件：达到绳网等级 30 级并通关一章剧情和完成对应任务</span><br>
            <span>经营状况：广受追捧 —— 有不少老顾客会将这里推荐给朋友，店铺目常收入稳赚不赔。</span>
          </z-collapse-item>
          <z-collapse-item title="录像店等级 5" name="5">
            <span style="color: #94F816;">解锁条件：达到绳网等级 35 级并通关一章剧情和完成对应任务</span><br>
            <span>经营状况：区域扬名 —— 附近有口皆碑的独特店铺，每日经营收入已经相当可观。</span>
          </z-collapse-item>
          <z-collapse-item title="录像店等级 6" name="6">
            <span style="color: #94F816;">解锁条件：达到绳网等级 40 级并通关一章剧情和完成对应任务</span><br>
            <span>经营状况：当红店铺 —— 店铺的名号在附近街区甚广，每天都有大量资金进账。</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.plain"></source-code>
    </div>
    <div class="component-header">手风琴效果</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item title="额外能力：风暴潮" name="1">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅猎群" name="2">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅舞会" name="3">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.accordion"></source-code>
    </div>
    <div class="component-header">自定义面板标题</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item title="额外能力：风暴潮" name="1">
            <template #title>
              <i class="z-icon-info" style="margin-right: 5px;"></i>
              <span>额外能力：风暴潮</span>
            </template>
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅猎群" name="2">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅舞会" name="3">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">面板禁用效果</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item title="额外能力：风暴潮" name="1">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅猎群" name="2">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item title="额外能力：优雅舞会" name="3">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item disabled title="额外能力：武装协同" name="4">
            <span>队伍中存在[支援]角色或与自身阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item disabled title="额外能力：阳关三叠" name="5">
            <span>队伍中存在[强攻]角色或与自身阵营相同的角色时触发</span>
          </z-collapse-item>
          <z-collapse-item disabled title="额外能力：狡兔三窟" name="6">
            <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Collapse Attributes</div>
    <z-table :data="collapseAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
    <div class="component-header">Collapse Events</div>
    <z-table :data="collapseEvents">
      <z-table-column prop="name" label="事件名"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="params" label="回调参数"></z-table-column>
    </z-table>
    <div class="component-header">CollapseItem Attributes</div>
    <z-table :data="collapseItemAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('1')
const codes = {
  general: `<z-collapse v-model="value">
  <z-collapse-item title="额外能力：风暴潮" name="1">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅猎群" name="2">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅舞会" name="3">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：武装协同" name="4">
    <span>队伍中存在[支援]角色或与自身阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：阳关三叠" name="5">
    <span>队伍中存在[强攻]角色或与自身阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：狡兔三窟" name="6">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const value = ref('1')
<\/script>`,
  plain: `<z-collapse plain>
  <z-collapse-item title="录像店等级 1" name="1">
    <span>经营状况：小众门店 —— 默默无闻的街区录像店，没有多少额外的营业收益。</span>
  </z-collapse-item>
  <z-collapse-item title="录像店等级 2" name="2">
    <span style="color: #94F816;">解锁条件：达到绳网等级 20 级并通关序章剧情和完成对应任务</span><br>
    <span>经营状况：引人瞩目 —— 偶尔有新客人被吸引至此，目常收入能覆盖店铺经营成本。</span>
  </z-collapse-item>
  <z-collapse-item title="录像店等级 3" name="3">
    <span style="color: #94F816;">解锁条件：达到绳网等级 25 级并通关一章剧情和完成对应任务</span><br>
    <span>经营状况：略有名气 -- 有了不少定期前来的熟客，店铺在维持周转之外还有结余。</span>
  </z-collapse-item>
  <z-collapse-item title="录像店等级 4" name="4">
    <span style="color: #94F816;">解锁条件：达到绳网等级 30 级并通关一章剧情和完成对应任务</span><br>
    <span>经营状况：广受追捧 —— 有不少老顾客会将这里推荐给朋友，店铺目常收入稳赚不赔。</span>
  </z-collapse-item>
  <z-collapse-item title="录像店等级 5" name="5">
    <span style="color: #94F816;">解锁条件：达到绳网等级 35 级并通关一章剧情和完成对应任务</span><br>
    <span>经营状况：区域扬名 —— 附近有口皆碑的独特店铺，每日经营收入已经相当可观。</span>
  </z-collapse-item>
  <z-collapse-item title="录像店等级 6" name="6">
    <span style="color: #94F816;">解锁条件：达到绳网等级 40 级并通关一章剧情和完成对应任务</span><br>
    <span>经营状况：当红店铺 —— 店铺的名号在附近街区甚广，每天都有大量资金进账。</span>
  </z-collapse-item>
</z-collapse>`,
  accordion: `<z-collapse accordion>
  <z-collapse-item title="额外能力：风暴潮" name="1">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅猎群" name="2">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅舞会" name="3">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
</z-collapse>`,
  custom: `<z-collapse accordion>
  <z-collapse-item title="额外能力：风暴潮" name="1">
    <template #title>
      <i class="z-icon-info" style="margin-right: 5px;"></i>
      <span>额外能力：风暴潮</span>
    </template>
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅猎群" name="2">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅舞会" name="3">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
</z-collapse>`,
  disabled: `<z-collapse accordion>
  <z-collapse-item title="额外能力：风暴潮" name="1">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅猎群" name="2">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item title="额外能力：优雅舞会" name="3">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item disabled title="额外能力：武装协同" name="4">
    <span>队伍中存在[支援]角色或与自身阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item disabled title="额外能力：阳关三叠" name="5">
    <span>队伍中存在[强攻]角色或与自身阵营相同的角色时触发</span>
  </z-collapse-item>
  <z-collapse-item disabled title="额外能力：狡兔三窟" name="6">
    <span>队伍中存在与自身属性或阵营相同的角色时触发</span>
  </z-collapse-item>
</z-collapse>`
}
const collapseAttributes = [{
  prop: 'v-model',
  desc: '激活的面板',
  type: 'string / number / array'
}, {
  prop: 'accordion',
  desc: '手风琴模式',
  type: 'boolean',
  default: 'false'
}, {
  prop: 'plain',
  desc: '朴素面板',
  type: 'boolean',
  default: 'false'
}]
const collapseEvents = [{
  name: 'change',
  desc: '激活面板改变时触发的回调',
  params: '激活的面板',
}]
const collapseItemAttributes = [{
  prop: 'title',
  desc: '面板的标题',
  type: 'string'
}, {
  prop: 'name',
  desc: '面板的标识',
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: '禁用状态',
  type: 'boolean',
  default: 'false'
}]
</script>