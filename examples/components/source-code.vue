<template>
  <div class="source-code">
    <div ref="codeRef" :class="['source-code-content', { 'is-visible': !collapse || isOpen }]"></div>
    <div v-if="collapse" :class="['source-code-expand', { 'is-sticky': isOpen }]" @click="isOpen = !isOpen">
      <i :class="[{
        'z-icon-caret-bottom': !isOpen,
        'z-icon-caret-top': isOpen
      }]"></i>
      <span>{{ isOpen ? '隐藏' : '显示' }}代码</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  code: String,
  lang: {
    type: String,
    default: 'html'
  },
  collapse: Boolean
})

const codeRef = ref(null)
const isOpen = ref(false)

watchEffect(() => {
  if (codeRef.value && props.code) {
    codeRef.value.innerHTML = `<pre class="language-html"><code class="language-html">${
      Prism.highlight(props.code, Prism.languages[props.lang || 'html'], 'vue')
    }</code></pre>`
  }
})
</script>

<style>
code[class*=language-],
pre[class*=language-] {
  color: #ccc;
  /* background: rgb(40, 44, 52); */
  background: transparent;
  margin: 0;
  font-size: 14px;
}
.token.tag {
  color: #e06c75;
}
.token.attr-name {
  color: #d19a66;
}
.token.attr-value {
  color: #98c379;
}
.token.function {
  color: #61afef;
}
.token.keyword {
  color: #c678dd;
}
.token.property {
  color: #ccc;
}
</style>
<style scoped lang="scss">
.source-code {
  width: 100%;
  &-content {
    width: 100%;
    height: 0;
    overflow: hidden;
    &.is-visible {
      border-top: 1px solid #323232;
      border-bottom: 1px solid #323232;
      height: auto;
    }
    >.code {
      display: block;
      width: 100%;
      color: #ccc;
      font-size: 13px;
      line-height: 1.6em;
      padding: 14px 20px;
      white-space: pre;
      font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    }
  }
  &-expand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    color: #808080;
    border-top: 1px solid #323232;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &.is-sticky {
      position: sticky;
      bottom: 0;
      z-index: 1;
      background: #222;
    }
    >[class*=z-icon-] {
      font-size: 24px;
      margin-right: 5px;
    }
  }
}
</style>