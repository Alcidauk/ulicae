<template>
  <v-layout fill-height secondary lighten-1>
    <v-btn
      color="#320b86"
      v-if="!$vuetify.breakpoint.lgAndUp"
      fab
      left
      @click.stop="permanent = !permanent"
    >
      <v-icon color="secondary" v-html="permanent ? 'fa-angle-left' : 'fa-angle-right'" />
    </v-btn>
    <v-navigation-drawer
      class="violet-dark-background"
      :mini-variant="miniVariant"
      :permanent="permanent"
      clipped
      fixed
      app
    >

      <v-list>
        <v-list-tile class="mb-4">
            <v-list-tile-action @click.stop="miniVariant = !miniVariant">
              <v-icon color="secondary" large v-html="miniVariant ? 'fa-angle-right' : 'fa-angle-left'" />
            </v-list-tile-action>
        </v-list-tile>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-tile-action>
              <v-icon color="secondary" v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="secondary--text text--lighten-2">
                <h3 class="secondary--text" v-text="item.title" />
              </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-container>
      <v-layout grid-list-md row wrap>
        <v-layout row xs6 class="pr-2 align-end">
          <h1 class="mb-5">CineLog</h1>
        </v-layout>
        <v-layout column xs6 class="align-end">
          <a href="https://f-droid.org/packages/com.ulicae.cinelog/" target="blank">
            <img
              src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
              alt="Get it on F-Droid"
              height="60"
            />
          </a>
        </v-layout>
      </v-layout>

      <v-card class="pa-5">
        <router-view xs12></router-view>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "Cinelog",
  data() {
    return {
      miniVariant: false,
      permanent: false,
      fixed: false,
      items: [
        {
          icon: "fa-home",
          title: "CineLog",
          link: "/cinelog/home"
        },
        {
          icon: "fa-question-circle",
          title: "FAQ",
          link: "/cinelog/questions"
        },
        {
          icon: "fa-link",
          title: "Liens utiles",
          link: "/cinelog/links"
        },
        {
          icon: "fa-eye",
          title: "Captures d'écran",
          link: "/cinelog/screenshots"
        }
      ]
    };
  }
};
</script>

<style scoped>
.violet-dark-background {
  background-color: #320b86;
}
.violet-light a {
  color: #ab47bc;
  text-decoration: none;
}
</style>

