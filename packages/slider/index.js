import ZSlider from './slider.vue'

ZSlider.install = function(app) {
  app.component(ZSlider.name, ZSlider)
}

export default ZSlider