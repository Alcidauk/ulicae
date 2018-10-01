<template>
  <v-layout v-if="selectedPage === currentPage">
    <h3 class="page-title">{{selectedPage}}</h3>
    <v-layout column align-center>
    <div width="100%" >
    <Knowledge imgsrc="latex.png" knowledgeName="latex" :knowledge.sync="knowledge"></Knowledge>
     <v-card width="100%">
        <v-card-title primary-title>
          <div v-if="knowledge === 'latex'">
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Latex c'est trop bien.</div>
          </div>
        </v-card-title>
      </v-card>
    </div>
    </v-layout>
  </v-layout>
</template>

<script>
import Knowledge from './knowledge'

export default {
  name: 'KnowledgeCategory',
  props: {
    currentPage: String,
    selectedPage: String
  },
  components: {
    Knowledge
  },
   data () {
    return {
      knowledge: "coucou"
    }
  }
}
</script>
