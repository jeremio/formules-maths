import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Courbe from './components/Courbe.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Courbe', Courbe)
  },
} satisfies Theme
