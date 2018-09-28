<template>
  <v-toolbar color="lime darken-3">
      <v-toolbar-title v-text="title" class="lime--text text--lighten-5 toolbar-title"/>
      <v-toolbar-items justify-space-around>
        <v-btn flat color="lime lighten-5"><v-icon left color="green lighten-3">mdi-home-outline</v-icon>Home</v-btn>
        <v-btn flat color="lime lighten-5"><v-icon left color="light-green lighten-3">mdi-account-card-details</v-icon>CV</v-btn>
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
}
</style>
