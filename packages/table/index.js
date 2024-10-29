import ZTable from './table.vue'

ZTable.install = function(app) {
  app.component(ZTable.name, ZTable)
}

export default ZTable