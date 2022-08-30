<template>
  <v-layout column>
     <div class="mt-5"
    :class="{ 'text-h6': $vuetify.breakpoint.mobile, 'text-h5': !$vuetify.breakpoint.mobile }">{{title}}</div>

  <v-container grid-list-md>
    <v-layout justify-center row wrap class="mb-2">
      <Knowledge v-for="(knowledge, index) in knowledges" 
      :key=index
      :knowledge=knowledge
      v-on:update:currentKnowledge="handleIt"/>
    </v-layout>
  </v-container>

    <v-layout>
      <v-card v-if=currentKnowledge class="ma-2" color="primary lighten-4" width="100%">
        <v-card-title class="pa-2 primary card-title">
          <v-avatar :size="$vuetify.breakpoint.mobile ? 32 : 64" class="mt-1 ml-1 mb-1 mr-3 avatar-border">
            <v-img v-if="currentKnowledge.imgsrc" contain :src="require(`@/assets/${currentKnowledge.imgsrc}`)"/>
            <v-icon :small="$vuetify.breakpoint.mobile"
            v-if="currentKnowledge.icon" class="secondary--text">{{currentKnowledge.icon}}</v-icon>
          </v-avatar>
          <div class="secondary--text text--lighten-1"
          :class="{ 'text-caption': $vuetify.breakpoint.mobile, 'text-h5': !$vuetify.breakpoint.mobile }">{{currentKnowledge.title}}</div>
        </v-card-title>
        <v-card-text class="mt-5" 
        :class="{ 'text-caption': $vuetify.breakpoint.mobile }" v-html="compiledMarkdown(currentKnowledge.content)"/>
      </v-card>

      <v-card v-if=!currentKnowledge class="pa-3" color="primary lighten-4" width="100%">Cliquez sur l'une des icônes.</v-card>
    </v-layout>

  </v-layout>
</template>

<script>
import Knowledge from './knowledge'
import { marked } from 'marked';

export default {
  name: 'KnowledgePart',
  props: {
    currentPage: String,
    selectedPage: String,
    knowledges: Array,
    title: String
  },
  methods: {
    handleIt: function (item) {
      this.currentKnowledge = item
    },
    compiledMarkdown: function (item) {
      return marked.parse(item, { sanitize: true })
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
.avatar-border {
  border: 2px solid #edb976;
  background-color: white;
}

.card-title {
  background-color: #009688;
  font-weight: bold;

  word-break: normal;
  flex-wrap: nowrap;
}
</style>
