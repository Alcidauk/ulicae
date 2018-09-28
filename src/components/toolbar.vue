<template>
  <v-toolbar color="lime lighten-1">
    <div class="toolbar-title">
      <v-toolbar-title v-text="title" class="title-font teal--text text--darken-4"/>
      <v-toolbar-title class="subtitle-font teal--text text--darken-4">Pierre Rognon</v-toolbar-title>
    </div>
      <v-toolbar-items justify-space-around>
        <v-btn :to="{path:'/home'}" flat color="teal darken-4"><v-icon left color="teal lighten-1">mdi-home-outline</v-icon>Accueil</v-btn>
        <v-btn :to="{path:'/cv'}" flat color="teal darken-4"><v-icon left color="teal lighten-1">mdi-account-card-details</v-icon>CV</v-btn>
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
