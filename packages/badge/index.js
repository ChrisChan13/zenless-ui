import ZBadge from './badge.vue'

ZBadge.install = function(app) {
  app.component(ZBadge.name, ZBadge)
}

export default ZBadge