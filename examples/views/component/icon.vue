<template>
  <div class="component">
    <div class="component-title">{{ $t('component.icon.title') }}</div>
    <div class="component-header">{{ $t('component.icon.usage') }}</div>
    <div class="component-content" v-html="$t('component.icon.usage-desc')"></div>
    <div class="component-preview">
      <div class="component-preview-line">
        <i class="z-icon-success"></i>
        <z-icon name="error"></z-icon>
        <i class="z-icon-success" style="font-size: 40px; color: #00cc0d;"></i>
        <z-icon name="error" :size="40" color="#c01c00"></z-icon>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.icon.tips') }}</div>
    <div class="component-content" v-html="$t('component.icon.tips-desc')"></div>
    <div class="component-header">Attributes</div>
    <attribute-table :data="attributes"></attribute-table>
    <div class="component-header">{{ $t('component.icon.icons') }}</div>
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
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = {
  general: `<i class="z-icon-success"></i>
<z-icon name="error"></z-icon>
<i class="z-icon-success" style="font-size: 40px; color: #00cc0d;"></i>
<z-icon name="error" :size="40" color="#c01c00"></z-icon>`
}
const attributes = computed(() => [{
  prop: 'name',
  desc: $t('attribute.icon.name'),
  type: 'string'
}, {
  prop: 'size',
  desc: $t('attribute.icon.size'),
  type: 'number / string'
}, {
  prop: 'color',
  desc: $t('attribute.icon.color'),
  type: 'string'
}])
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