import { ref, inject } from 'vue'

export const i18nContextKey = Symbol('i18nContextKey')

const i18n = ref({})

export const $t = (key, value) => {
  return key.split('.').reduce((o, i) => {
    if (o) return o[i]
  }, i18n.value) || value || `{{ ${key} }}`
}

export default {
  install: (app, options) => {
    i18n.value = options || {}
    app.config.globalProperties.$t = $t
    app.provide(i18nContextKey, i18n)
  }
}

export const useI18n = () => inject(i18nContextKey)
export { default as en } from './lang/en'
export { default as zhCn } from './lang/zh-cn'
