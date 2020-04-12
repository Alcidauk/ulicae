import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.blueGrey.darken3,
    secondary: colors.brown.lighten3,
    accent: colors.blueGrey.darken4,
    error: colors.red.darken4,
    background: colors.brown.lighten3,
  }
})

