<template>
  <v-container>

    <v-btn v-if="!$vuetify.breakpoint.lgAndUp" color="teal lighten-1" fab left @click.stop="permanent = !permanent">
      <v-icon v-html="permanent ? 'mdi-backburger' : 'mdi-menu'"/>
    </v-btn>
    <v-navigation-drawer
      class="teal lighten-1"
      :mini-variant="miniVariant"
      :permanent="permanent"
      clipped
      fixed
      app>

      <v-btn icon align-center left @click.stop="miniVariant = !miniVariant">
        <v-icon x-large color="lime accent-1" v-html="miniVariant ? 'mdi-menu-right' : 'mdi-menu-left'"/>
      </v-btn>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="selectedPage = item.currentPage">
          <v-list-tile-action>
            <v-icon color="lime accent-1" v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="lime--text text--accent-2" v-text="item.title"/>
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
      permanent: false,
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
