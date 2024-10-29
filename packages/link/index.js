import ZLink from './link.vue'

ZLink.install = function(app) {
  app.component(ZLink.name, ZLink)
}

export default ZLink