<template>
  <v-container>

    <v-btn v-if="!$vuetify.breakpoint.lgAndUp" color="primary lighten-1" fab left @click.stop="permanent = !permanent">
      <v-icon color="secondary" v-html="permanent ? 'fa-angle-left' : 'fa-angle-right'"/>
    </v-btn>
    <v-navigation-drawer
      class="primary lighten-1"
      :mini-variant="miniVariant"
      :permanent="permanent"
      clipped
      fixed
      app>

      <v-btn icon align-center left @click.stop="miniVariant = !miniVariant">
        <v-icon large color="secondary" v-html="miniVariant ? 'fa-angle-right' : 'fa-angle-left'"/>
      </v-btn>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="selectedPage = item.currentPage">
          <v-list-tile-action>
            <v-icon color="secondary" v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text text--lighten-2" v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          style="background-color: #D32F2F;"
          href="CV_website.pdf" 
          target="#"
          key="cv">
          <v-list-tile-action>
            <v-icon class="secondary--text">fa-file-pdf</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text text--lighten-2">CV au format PDF</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <FormationCategory currentPage="formation" :selectedPage="selectedPage"/>
    <ExperienceCategory currentPage="experiences" :selectedPage="selectedPage"/>
    <KnowledgeCategory currentPage="knowledges" :selectedPage="selectedPage"/>
    <HobbyCategory currentPage="hobbies" :selectedPage="selectedPage"/>
    <LinkCategory currentPage="links" :selectedPage="selectedPage"/>

  </v-container>
</template>

<script>
import FormationCategory from './formation-category'
import KnowledgeCategory from './knowledge-category'
import ExperienceCategory from './experience-category'
import HobbyCategory from './hobby-category'
import LinkCategory from './link-category'

export default {
  name: 'Cv',
  props: {
    msg: String
  },
  components: {
    FormationCategory,
    KnowledgeCategory,
    ExperienceCategory,
    HobbyCategory,
    LinkCategory
  },
  data () {
    return {
      miniVariant: false,
      permanent: false,
      selectedPage: 'experiences',
      drawer: null,
      fixed: false,
      items: [
      {
        icon: 'fa-briefcase',
        title: 'Expériences',
        currentPage: 'experiences'
      },
        {
        icon: 'fa-graduation-cap',
        title: 'Formation',
        currentPage: 'formation'
      },
      {
        icon: 'fa-chart-line',
        title: 'Compétences',
        currentPage: 'knowledges'
      },
      {
        icon: 'fa-hand-peace',
        title: 'Centres d\'intérêt',
        currentPage: 'hobbies'
      },
      {
        icon: 'fa-envelope',
        title: 'Contact',
        currentPage: 'links'
      }]     
    }
  }
}
</script>
