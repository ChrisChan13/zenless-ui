import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ZTableCell',
  props: ['row', 'column', 'index', 'render'],
  render() {
    let children = []
    const props = {
      row: this.$props.row,
      column: this.$props.column,
      index: this.$props.index
    }
    if (this.$props.render) {
      children = this.$props.render(props).map((item) => (
        item.type === 'template' ? item.children : item
      ))
    } else {
      children = this.$slots.default(props)
    }
    return h('div', { class: 'cell' }, children)
  }
})