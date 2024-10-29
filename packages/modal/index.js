import ZModal from './modal.vue'

ZModal.install = function(app) {
  app.component(ZModal.name, ZModal)
}

export default ZModal