<template>
  <v-expansion-panel>
    <v-expansion-panel-header expand-icon="fa-caret-down">
        <v-layout class="align-center">
          <v-avatar :size="$vuetify.breakpoint.mobile ? 48 : 96" class="avatar-border">
            <v-img contain :src="require(`@/assets/${imgsrc}`)" alt="title" />
          </v-avatar>
          <div class="ml-5 d-flex flex-column justify-center">
              <div class="page-title"
              :class="{ 'text-subtitle-2': $vuetify.breakpoint.mobile, 'text-h6': !$vuetify.breakpoint.mobile }">{{ title }}</div>
              <div class="primary--text mt-1"
              :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{ dates }}</div>
              <div class="primary--text mt-1"
              :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{ place }}</div>
              <div class="subheading mt-1"
              :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{ diploma }}</div>
          </div>
        </v-layout>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-container :grid-list-md="$vuetify.breakpoint.mobile" :grid-list-lg="!$vuetify.breakpoint.mobile" pa-2>
        <v-layout align-space-around justify-space-around row wrap>
          <v-flex v-for="(item, index) in subDiploma" :key="index" xs12 md6>
            <v-card class="primary lighten-3" height="100%">
              <v-card-title class="pa-2 pl-3 primary card-title">
                <v-layout row align-center>
                  <v-flex xs2 sm1>
                    <v-icon class="secondary--text" small="$vuetify.breakpoint.mobile">{{
                      item.icon
                    }}</v-icon>
                  </v-flex>
                  <v-flex xs10 sm11 class="secondary--text text--lighten-1 text-subtitle-1"
                    :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{
                    item.title
                  }}</v-flex>
                </v-layout>
              </v-card-title>
              <v-card-text class="primary lighten-3 justify-center mt-5" 
              :class="{ 'text-caption': $vuetify.breakpoint.mobile }" v-html="compiledMarkdown(item.content)"/>
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

.card-title {
  word-break: normal;
}
</style>
