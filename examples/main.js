import { createApp } from 'vue'
import ZenlessUI from 'zenless-ui/index'
import 'zenless-ui/index.css'
import SourceCode from '@/components/source-code.vue'
import AttributeTable from '@/components/attribute-table.vue'
import SlotTable from '@/components/slot-table.vue'
import EventTable from '@/components/event-table.vue'
import MethodTable from '@/components/method-table.vue'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/locale'

const app = createApp(App)

app.use(i18n)
app.use(ZenlessUI)
app.use(router)
app.component(SourceCode.name, SourceCode)
app.component(AttributeTable.name, AttributeTable)
app.component(SlotTable.name, SlotTable)
app.component(EventTable.name, EventTable)
app.component(MethodTable.name, MethodTable)
app.mount('#app')