import Vue from 'vue'
import en from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(en)

// lazy load components
export default () => {
  Vue.component('ElDropdown', () => import('element-ui/lib/dropdown'))
  Vue.component('ElDropdownMenu', () => import('element-ui/lib/dropdown-menu'))
  Vue.component('ElDropdownItem', () => import('element-ui/lib/dropdown-item'))
}
