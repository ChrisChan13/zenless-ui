<template>
  <div class="component">
    <div class="component-title">{{ $t('component.backtop.title') }}</div>
    <div class="component-header">{{ $t('component.backtop.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <span>{{ $t('component.backtop.usage-desc') }}</span>
        <z-backtop :target="scrollTarget" :visible-height="0"></z-backtop>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">Backtop Attributes</div>
    <attribute-table :data="backtopAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { $t } from '@/locale'

const scrollTarget = ref()
const codes = computed(() => ({
  general: `<z-backtop :target="scrollTarget"></z-backtop>

<script>
import { ref, onMounted } from 'vue'

const scrollTarget = ref()
onMounted(() => {
  scrollTarget.value = document.body
})
<\/script>`
}))
const backtopAttributes = computed(() => [{
  prop: 'target',
  desc: $t('attribute.backtop.target'),
  type: 'element'
}, {
  prop: 'visible-height',
  desc: $t('attribute.backtop.visible-height'),
  type: 'number',
  default: '200'
}, {
  prop: 'right',
  desc: $t('attribute.backtop.right'),
  type: 'number',
  default: '60'
}, {
  prop: 'bottom',
  desc: $t('attribute.backtop.bottom'),
  type: 'number',
  default: '60'
}])

onMounted(() => {
  scrollTarget.value = document.querySelector('.container>.container-wrap>.z-scrollbar__wrap')
})
</script>