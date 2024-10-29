<template>
  <div :class="['z-card', {
    'is-bold': zenless.isBold
  }]">
    <img v-if="image" :src="image" class="z-card__image">
    <div v-if="avatar || nickname" class="z-card__user">
      <div v-if="avatar" class="z-card__avatar">
        <img :src="avatar">
      </div>
      <div v-if="nickname" class="z-card__nickname">{{ nickname }}</div>
    </div>
    <div v-if="title" class="z-card__title">{{ title }}</div>
    <div v-if="content" class="z-card__content">{{ content }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useZenless } from 'zenless-ui/index'

defineOptions({
  name: 'ZCard'
})

const zenless = useZenless()
defineProps({
  image: String,
  avatar: String,
  nickname: String,
  title: String,
  content: String
})
</script>

<style scoped>
@import './card.scss';
</style>