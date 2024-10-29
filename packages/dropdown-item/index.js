import ZDropdownItem from '../dropdown/dropdown-item.vue'

ZDropdownItem.install = function(app) {
  app.component(ZDropdownItem.name, ZDropdownItem)
}

export default ZDropdownItem