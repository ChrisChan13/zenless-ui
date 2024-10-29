import ZTextarea from './textarea.vue'

ZTextarea.install = function(app) {
  app.component(ZTextarea.name, ZTextarea)
}

export default ZTextarea