import ZCollapse from './collapse.vue'

ZCollapse.install = function(app) {
  app.component(ZCollapse.name, ZCollapse)
}

export default ZCollapse