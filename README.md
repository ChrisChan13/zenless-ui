<a style="display:flex;justify-content:center;align-items:flex-start;user-select:none;">
  <img src="./public/zenless.png" width="80">
  <span style="color:#000;font-size:64px;font-weight:bold;line-height:1;text-shadow:0 2px 0 white, 2px 0 0 white, 0 -2px 0 white, -2px 0 0 white;">enless</span>
</a>

> 一套基于 Vue 3.0 的仿 ***绝区零*** 桌面端组件库

## Install
```shell
pnpm install zenless-ui -S
```

## Quick Start
```javascript
import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui'
import 'zenless-ui/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ZenlessUI)
app.mount('#app')
```
更多内容请查阅 [快速上手](https://chrischan13.github.io/zenless-ui)

## LICENSE
[MIT](https://github.com/ChrisChan13/zenless-ui/blob/main/LICENSE)