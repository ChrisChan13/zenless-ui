import ZProgress from './progress.vue'

ZProgress.install = function(app) {
  app.component(ZProgress.name, ZProgress)
}

export default ZProgress