<template>
  <div class="component">
    <div class="component-title">{{ $t('component.slider.title') }}</div>
    <div class="component-header">{{ $t('component.slider.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value1"></z-slider>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.slider.tooltip') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value2" tooltip></z-slider>
      </div>
      <source-code collapse :code="codes.tooltip"></source-code>
    </div>
    <div class="component-header">{{ $t('component.slider.disabled') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-slider v-model="value3" tooltip disabled></z-slider>
      </div>
      <source-code collapse :code="codes.disabled"></source-code>
    </div>
    <div class="component-header">Slider Attributes</div>
    <attribute-table :data="sliderAttributes"></attribute-table>
    <div class="component-header">Slider Events</div>
    <event-table :data="SliderEvents"></event-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { $t } from '@/locale'

const value1 = ref(42)
const value2 = ref(42)
const value3 = ref(42)
const codes = computed(() => ({
  general: `<z-slider v-model="value"></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`,
  tooltip: `<z-slider v-model="value" tooltip></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`,
  disabled: `<z-slider v-model="value" tooltip disabled></z-slider>

<script setup>
import { ref } from 'vue'

const value = ref(42)
<\/script>`
}))
const sliderAttributes = computed(() => [{
  prop: 'v-model',
  desc: $t('attribute.slider.v-model'),
  type: 'number',
  default: '0'
}, {
  prop: 'min',
  desc: $t('attribute.slider.min'),
  type: 'number',
  default: '0'
}, {
  prop: 'max',
  desc: $t('attribute.slider.max'),
  type: 'number',
  default: '100'
}, {
  prop: 'step',
  desc: $t('attribute.slider.step'),
  type: 'number',
  default: '1'
}, {
  prop: 'disabled',
  desc: $t('attribute.slider.disabled'),
  type: 'boolean',
  default: 'false'
}, {
  prop: 'tooltip',
  desc: $t('attribute.slider.tooltip'),
  type: 'boolean',
  default: 'false'
}])
const SliderEvents = computed(() => [{
  name: 'change',
  desc: $t('event.slider.change'),
  params: $t('event.slider.change-params')
}])
</script>

<style scoped>
.z-slider {
  flex: 1;
}
</style>