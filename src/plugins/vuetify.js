import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.teal.darken2,
    secondary: "#edb976",
    accent: colors.blueGrey.darken4,
    error: colors.red.darken4,
    background: colors.grey.lighten3,
    cinelog_primary: "#320b86",
    cinelog_secondary: "#790e8b",
    white: "#fff"
  }
})

