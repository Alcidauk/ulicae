<template>
  <v-toolbar app fixed :clipped-left="true" color="primary">
    <div class="toolbar-title">
      <v-toolbar-title><span class="title-font secondary--text">{{title}}</span><span class="extension-font secondary--text">.com</span></v-toolbar-title>
      <v-toolbar-title class="subtitle-font primary--text text--lighten-4 text-lg-right">Pierre Rognon</v-toolbar-title>
    </div>
      <v-toolbar-items justify-space-around>
        <v-btn :to="{path:'/home'}" flat color="secondary accent-2"><v-icon left color="secondary accent-1">fa-home</v-icon>Accueil</v-btn>
        <v-btn :to="{path:'/cv'}" flat color="secondary accent-2"><v-icon left color="secondary accent-1">fa-address-card</v-icon>CV</v-btn>
        <v-btn :to="{path:'/notes'}" flat color="secondary accent-2"><v-icon left color="secondary accent-1">fa-clipboard</v-icon>Notes</v-btn>
        <v-btn :to="{path:'/portfolio'}" flat color="secondary accent-2"><v-icon left color="secondary accent-1">fa-images</v-icon>Albums</v-btn>
        <v-btn :to="{path:'/cinelog/home'}" depressed color="#320b86" class="secondary--text">           
          <v-img height="30" width="30" class="mr-3" :src="require(`@/assets/cinelog.png`)"/>
          CineLog
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
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
