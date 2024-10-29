import ZBacktop from './backtop.vue'

ZBacktop.install = function(app) {
  app.component(ZBacktop.name, ZBacktop)
}

export default ZBacktop