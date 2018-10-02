<template>
    <v-expansion-panel-content expand-icon="mdi-arrow-down-bold-circle-outline">
      <div slot="header">
        <v-container grid-list-xl>
      <v-layout>
        <v-avatar size="96" class="elevation-10">
              <v-img contain :src="require(`@/assets/${imgsrc}`)" alt="title"/>
        </v-avatar>
        <v-flex>
          <div>
            <h3 class="page-title">{{title}}</h3>
            <div class="teal--text text--darken-4">{{dates}}</div>
            <div class="teal--text text--darken-4">{{place}}</div>
            <div class="subheading">{{diploma}}</div>
            
          </div>
        </v-flex>
      </v-layout>
    </v-container>
      </div>
      <v-card class="ma-2" color="teal lighten-4" v-for="(item, index) in subDiploma" :key=index>
            <v-card-title class="card-title">{{item.title}}</v-card-title>
            <v-card-text v-html="compiledMarkdown(item.content)"/>
      </v-card>      
    </v-expansion-panel-content>


</template>

<script>
import marked from 'marked'

export default {
  name: 'ExperienceStep',
  props: {
    title: String,
    imgsrc: String,
    dates: String,
    place: String,
    diploma: String,
    subDiploma: Array
  },
  methods: {
    compiledMarkdown: function (item) {
      return marked(item, { sanitize: true })
    }
  }
}
</script>

<style scoped>
.card-title {
  background-color: #4DB6AC;
}
</style>
