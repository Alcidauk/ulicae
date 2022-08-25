<template>
  <v-expansion-panel>
    <v-expansion-panel-header expand-icon="fa-caret-down">
        <v-layout class="align-center">
          <v-avatar size="96" class="avatar-border">
            <v-img contain :src="require(`@/assets/${imgsrc}`)" alt="title" />
          </v-avatar>
          <div class="ml-5 d-flex flex-column justify-center">
              <h3 class="page-title">{{ title }}</h3>
              <div class="primary--text mt-1">{{ dates }}</div>
              <div class="primary--text mt-1">{{ place }}</div>
              <div class="subheading mt-1">{{ diploma }}</div>
          </div>
        </v-layout>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-container grid-list-md>
        <v-layout align-space-around justify-space-around row wrap>
          <v-flex v-for="(item, index) in subDiploma" :key="index" xs6>
            <v-card class="ma-2 primary lighten-3" height="100%">
              <v-card-title class="pa-2 pl-3 primary">
                <v-layout row align-center>
                  <v-flex xs1>
                    <v-icon color="secondary accent-1">{{
                      item.icon
                    }}</v-icon>
                  </v-flex>
                  <v-flex xs11 class="secondary--text text--lighten-1 text-subtitle-1">{{
                    item.title
                  }}</v-flex>
                </v-layout>
              </v-card-title>
              <v-card-text class="primary lighten-3 justify-center mt-5" v-html="compiledMarkdown(item.content)"/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { marked } from 'marked';

export default {
  name: "ExperienceStep",
  props: {
    title: String,
    imgsrc: String,
    dates: String,
    place: String,
    diploma: String,
    subDiploma: Array,
  },
  methods: {
    compiledMarkdown: function (item) {
      return marked.parse(item, { sanitize: true });
    },
  },
};
</script>

<style scoped>
.avatar-border {
  border: 2px solid #edb976;
}
</style>
