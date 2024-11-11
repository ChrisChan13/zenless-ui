<template>
  <div class="component">
    <div class="component-title">{{ $t('component.tooltip.title') }}</div>
    <div class="component-header">{{ $t('component.tooltip.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <div class="box">
          <div class="top">
            <z-tooltip :content="$t('component.tooltip.bl-text')" placement="bottom-left">
              <z-button>{{ $t('component.tooltip.bl') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.bottom-text')" placement="bottom">
              <z-button>{{ $t('component.tooltip.bottom') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.br-text')" placement="bottom-right">
              <z-button>{{ $t('component.tooltip.br') }}</z-button>
            </z-tooltip>
          </div>
          <div class="left">
            <z-tooltip :content="$t('component.tooltip.rt-text')" placement="right-top">
              <z-button>{{ $t('component.tooltip.rt') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.right-text')" placement="right">
              <z-button>{{ $t('component.tooltip.right') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.rb-text')" placement="right-bottom">
              <z-button>{{ $t('component.tooltip.rb') }}</z-button>
            </z-tooltip>
          </div>
          <div class="right">
            <z-tooltip :content="$t('component.tooltip.lt-text')" placement="left-top">
              <z-button>{{ $t('component.tooltip.lt') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.left-text')" placement="left">
              <z-button>{{ $t('component.tooltip.left') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.lb-text')" placement="left-bottom">
              <z-button>{{ $t('component.tooltip.lb') }}</z-button>
            </z-tooltip>
          </div>
          <div class="bottom">
            <z-tooltip :content="$t('component.tooltip.tl-text')" placement="top-left">
              <z-button>{{ $t('component.tooltip.tl') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.top-text')" placement="top">
              <z-button>{{ $t('component.tooltip.top') }}</z-button>
            </z-tooltip>
            <z-tooltip :content="$t('component.tooltip.tr-text')" placement="top-right">
              <z-button>{{ $t('component.tooltip.tr') }}</z-button>
            </z-tooltip>
          </div>
        </div>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.tooltip.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tooltip :content="$t('component.tooltip.prompt')" disabled>
          <z-button>{{ $t('component.tooltip.disabled-button') }}</z-button>
        </z-tooltip>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">{{ $t('component.tooltip.custom') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-tooltip>
          <template #content>
            <i class="z-icon-info"></i>
            <span style="margin-left: 5px;">{{ $t('component.tooltip.prompt') }}</span>
          </template>
          <z-button>{{ $t('component.tooltip.custom-button') }}</z-button>
        </z-tooltip>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">Tooltip Attributes</div>
    <attribute-table :data="tooltipAttributes"></attribute-table>
    <div class="component-header">Tooltip Slots</div>
    <slot-table :data="tooltipSlots"></slot-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<div class="box">
  <div class="top">
    <z-tooltip content="${$t('component.tooltip.bl-text')}" placement="bottom-left">
      <z-button>${$t('component.tooltip.bl')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.bottom-text')}" placement="bottom">
      <z-button>${$t('component.tooltip.bottom')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.br-text')}" placement="bottom-right">
      <z-button>${$t('component.tooltip.br')}</z-button>
    </z-tooltip>
  </div>
  <div class="left">
    <z-tooltip content="${$t('component.tooltip.rt-text')}" placement="right-top">
      <z-button>${$t('component.tooltip.rt')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.right-text')}" placement="right">
      <z-button>${$t('component.tooltip.right')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.rb-text')}" placement="right-bottom">
      <z-button>${$t('component.tooltip.rb')}</z-button>
    </z-tooltip>
  </div>
  <div class="right">
    <z-tooltip content="${$t('component.tooltip.lt-text')}" placement="left-top">
      <z-button>${$t('component.tooltip.lt')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.left-text')}" placement="left">
      <z-button>${$t('component.tooltip.left')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.lb-text')}" placement="left-bottom">
      <z-button>${$t('component.tooltip.lb')}</z-button>
    </z-tooltip>
  </div>
  <div class="bottom">
    <z-tooltip content="${$t('component.tooltip.tl-text')}" placement="top-left">
      <z-button>${$t('component.tooltip.tl')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.top-text')}" placement="top">
      <z-button>${$t('component.tooltip.top')}</z-button>
    </z-tooltip>
    <z-tooltip content="${$t('component.tooltip.tr-text')}" placement="top-right">
      <z-button>${$t('component.tooltip.tr')}</z-button>
    </z-tooltip>
  </div>
</div>`,
  disabled: `<z-tooltip content="${$t('component.tooltip.prompt')}" disabled>
  <z-button>${$t('component.tooltip.disabled-button')}</z-button>
</z-tooltip>`,
  custom: `<z-tooltip>
  <template #content>
    <i class="z-icon-info"></i>
    <span style="margin-left: 5px;">${$t('component.tooltip.prompt')}</span>
  </template>
  <z-button>${$t('component.tooltip.custom-button')}</z-button>
</z-tooltip>`
}))
const tooltipAttributes = computed(() => [{
  prop: 'content',
  desc: $t('attribute.tooltip.content'),
  type: 'string',
}, {
  prop: 'placement',
  desc: $t('attribute.tooltip.placement'),
  type: 'string',
  values: 'top / left / right / bottom / top-left / top-right /\nbottom-left / bottom-right / left-top / left-bottom /\nright-top / right-bottom',
  default: 'top'
}, {
  prop: 'visible',
  desc: $t('attribute.tooltip.visible'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'disabled',
  desc: $t('attribute.tooltip.disabled'),
  type: 'boolean',
  default: 'false'
}])
const tooltipSlots = computed(() => [{
  name: 'default',
  desc: $t('slot.tooltip.default')
}, {
  name: 'content',
  desc: $t('slot.tooltip.content')
}])
</script>

<style scoped lang="scss">
.box {
  width: fit-content;
  .left {
    float: left;
    align-items: flex-end;
  }
  .right {
    float: right;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    width: 90px;
    .z-tooltip {
      margin: 5px 0;
    }
  }
  .top,
  .bottom {
    display: flex;
    justify-content: center;
    padding: 0 100px;
    clear: both;
  }
}
</style>