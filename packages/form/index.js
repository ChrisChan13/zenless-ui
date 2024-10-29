import ZForm from './form.vue'

ZForm.install = function(app) {
  app.component(ZForm.name, ZForm)
}

export default ZForm