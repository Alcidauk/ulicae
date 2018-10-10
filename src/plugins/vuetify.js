import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.teal.darken3,
    secondary: '#C19A6B',
    accent: colors.teal.accent4,
    error: colors.red.accent2
  }
})

