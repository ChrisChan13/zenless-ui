import ZMenuItem from '../menu/menu-item.vue'

ZMenuItem.install = function(app) {
  app.component(ZMenuItem.name, ZMenuItem)
}

export default ZMenuItem