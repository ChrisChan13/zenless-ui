import ZCard from './card.vue'

ZCard.install = function(app) {
  app.component(ZCard.name, ZCard)
}

export default ZCard