import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import type { DefineComponent } from 'vue'

config.autoAddCss = false
library.add(fas)

export default defineNuxtPlugin((nuxtApp: { vueApp: { component: (arg0: string, arg1: DefineComponent<FontAwesomeIconProps>, arg2: {}) => void } }) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
