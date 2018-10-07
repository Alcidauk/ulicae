<template>
  <v-toolbar app fixed :clipped-left="true" color="teal darken-1">
    <div class="toolbar-title">
      <v-toolbar-title v-text="title" class="title-font lime--text text--accent-2"/>
      <v-toolbar-title class="subtitle-font lime--text text--accent-1">Pierre Rognon</v-toolbar-title>
    </div>
      <v-toolbar-items justify-space-around>
        <v-btn :to="{path:'/home'}" flat color="lime accent-2"><v-icon left color="lime accent-1">mdi-home-outline</v-icon>Accueil</v-btn>
        <v-btn :to="{path:'/cv'}" flat color="lime accent-2"><v-icon left color="lime accent-1">mdi-notebook</v-icon>CV</v-btn>
        <v-btn :to="{path:'/notes'}" flat color="lime accent-2"><v-icon left color="lime accent-1">mdi-note-text</v-icon>Notes</v-btn>
        <v-btn :to="{path:'/portfolio'}" flat color="lime accent-2"><v-icon left color="lime accent-1">mdi-folder-image</v-icon>Albums</v-btn>
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
  line-height: 1;
}

.title-font {
  font-family: "library";
  font-size: 1.8em;
}

.subtitle-font {
  font-family: "library";
  font-size: 1.3em;
}
</style>
