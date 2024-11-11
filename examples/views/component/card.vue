<template>
  <div class="component">
    <div class="component-title">{{ $t('component.card.title') }}</div>
    <div class="component-header">{{ $t('component.card.usage') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-card
          image="./zenless.png"
          avatar="./zenless.png"
          nickname="ZenlessUI"
          :title="$t('component.card.demo-title')"
          :content="$t('component.card.demo-content')"
        ></z-card>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">{{ $t('component.card.custom') }}</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-card class="card">
          <div v-for="i in 4" :key="i" class="card-item">
            {{ `${$t('component.card.custom-item')} ${i}` }}
          </div>
        </z-card>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">Card Attributes</div>
    <attribute-table :data="cardAttributes"></attribute-table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { $t } from '@/locale'

const codes = computed(() => ({
  general: `<z-card
  image="/zenless.png"
  avatar="/zenless.png"
  nickname="ZenlessUI"
  title="${$t('component.card.demo-title')}"
  content="${$t('component.card.demo-content')}"
></z-card>`,
  custom: `<z-card class="card">
  <div v-for="i in 4" :key="i" class="card-item">
    {{'${$t('component.card.custom-item')} ' + i }}
  </div>
</z-card>

<style>
.card {
  padding: 18px;
}
.card-item:not(:last-of-type) {
  margin-bottom: 16px;
}
</style>`
}))
const cardAttributes = computed(() => [{
  prop: 'image',
  desc: $t('attribute.card.image'),
  type: 'string'
}, {
  prop: 'avatar',
  desc: $t('attribute.card.avatar'),
  type: 'string'
}, {
  prop: 'nickname',
  desc: $t('attribute.card.nickname'),
  type: 'string'
}, {
  prop: 'title',
  desc: $t('attribute.card.title'),
  type: 'string'
}, {
  prop: 'content',
  desc: $t('attribute.card.content'),
  type: 'string'
}])
</script>

<style scoped lang="scss">
.z-card {
  width: 250px;
}
.card {
  padding: 18px;
  &-item:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
</style>