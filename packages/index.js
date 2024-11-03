import { inject, unref } from 'vue'
import zenlessCtx from './context'
import { zenlessContextKey } from './constants'
import '@src/utils/animate-sync'

import * as locale from 'zenless-ui/locale/index'
import ZScrollbar from 'zenless-ui/scrollbar/index'
import ZButton from 'zenless-ui/button/index'
import ZIcon from 'zenless-ui/icon/index'
import ZLink from 'zenless-ui/link/index'
import ZCollapse from 'zenless-ui/collapse/index'
import ZCollapseItem from 'zenless-ui/collapse-item/index'
import ZMenu from 'zenless-ui/menu/index'
import ZMenuItem from 'zenless-ui/menu-item/index'
import ZSubMenu from 'zenless-ui/sub-menu/index'
import ZBacktop from 'zenless-ui/backtop/index'
import ZTag from 'zenless-ui/tag/index'
import ZBadge from 'zenless-ui/badge/index'
import ZTabs from 'zenless-ui/tabs/index'
import ZTabPanel from 'zenless-ui/tab-panel/index'
import ZTooltip from 'zenless-ui/tooltip/index'
import ZRadio from 'zenless-ui/radio/index'
import ZRadioGroup from 'zenless-ui/radio-group/index'
import ZRadioButton from 'zenless-ui/radio-button/index'
import ZCheckbox from 'zenless-ui/checkbox/index'
import ZCheckboxGroup from 'zenless-ui/checkbox-group/index'
import ZCheckboxButton from 'zenless-ui/checkbox-button/index'
import ZSlider from 'zenless-ui/slider/index'
import ZSwitch from 'zenless-ui/switch/index'
import ZInput from 'zenless-ui/input/index'
import ZTextarea from 'zenless-ui/textarea/index'
import ZSelect from 'zenless-ui/select/index'
import ZOption from 'zenless-ui/option/index'
import ZDropdown from 'zenless-ui/dropdown/index'
import ZDropdownItem from 'zenless-ui/dropdown-item/index'
import ZPagination from 'zenless-ui/pagination/index'
import ZCard from 'zenless-ui/card/index'
import ZModal from 'zenless-ui/modal/index'
import ZDrawer from 'zenless-ui/drawer/index'
import ZMessage, { useMessage } from 'zenless-ui/message/index'
import ZProgress from 'zenless-ui/progress/index'
import ZTable from 'zenless-ui/table/index'
import ZTableColumn from 'zenless-ui/table-column/index'
import ZForm from 'zenless-ui/form/index'
import ZFormItem from 'zenless-ui/form-item/index'
import './index.css'

const components = [
  ZScrollbar,
  ZIcon,
  ZButton,
  ZLink,
  ZCollapse,
  ZCollapseItem,
  ZMenu,
  ZMenuItem,
  ZSubMenu,
  ZBacktop,
  ZTag,
  ZBadge,
  ZTabs,
  ZTabPanel,
  ZTooltip,
  ZRadio,
  ZRadioGroup,
  ZRadioButton,
  ZCheckbox,
  ZCheckboxGroup,
  ZCheckboxButton,
  ZSlider,
  ZSwitch,
  ZInput,
  ZTextarea,
  ZSelect,
  ZOption,
  ZDropdown,
  ZDropdownItem,
  ZPagination,
  ZCard,
  ZModal,
  ZDrawer,
  ZMessage,
  ZProgress,
  ZTable,
  ZTableColumn,
  ZForm,
  ZFormItem
]

const install = (app, opts = { isBold: false }) => {
  if ('isBold' in opts) {
    zenlessCtx.value.isBold = !!opts.isBold
  }
  if ('isItalic' in opts) {
    zenlessCtx.value.isItalic = !!opts.isItalic
  }
  if ('locale' in opts) {
    zenlessCtx.value.locale = opts.locale
  }
  app.provide(zenlessContextKey, unref(zenlessCtx))
  components.forEach((component) => {
    component.install(app)
  })
}

export const useZenless = () => inject(zenlessContextKey)

export { locale }
export { ZScrollbar }
export { ZIcon }
export { ZButton }
export { ZLink }
export { ZCollapse }
export { ZCollapseItem }
export { ZMenu }
export { ZMenuItem }
export { ZSubMenu }
export { ZBacktop }
export { ZTag }
export { ZBadge }
export { ZTabs }
export { ZTabPanel }
export { ZTooltip }
export { ZRadio }
export { ZRadioGroup }
export { ZRadioButton }
export { ZCheckbox }
export { ZCheckboxGroup }
export { ZCheckboxButton }
export { ZSlider }
export { ZSwitch }
export { ZInput }
export { ZTextarea }
export { ZSelect }
export { ZOption }
export { ZDropdown }
export { ZDropdownItem }
export { ZPagination }
export { ZCard }
export { ZModal }
export { ZDrawer }
export { useMessage }
export { ZProgress }
export { ZTable }
export { ZTableColumn }
export { ZForm }
export { ZFormItem }
export default {
  install
}