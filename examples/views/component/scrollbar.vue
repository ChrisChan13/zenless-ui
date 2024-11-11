<template>
  <div class="component">
    <div class="component-title">{{ $t('component.scrollbar.title') }}</div>
    <div class="component-header">{{ $t('component.scrollbar.usage') }}</div>
    <div class="component-preview">
      <z-scrollbar class="component-scrollbar" :resizable="false">
        <div class="scrollbar-content"></div>
      </z-scrollbar>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">Scrollbar Attributes</div>
    <attribute-table :data="scrollbarAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
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
}))
const scrollbarAttributes = computed(() => [{
  prop: 'fixed',
  desc: $t('attribute.scrollbar.fixed'),
  type: 'boolean / object',
  default: '{ y: true }'
}, {
  prop: 'hide-scroll',
  desc: $t('attribute.scrollbar.hide-scroll'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'resizable',
  desc: $t('attribute.scrollbar.resizable'),
  type: 'boolean',
  default: 'true'
}])
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