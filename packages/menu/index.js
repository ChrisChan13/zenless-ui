import ZMenu from './menu.vue'

ZMenu.install = function(app) {
  app.component(ZMenu.name, ZMenu)
}

export default ZMenu