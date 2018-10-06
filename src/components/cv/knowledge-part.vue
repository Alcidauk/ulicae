<template>
  <v-layout column>
    <h2 class="mt-5">{{title}}</h2>

  <v-container grid-list-md>
    <v-layout row wrap align-center class="ma-5">
      <Knowledge v-for="(knowledge, index) in knowledges" 
      :key=index
      :knowledge=knowledge
      v-on:update:currentKnowledge="handleIt" xs1/>
    </v-layout>
  </v-container>

    <v-layout align-center>
      <v-card v-if=currentKnowledge class="ma-2" color="teal lighten-4" width="100%">
        <v-card-title class="pa-2 card-title" color="lime accent-1">
          <v-avatar size=64 color="lime accent-1" class="elevation-5 mt-1 ml-1 mb-1 mr-3 knowledge-avatar">
            <v-img contain :src="require(`@/assets/${currentKnowledge.imgsrc}`)"/>
          </v-avatar>
          <h2>{{currentKnowledge.title}}</h2>
        </v-card-title>
        <v-card-text v-html="compiledMarkdown(currentKnowledge.content)"/>
      </v-card>

      <v-card v-if=!currentKnowledge class="ma-2" color="teal lighten-4" width="100%">Cliquez sur l'une des icônes.</v-card>
    </v-layout>

  </v-layout>
</template>

<script>
import Knowledge from './knowledge'
import marked from 'marked'

export default {
  name: 'KnowledgePart',
  props: {
    currentPage: String,
    selectedPage: String,
    knowledges: Object,
    title: String
  },
  methods: {
    handleIt: function (item) {
      this.currentKnowledge = item
    },
    compiledMarkdown: function (item) {
      return marked(item, { sanitize: true })
    }
  },
  components: {
    Knowledge
  },
   data () {
    return {
      currentKnowledge: null
    }
  }
}
</script>

<style scoped>
.card-title {
  background-color: #4DB6AC;
  color: #EEFF41;
  font-weight: bold;
}
.knowledge-avatar {
  background-color: #ffffff;
}
</style>
