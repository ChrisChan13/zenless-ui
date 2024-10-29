import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui/index'
import 'zenless-ui/index.css'
import SourceCode from '@/components/source-code.vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(ZenlessUI)
app.use(router)
app.component('sourceCode', SourceCode)
app.mount('#app')