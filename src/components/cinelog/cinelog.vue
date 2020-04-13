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
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    name: 'Cinelog',
    props: {
      description: String
    },
    mounted () {
      this.description = require('../../assets/cinelog-desc.md')
    },
  }
</script>

<style scoped>
.violet {
  color: #971796;
}
</style>

