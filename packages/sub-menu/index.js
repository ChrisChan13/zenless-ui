import ZSubMenu from '../menu/sub-menu.vue'

ZSubMenu.install = function(app) {
  app.component(ZSubMenu.name, ZSubMenu)
}

export default ZSubMenu