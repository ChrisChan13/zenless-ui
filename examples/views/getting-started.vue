<template>
  <div class="component">
    <div class="component-title">快速上手</div>
    <div class="component-content">Zenless 是一套基于 Vue 3.0 的仿 <i><b>绝区零</b></i> 桌面端组件库。</div>
    <div class="component-header">安装</div>
    <source-code class="component-codeblock" :code="codes.install"></source-code>
    <div class="component-header">引入 Zenless</div>
    <div class="component-content">在 main.js 中写入以下内容：</div>
    <source-code class="component-codeblock" :code="codes.import" lang="js"></source-code>
    <div class="component-header">全局配置</div>
    <div class="component-content">在引入 Zenless 时，可以传入全局配置对象，目前支持<code>isBold</code>与<code>isItalic</code>字段。<code>isBold</code>用于设置组件是否使用粗体，<code>isItalic</code>设置组件是否使用斜体（仅部分组件适用斜体）。操作如下：</div>
    <source-code class="component-codeblock" :code="codes.globals" lang="js"></source-code>
    <div class="component-content"><code>isBold</code>和<code>isItalic</code>同样支持在流程中修改，具体操作如下：</div>
    <source-code class="component-codeblock" :code="codes.setGlobals" lang="js"></source-code>
    <div class="component-header">开始使用</div>
    <div class="component-content">现在就可以编写代码了，各个组件的使用方法请参阅它们各自的文档。</div>
    <div class="component-header">最后 \[ o_x ]/</div>
    <div class="component-content">
      <ul>
        <li>此项目并未百分百复刻绝区零的各组件表现，包含部分简化以及个人理解，只因个人能力有限</li>
        <li>此项目结合<code>rAF</code>和<code>document.getAnimations</code>来同步各组件之间部分动画的进程，可能造成性能浪费</li>
        <li>此项目组件不丰富、功能凑合用、代码健壮性欠佳，没有针对 ARIA、SEO 等做优化</li>
      </ul>
    </div>
    <div class="component-content">请立即投入业务场景中使用！<br>请立即投入业务场景中使用！<br>请立即投入业务场景中使用（bushi</div>
  </div>
</template>

<script setup>
const codes = {
  install: `pnpm i zenless-ui -S`,
  import: `import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui'
import 'zenless-ui/index.css'
import App from './App.vue'
  
const app = createApp(App)

app.use(ZenlessUI)
app.mount('#app')`,
  globals: `app.use(ZenlessUI, {
  isBold: false,
  isItalic: true
})`,
  setGlobals: `import { useZenless } from 'zenless-ui'

const zenless = useZenless()

zenless.isBold = true
zenless.isItalic = true`
}
</script>