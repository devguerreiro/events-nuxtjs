import Vue from 'vue'
import en from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(en)

// lazy load components
export default () => {
  // Vue.component("ElButton", () => import("element-ui/lib/button"))
}
