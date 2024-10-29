import ZDrawer from './drawer.vue'

ZDrawer.install = function(app) {
  app.component(ZDrawer.name, ZDrawer)
}

export default ZDrawer