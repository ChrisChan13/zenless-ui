<template>
  <div class="component">
    <div class="component-title">Card 卡片</div>
    <div class="component-header">基础用法</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-card
          image="/zenless.png"
          avatar="/zenless.png"
          nickname="ZenlessUI"
          title="[ 情报 ] Zenless UI 发布"
          content="今天是 2024 年 10 月 30 日，Zenless UI v1.0 正式发布！"
        ></z-card>
      </div>
      <source-code collapse :code="codes.general"></source-code>
    </div>
    <div class="component-header">自定义内容</div>
    <div class="component-preview">
      <div class="component-preview-line">
        <z-card class="card">
          <div v-for="i in 4" :key="i" class="card-item">
            {{'列表内容 ' + i }}
          </div>
        </z-card>
      </div>
      <source-code collapse :code="codes.custom"></source-code>
    </div>
    <div class="component-header">Card Attributes</div>
    <z-table :data="cardAttributes">
      <z-table-column prop="prop" label="参数"></z-table-column>
      <z-table-column prop="desc" label="说明"></z-table-column>
      <z-table-column prop="type" label="类型"></z-table-column>
      <z-table-column prop="values" label="可选值"></z-table-column>
      <z-table-column prop="default" label="默认值"></z-table-column>
    </z-table>
  </div>
</template>

<script setup>
const codes = {
  general: `<z-card
  image="/zenless.png"
  avatar="/zenless.png"
  nickname="ZenlessUI"
  title="[ 情报 ] Zenless UI 发布"
  content="今天是 2024 年 10 月 30 日，Zenless UI v1.0 正式发布！"
></z-card>`,
  custom: `<z-card class="card">
  <div v-for="i in 4" :key="i" class="card-item">
    {{'列表内容 ' + i }}
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
}
const cardAttributes = [{
  prop: 'image',
  desc: '卡片图片',
  type: 'string'
}, {
  prop: 'avatar',
  desc: '卡片头像',
  type: 'string'
}, {
  prop: 'nickname',
  desc: '卡片昵称',
  type: 'string'
}, {
  prop: 'title',
  desc: '卡片标题',
  type: 'string'
}, {
  prop: 'content',
  desc: '卡片描述',
  type: 'string'
}]
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