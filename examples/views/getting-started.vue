<template>
  <div class="component">
    <div class="component-title">{{ $t('getting-started.title') }}</div>
    <div class="component-content" v-html="$t('getting-started.brief')"></div>
    <div class="component-header">{{ $t('getting-started.install') }}</div>
    <source-code class="component-codeblock" :code="codes.install"></source-code>
    <div class="component-header">{{ $t('getting-started.import') }}</div>
    <div class="component-content">{{ $t('getting-started.import-desc') }}</div>
    <source-code class="component-codeblock" :code="codes.import" lang="js"></source-code>
    <div class="component-header">{{ $t('getting-started.config') }}</div>
    <div class="component-content" v-html="$t('getting-started.config-desc')"></div>
    <source-code class="component-codeblock" :code="codes.globals" lang="js"></source-code>
    <div class="component-content" v-html="$t('getting-started.config-part')"></div>
    <source-code class="component-codeblock" :code="codes.setGlobals" lang="js"></source-code>
    <div class="component-header">{{ $t('getting-started.i18n') }}</div>
    <div class="component-content">{{ $t('getting-started.i18n-desc') }}</div>
    <source-code class="component-codeblock" :code="codes.i18n" lang="js"></source-code>
    <div class="component-header">{{ $t('getting-started.start') }}</div>
    <div class="component-content">{{ $t('getting-started.start-desc') }}</div>
    <div class="component-header">{{ $t('getting-started.final') }}</div>
    <div class="component-content" v-html="$t('getting-started.final-desc')"></div>
    <div class="component-content" v-html="$t('getting-started.final-hint')"></div>
  </div>
</template>

<script setup>
const codes = {
  install: `pnpm i zenless-ui -S`,
  import: `import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui'
import 'zenless-ui/dist/index.css'
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
zenless.isItalic = true`,
  i18n: `import ZenlessUI, { locale } from 'zenless-ui'

app.use(ZenlessUI, {
  locale: locale.zhCn
})`
}
</script>