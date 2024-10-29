import ZScrollbar from './scrollbar.vue'

ZScrollbar.install = function(app) {
  app.component(ZScrollbar.name, ZScrollbar)
}

export default ZScrollbar