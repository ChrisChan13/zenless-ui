import { debounce } from 'throttle-debounce'

const resizeHandler = (entries) => {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || []
    if (listeners.length > 0) {
      listeners.forEach((callback) => { callback() })
    }
  }
}

export const addResizeListener = (element, callback) => {
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__resizeObserver__ = new ResizeObserver(debounce(16, resizeHandler))
    element.__resizeObserver__.observe(element)
  }
  element.__resizeListeners__.push(callback)
}

export const removeResizeListener = (element, callback) => {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(callback), 1)
  if (element.__resizeListeners__.length === 0) {
    element.__resizeObserver__.disconnect()
  }
}