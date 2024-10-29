import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ZTabItem',
  props: ['content'],
  render() {
    return h('div', {
      class: 'z-tab-item'
    }, this.content)
  }
})