<template>
  <div class="component">
    <div class="component-title">{{ $t('component.pattern.title') }}</div>
    <div class="component-header">{{ $t('component.pattern.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-pattern type="rhombus">rhombus</z-pattern>
        <z-pattern type="squares">squares</z-pattern>
        <z-pattern type="stripes">stripes</z-pattern>
      </div>
      <source-code :code="codes.general" collapse></source-code>
    </div>
    <div class="component-header">Pattern Attributes</div>
    <attribute-table :data="patternAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-pattern type="rhombus">rhombus</z-pattern>
<z-pattern type="squares">squares</z-pattern>
<z-pattern type="stripes">stripes</z-pattern>`
}))
const patternAttributes = computed(() => [{
  prop: 'type',
  desc: $t('attribute.pattern.type'),
  type: 'string',
  values: 'rhombus / squares / stripes'
}])
</script>

<style scoped>
.z-pattern {
  flex: 1;
  min-width: 40%;
  height: 200px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>