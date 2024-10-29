import ZTabPanel from '../tabs/tab-panel.vue'

ZTabPanel.install = function(app) {
  app.component(ZTabPanel.name, ZTabPanel)
}

export default ZTabPanel