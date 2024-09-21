<template>
  <v-layout fill-height background lighten-1>

    <v-navigation-drawer clipped app color="secondary lighten-1">
      <v-list-item v-for="(noteFile, noteFileIndex) in noteFileList" :key="noteFileIndex">
        <v-list-item-content>
          <a @click="scrollMeTo(noteFile.name)">{{noteFile.title}}</a>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-container fluid class="ma-5">
      <h1 class="mb-5">Notes</h1>

      <v-card
        v-for="(note, noteIndex) in notes"
        :key="noteIndex"
        :ref="noteFileList[noteIndex].name"
        class="mb-10"
        width="100%">
        <v-card-title class="pa-3 text-h5">
          {{noteFileList[noteIndex].title}}
        </v-card-title>
        <v-card-text>
          <span v-html="compiledMarkdown(note)"></span>
        </v-card-text>
      </v-card>

      <div v-if="notes.length === 0" class="mt-5" align="center" justify="center">
        Impossible d'afficher les notes.
      </div>
    </v-container> 
  </v-layout>
</template>

  <script>
import axios from "axios";
import { marked } from 'marked';

export default {
  name: "Note",
  props: {
    msg: String,
  },
  mounted() {
    this.noteFileList.forEach(noteFile => {
      axios
        .get(`/notes/${noteFile.name}`)
        .then((response) => {
          this.notes.push(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    });
  },
  methods: {
    compiledMarkdown: function (item) {
      return marked.parse(item, { sanitize: true });
    },
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element[0].$el.offsetTop;

      window.scrollTo(0, top);
    }
  },
  data() {
    return {
      noteFileList: [
        {title: "Installation de l'environnement graphique i3", name: "i3.md"},
        {title: "Présentation de password store", name: "password-store.md"},
        {title: "Migration vue 2 vers vue 3", name: "vue3-migration.md"}
      ],
      notes:[]
    };
  },
};
</script>

  <style scoped>
</style>

