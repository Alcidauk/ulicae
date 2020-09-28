import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey.darken3,
        secondary: "#edb976",
        accent: colors.blueGrey.darken4,
        error: colors.red.darken4,
        background: colors.grey.lighten3,
        cinelog_primary: "#320b86",
        cinelog_secondary: "#790e8b",
        white_color: "#fff"
      }
    }
  }
});

