# Zenless UI
一套基于 Vue 3.0 的仿绝区零桌面端组件库

[中文](https://github.com/ChrisChan13/zenless-ui/blob/main/README.md) | [English](https://github.com/ChrisChan13/zenless-ui/blob/main/README.EN.md)

## Install
```shell
pnpm install zenless-ui -S
```

## Quick Start
```javascript
import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui'
import 'zenless-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ZenlessUI)
app.mount('#app')
```
更多内容请查阅 [快速上手](https://chrischan13.github.io/zenless-ui)

## LICENSE
[MIT](https://github.com/ChrisChan13/zenless-ui/blob/main/LICENSE)