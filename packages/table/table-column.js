import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ZTableColumn',
  props: ['prop', 'label', 'width'],
  render() {
    return h('div', this.$slots.default ? this.$slots.default({
      row: {},
      column: {},
      index: -1
    }) : [])
  }
})