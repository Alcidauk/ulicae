import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'mdi',
    theme: {
      primary: colors.lime.lighten1, 
      secondary: colors.teal.darken4, 
      accent: colors.teal.lighten1 
    }
})

