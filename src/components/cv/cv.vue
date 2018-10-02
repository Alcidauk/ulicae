<template>
  <v-container>

    <v-navigation-drawer
      class="lime lighten-1"
      :mini-variant="miniVariant"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app>

      <v-btn icon left @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="selectedPage = item.currentPage">
          <v-list-tile-action>
            <v-icon color="teal darken-4" v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="teal--text text--darken-4" v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <FormationCategory currentPage="formation" :selectedPage="selectedPage"/>
    <ExperienceCategory currentPage="experiences" :selectedPage="selectedPage"/>
    <KnowledgeCategory currentPage="knowledges" :selectedPage="selectedPage"/>

  </v-container>
</template>

<script>
import FormationCategory from './formation-category'
import KnowledgeCategory from './knowledge-category'
import ExperienceCategory from './experience-category'

export default {
  name: 'Cv',
  props: {
    msg: String
  },
  components: {
    FormationCategory,
    KnowledgeCategory,
    ExperienceCategory
  },
  data () {
    return {
      miniVariant: false,
      selectedPage: 'formation',
      drawer: null,
      fixed: false,
      items: [
      {
        icon: 'mdi-briefcase-outline',
        title: 'Expériences',
        currentPage: 'experiences'
      },
        {
        icon: 'mdi-school',
        title: 'Formation',
        currentPage: 'formation'
      },
      {
        icon: 'mdi-chart-line-variant',
        title: 'Compétences',
        currentPage: 'knowledges'
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
