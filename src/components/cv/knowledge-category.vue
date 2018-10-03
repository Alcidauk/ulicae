<template>
  <v-container v-if="selectedPage === currentPage">
    <h1 class="page-title">Compétences</h1>

    <v-layout column>

    <v-layout row align-center class="ma-5">
      <Knowledge v-for="(knowledge, index) in knowledges" 
      :key=index
      :knowledge=knowledge
      v-on:update:currentKnowledge="handleIt"/>
    </v-layout>

    <v-layout align-center>
      <v-card v-if=currentKnowledge class="ma-2" color="teal lighten-4" width="100%">
        <v-card-title class="card-title" primary-title>
          <h3>{{currentKnowledge.title}}</h3>
        </v-card-title>
        <v-card-text>{{currentKnowledge.content}}</v-card-text>
      </v-card>

      <v-card v-if=!currentKnowledge class="ma-2" color="teal lighten-4" width="100%">Cliquez sur l'une des icônes.</v-card>
    </v-layout>

    </v-layout>

  </v-container>
</template>

<script>
import Knowledge from './knowledge'

export default {
  name: 'KnowledgeCategory',
  props: {
    currentPage: String,
    selectedPage: String
  },
  methods: {
    handleIt: function (item) {
      this.currentKnowledge = item
    }
  },
  components: {
    Knowledge
  },
   data () {
    return {
      currentKnowledge: null,
      knowledges: [
        {
          title: "Latex",
          content: "Rédaction de rapports de stage, de diaporamas, de cahiers de spécifications.",
          imgsrc: "latex.png"
        },
        {
          title: "Java",
          content: "Développement de nombreux projets au cours d'études, de stages et d'emploi. Connaissances autour des versions 6 à 8 principalement. Utilisation de nombreuses librairies...",
          imgsrc: "java.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-title {
  background-color: #4DB6AC;
}
</style>
