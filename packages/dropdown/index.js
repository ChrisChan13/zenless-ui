import ZDropdown from './dropdown.vue'

ZDropdown.install = function(app) {
  app.component(ZDropdown.name, ZDropdown)
}

export default ZDropdown