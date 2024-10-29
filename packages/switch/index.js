import ZSwitch from './switch.vue'

ZSwitch.install = function(app) {
  app.component(ZSwitch.name, ZSwitch)
}

export default ZSwitch