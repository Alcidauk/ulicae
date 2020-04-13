  <template>
    <v-layout fill-height secondary lighten-1>
      <v-container>
        <v-card class="pa-5">
          <h1 align="center" justify="center">Bienvenue</h1>

          <div class="mt-5" align="center" justify="center">
            Je suis Pierre Rognon, développeur informatique depuis quelques années maintenant.
          </div>

          <div class="mt-1 mb-5" align="center" justify="center">
            Vous trouverez ici <a href="/cv">CV</a>, <a href="/notes">ressources</a> et autres informations que je souhaite partager.
          </div>
          
          <div align="center" justify="center">
            Bonne visite !
          </div>   
        </v-card>
      </v-container>
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

