import { ref } from 'vue'
import { zhCn } from './locale/index'

const zenlessCtx = ref({
  isBold: false,
  isItalic: true,
  locale: zhCn
})

export default zenlessCtx