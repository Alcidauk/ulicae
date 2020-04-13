<template>
  <v-layout fill-height secondary lighten-1>
    <v-container>
      <h1 class="mb-5 violet">CineLog</h1>
      <v-card class="pa-5">
        <div align="right">
          <a href="https://f-droid.org/packages/com.ulicae.cinelog/" target="blank">
              <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" height="60">
          </a>
        </div>

        <div v-html="description">
        </div>

      </v-card>

    <v-layout grid-list-md text-xs-center row wrap class="pt-5 pb-5">
        <v-flex xs4 class="pr-2">
          <v-card class="pa-3">
            <router-link to="/cinelog/questions"><h3 class="violet">FAQ</h3></router-link>
          </v-card>
        </v-flex>
        <v-flex xs4 class="pr-2">
          <v-card class="pa-3">
            <router-link to="/cinelog/links"><h3 class="violet">Liens utiles</h3></router-link>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card class="pa-3">
            <router-link to="/cinelog/screenshots"><h3 class="violet">Captures d'écran</h3></router-link>
          </v-card>
        </v-flex>
      </v-layout>


      <v-card class="pa-5">
        <router-view xs12></router-view>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    name: 'Cinelog',
    data () {
      return { 
        description: require('../../assets/cinelog-desc.md')
      }
    },
  }
</script>

<style scoped>
.violet {
  color: #971796;
}
</style>

