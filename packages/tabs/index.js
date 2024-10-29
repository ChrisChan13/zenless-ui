import ZTabs from './tabs.vue'

ZTabs.install = function(app) {
  app.component(ZTabs.name, ZTabs)
}

export default ZTabs