import { createVNode, render } from 'vue'
import zenlessCtx from '../context'
import ZMessage from './message.vue'

ZMessage.install = function(app) {
  app.component(ZMessage.name, ZMessage)
}

const createMessage = (payload, type) => {
  let message = ''
  let duration = 3000
  if (typeof payload === 'string') {
    message = payload
  } else if (typeof payload === 'object') {
    message = payload.message
    !type && payload.type && (type = payload.type)
    payload.duration && (duration = +payload.duration)
  }
  const vnode = createVNode(ZMessage, { message, type })
  const container = document.createElement('div')
  render(vnode, container)

  const msgElm = container.firstElementChild
  if (zenlessCtx.value.isBold) {
    msgElm.className = `${msgElm.className} is-bold`
  }
  document.body.appendChild(msgElm)

  let timer = setTimeout(() => {
    msgElm.className = `${msgElm.className} hidden`
    msgElm.getAnimations()[0].finished.finally(() => {
      document.body.removeChild(msgElm)
    })
    clearTimeout(timer)
    timer = null
  }, duration)
}
createMessage.success = (message) => createMessage(message, 'success')
createMessage.warning = (message) => createMessage(message, 'warning')
createMessage.error = (message) => createMessage(message, 'error')

export const useMessage = () => createMessage;
export default ZMessage