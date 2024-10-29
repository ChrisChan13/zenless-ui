import ZTableColumn from '../table/table-column'

ZTableColumn.install = function(app) {
  app.component(ZTableColumn.name, ZTableColumn)
}

export default ZTableColumn