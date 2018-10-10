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
                <div class="primary--text">{{dates}}</div>
                <div class="primary--text">{{place}}</div>
                <div class="subheading">{{diploma}}</div>
                
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

      <v-container grid-list-md>
        <v-layout align-space-around justify-space-around fill-height row wrap>
          <v-flex v-for="(item, index) in subDiploma" :key=index xs6>
            <v-card class="ma-2" color="primary lighten-4">
              <v-card-title class="pa-3 card-title">
                  <v-layout row align-center>
                    <v-flex xs2>
                      <v-icon large color="secondary accent-1">{{item.icon}}</v-icon>
                    </v-flex>
                    <v-flex xs10 class="secondary--text text--lighten-1">{{item.title}}</v-flex>
                  </v-layout>
              </v-card-title>
              <v-card-text v-html="compiledMarkdown(item.content)"/>
            </v-card> 
          </v-flex>   
        </v-layout>
      </v-container>
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
  background-color: #009688;
  font-weight: bold;
}
</style>
