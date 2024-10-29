import ZTag from './tag.vue'

ZTag.install = function(app) {
  app.component(ZTag.name, ZTag)
}

export default ZTag