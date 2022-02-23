<template>
  <v-app-bar app fixed :clipped-left="true" color="primary">
      <v-app-bar-title>
          <span class="title-font secondary--text">{{title}}</span><span class="extension-font secondary--text">.com</span>
          <span class="subtitle-font primary--text text--lighten-4 text-lg-right">Pierre Rognon</span>
      </v-app-bar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{path:'/home'}" color="secondary accent-2">
            <v-icon left color="secondary accent-1">fa-home</v-icon>Accueil
          </v-tab>
          <v-tab :to="{path:'/cv'}" color="secondary accent-2">
            <v-icon left color="secondary accent-1">fa-address-card</v-icon>CV
          </v-tab>
          <v-tab :to="{path:'/notes'}" color="secondary accent-2">
            <v-icon left color="secondary accent-1">fa-clipboard</v-icon>Notes
          </v-tab>
          <v-tab :to="{path:'/portfolio'}" color="secondary accent-2">
            <v-icon left color="secondary accent-1">fa-images</v-icon>Albums
          </v-tab>
          <v-tab :to="{path:'/cinelog/home'}" class="secondary--text">
            <v-img height="30" width="30" class="mr-3" :src="require(`@/assets/cinelog.png`)"/>CineLog
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    msg: String
  },
  data () {
    return {
      title: "Ulicae",
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title {
  margin-right: 25px;
  line-height: 0.9;
}

.title-font {
  font-family: "library";
  font-size: 1.6em;
}

.extension-font {
  font-family: "library";
  font-size: 1em;
}

.subtitle-font {
  font-family: "library";
  font-size: 1.2em;
}
</style>
