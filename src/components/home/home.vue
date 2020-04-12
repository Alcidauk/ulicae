  <template>
  <v-layout wrap fill-height child-flex secondary lighten-1>
    <v-card class="ma-5">
        <v-flex align-center justify-center layout>
        <v-card-title><h1>Bienvenue</h1></v-card-title>
        </v-flex>

      <v-layout row class="pa-5">
      </v-layout>
      
    </v-card>
  </v-layout>
  </template>

  <script>
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data () {
      return { 
      }
    }
  }
  </script>

  <style scoped>
  </style>

