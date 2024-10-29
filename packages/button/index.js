import ZButton from './button.vue'

ZButton.install = function(app) {
  app.component(ZButton.name, ZButton)
}

export default ZButton