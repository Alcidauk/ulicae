  <template>
  <v-layout wrap fill-height child-flex secondary lighten-1>
    <v-card class="ma-5">
        <v-flex align-center justify-center layout>
        <v-card-title><h1>Bienvenue</h1></v-card-title>
        </v-flex>

      <v-layout row class="pa-5">
          <v-flex xs4>
          <v-flex justify-center layout>
            <v-btn :to="{path:'/cv'}" fab large color="primary lighten-1">
              <v-icon contain large color="secondary">mdi-notebook</v-icon>
            </v-btn>
          </v-flex>
          <v-flex justify-center layout class="pt-3">
            <h3>Mon CV ici</h3>
          </v-flex>
        </v-flex>

        <v-flex xs4>
          <v-flex justify-center layout>
            <v-btn :to="{path:'/notes'}" fab large color="primary lighten-1">
              <v-icon contain large color="secondary">mdi-note-text</v-icon>
            </v-btn>
          </v-flex>
          <v-flex justify-center layout class="pt-3">
            <h3>Des notes, techniques</h3>
          </v-flex>
        </v-flex>

        <v-flex xs4>
          <v-flex justify-center layout>
            <v-btn :to="{path:'/portfolio'}" fab large color="primary lighten-1">
              <v-icon contain large color="secondary">mdi-folder-image</v-icon>
            </v-btn>
          </v-flex>
          <v-flex justify-center layout class="pt-3">
            <h3>Des photos</h3>
          </v-flex>
        </v-flex>

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

