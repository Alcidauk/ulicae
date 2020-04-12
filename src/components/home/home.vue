  <template>
  <v-layout wrap fill-height child-flex secondary lighten-1>
    <v-card class="ma-5">
        <v-flex>
          <v-card-title>
            <h1>Bienvenue</h1>
          </v-card-title>
          <v-card-text>
          <div class="align-center">Je suis Pierre Rognon, développeur informatique depuis quelques années maintenant.</div> 
          <p>Vous trouverez ici <a href="/cv">CV</a>, <a href="/notes">ressources</a> et autres informations que je souhaite partager.</p>
          <br/>
          <p>Bonne visite !</p>
          </v-card-text>
        </v-flex>
      
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

