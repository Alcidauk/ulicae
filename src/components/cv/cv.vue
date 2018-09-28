<template>
  <v-container fluid>
       <v-navigation-drawer
       class="lime lighten-1"
      persistent
      :mini-variant="miniVariant"
      :clipped=true
      v-model="drawer"
      enable-resize-watcher
    >
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="selectedPage = item.currentPage"
        >
          <v-list-tile-action>
            <v-icon color="teal darken-4" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="teal--text text--darken-4" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

      <Category currentPage="formation" :selectedPage="selectedPage"/>
      <Category currentPage="experiences" :selectedPage="selectedPage"/>
  </v-container>
</template>

<script>
import Category from './category'

export default {
  name: 'Cv',
  props: {
    msg: String
  },
  components: {
    Category
  },
  data () {
    return {
      miniVariant: false,
      selectedPage: 'formation',
      drawer: true,
      fixed: false,
      items: [{
        icon: 'mdi-school',
        title: 'Formation',
        currentPage: 'formation'
      },
      {
        icon: 'mdi-briefcase-outline',
        title: 'Expériences',
        currentPage: 'experiences'
      },
      {
        icon: 'mdi-chart-line-variant',
        title: 'Compétences'
      },
      {
        icon: 'mdi-sticker-emoji',
        title: 'Loisirs'
      },
      {
        icon: 'mdi-information-variant',
        title: 'Contact'
      }]     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
