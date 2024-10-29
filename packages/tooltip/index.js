import ZTooltip from './tooltip.vue'

ZTooltip.install = function(app) {
  app.component(ZTooltip.name, ZTooltip)
}

export default ZTooltip