<template>
  <div class="component">
    <div class="component-title">{{ $t('component.pagination.title') }}</div>
    <div class="component-header">{{ $t('component.pagination.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-pagination :total="50"></z-pagination>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">{{ $t('component.pagination.minimal') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-pagination minimal :total="50"></z-pagination>
      </div>
      <source-code :code="codes.minimal" collapse></source-code>
    </div>
    <div class="component-header">Pagination Attributes</div>
    <attribute-table :data="paginationAttributes"></attribute-table>
    <div class="component-header">Pagination Events</div>
    <event-table :data="paginationEvents"></event-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-pagination :total="50"></z-pagination>`,
  minimal: `<z-pagination minimal :total="50"></z-pagination>`
}))
const paginationAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.pagination.v-model'),
  type: 'number',
  default: '1'
}, {
  prop: 'page-size',
  desc: $t('attribute.pagination.page-size'),
  type: 'number',
  default: '10'
}, {
  prop: 'total',
  desc: $t('attribute.pagination.total'),
  type: 'number',
  default: '0'
}, {
  prop: 'prev-text',
  desc: $t('attribute.pagination.prev-text'),
  type: 'string'
}, {
  prop: 'next-text',
  desc: $t('attribute.pagination.next-text'),
  type: 'string'
}, {
  prop: 'minimal',
  desc: $t('attribute.pagination.minimal'),
  type: 'boolean',
  default: 'false'
}])
const paginationEvents = computed(() => [{
  name: 'change',
  desc: $t('event.pagination.change'),
  params: $t('event.pagination.change-params')
}])
</script>