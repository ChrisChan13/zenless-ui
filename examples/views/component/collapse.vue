<template>
  <div class="component">
    <div class="component-title">{{ $t('component.collapse.title') }}</div>
    <div class="component-header">{{ $t('component.collapse.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse v-model="value">
          <z-collapse-item v-for="(item, index) in collapseData1" :title="item.title" :name="index">
            <span>{{ item.content }}</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.collapse.plain') }}</div>
    <div class="component-preview is-dark">
      <div class="component-preview-line">
        <z-collapse plain>
          <z-collapse-item v-for="(item, index) in collapseData2" :title="item.title" :name="index">
            <span>{{ item.content }}</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.plain"></source-code>
    </div>
    <div class="component-header">{{ $t('component.collapse.accordion') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item v-for="(item, index) in collapseData1" :title="item.title" :name="index">
            <span>{{ item.content }}</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.accordion"></source-code>
    </div>
    <div class="component-header">{{ $t('component.collapse.custom') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item v-for="(item, index) in collapseData1" :title="item.title" :name="index">
            <template #title>
              <i class="z-icon-info" style="margin-right: 5px;"></i>
              <span>{{ item.title }}</span>
            </template>
            <span>{{ item.content }}</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">{{ $t('component.collapse.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-collapse accordion>
          <z-collapse-item v-for="(item, index) in collapseData1" :title="item.title" :name="index" :disabled="index === 2">
            <span>{{ item.content }}</span>
          </z-collapse-item>
        </z-collapse>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Collapse Attributes</div>
    <attribute-table :data="collapseAttributes"></attribute-table>
    <div class="component-header">Collapse Events</div>
    <event-table :data="collapseEvents"></event-table>
    <div class="component-header">CollapseItem Attributes</div>
    <attribute-table :data="collapseItemAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const collapseData1 = computed(() => $t('component.collapse.data-1', []))
const collapseData2 = computed(() => $t('component.collapse.data-2', []))
const value = ref(0)
const codes = computed(() => ({
  general: `<z-collapse v-model="value">
  <z-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
    <span>{{ item.content }}</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const value = ref('1')
const data = ref(${JSON.stringify($t('component.collapse.data-1'))})
<\/script>\n\n`,
  plain: `<z-collapse plain>
  <z-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
    <span>{{ item.content }}</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const data = ref(${JSON.stringify($t('component.collapse.data-2'))})
<\/script>\n\n`,
  accordion: `<z-collapse accordion>
  <z-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
    <span>{{ item.content }}</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const data = ref(${JSON.stringify($t('component.collapse.data-1'))})
<\/script>\n\n`,
  custom: `<z-collapse accordion>
  <z-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
    <template #title>
      <i class="z-icon-info" style="margin-right: 5px;"></i>
      <span>{{ item.title }}</span>
    </template>
    <span>{{ item.content }}</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const data = ref(${JSON.stringify($t('component.collapse.data-1'))})
<\/script>\n\n`,
  disabled: `<z-collapse accordion>
  <z-collapse-item v-for="(item, index) in data" :title="item.title" :name="index" :disabled="index === 2">
    <span>{{ item.content }}</span>
  </z-collapse-item>
</z-collapse>

<script setup>
import { ref } from 'vue'

const data = ref(${JSON.stringify($t('component.collapse.data-1'))})
<\/script>\n\n`
}))
const collapseAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.collapse.v-model'),
  type: 'string / number / array'
}, {
  prop: 'accordion',
  desc: $t('attribute.collapse.accordion'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'plain',
  desc: $t('attribute.collapse.plain'),
  type: 'boolean',
  default: 'false'
}])
const collapseEvents = computed(() => [{
  name: 'change',
  desc: $t('event.collapse.change'),
  params: $t('event.collapse.change-params'),
}])
const collapseItemAttributes = computed(() => [{
  prop: 'title',
  desc: $t('attribute.collapse-item.title'),
  type: 'string'
}, {
  prop: 'name',
  desc: $t('attribute.collapse-item.name'),
  type: 'string / number'
}, {
  prop: 'disabled',
  desc: $t('attribute.collapse-item.disabled'),
  type: 'boolean',
  default: 'false'
}])
</script>