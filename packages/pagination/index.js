import ZPagination from './pagination.vue'

ZPagination.install = function(app) {
  app.component(ZPagination.name, ZPagination)
}

export default ZPagination