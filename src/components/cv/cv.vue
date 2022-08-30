<template>
  <v-container>

    <v-btn
      color="primary lighten-1"
      v-if="$vuetify.breakpoint.mobile"
      fab
      left
      @click.stop="permanent = !permanent">
      <v-icon color="secondary" v-html="permanent ? 'fa-angle-left' : 'fa-angle-right'" />
    </v-btn>

    <v-navigation-drawer
      class="primary lighten-1"
      :mini-variant="$vuetify.breakpoint.mdAndDown || miniVariant"
      :permanent="permanent"
      clipped
      fixed
      app>

      <v-list-item class="mb-4" v-if="!$vuetify.breakpoint.mobile">
          <v-list-item-action @click.stop="miniVariant = !miniVariant">
            <v-icon color="secondary" large v-html="miniVariant ? 'fa-angle-right' : 'fa-angle-left'" />
          </v-list-item-action>
      </v-list-item>

      <v-list>
        <v-list-item
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="selectedPage = item.currentPage">
          <v-list-item-action>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content align="end">
            <v-list-item-title class="secondary--text text--lighten-1 text-subtitle-2" v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          style="background-color: #D32F2F;"
          href="CV_website.pdf" 
          target="#"
          key="cv">
          <v-list-item-action>
            <v-icon class="secondary--text">fa-file-pdf</v-icon>
          </v-list-item-action>
          <v-list-item-content align="end">
            <v-list-item-title class="secondary--text text--lighten-1 text-subtitle-2">CV au format PDF</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid>
    <FormationCategory currentPage="formation" :selectedPage="selectedPage"/>
    <ExperienceCategory currentPage="experiences" :selectedPage="selectedPage"/>
    <KnowledgeCategory currentPage="knowledges" :selectedPage="selectedPage"/>
    <HobbyCategory currentPage="hobbies" :selectedPage="selectedPage"/>
    <!-- <LinkCategory currentPage="links" :selectedPage="selectedPage"/> -->
    </v-container>

  </v-container>
</template>

<script>
import FormationCategory from './formation-category'
import KnowledgeCategory from './knowledge-category'
import ExperienceCategory from './experience-category'
import HobbyCategory from './hobby-category'

export default {
  name: 'Cv',
  props: {
    msg: String
  },
  components: {
    FormationCategory,
    KnowledgeCategory,
    ExperienceCategory,
    HobbyCategory
  },
  data () {
    return {
      permanent: false,
      miniVariant: false,
      selectedPage: 'experiences',
      drawer: null,
      items: [
      {
        icon: 'fa-briefcase',
        title: 'Expériences',
        currentPage: 'experiences'
      },
        {
        icon: 'fa-chalkboard-teacher',
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
      // {
      //   icon: 'fa-envelope',
      //   title: 'Contact',
      //   currentPage: 'links'
      // }
      ]     
    }
  },
}
</script>
