<template>
  <v-container>
    <v-btn
      color="#320b86"
      v-if="$vuetify.breakpoint.mobile"
      fab
      left
      @click.stop="permanent = !permanent"
    >
      <v-icon color="secondary">
        {{ permanent ? 'fa-angle-left' : 'fa-angle-right' }}
      </v-icon>
    </v-btn>
    <v-navigation-drawer
      class="violet-dark-background"
      :mini-variant="$vuetify.breakpoint.mdAndDown || miniVariant"
      :permanent="permanent"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item class="mb-4" v-if="!$vuetify.breakpoint.mobile">
            <v-list-item-action @click.stop="miniVariant = !miniVariant">
              <v-icon large color="secondary">
                {{ miniVariant ? 'fa-angle-right' : 'fa-angle-left' }}
              </v-icon>
            </v-list-item-action>
        </v-list-item>
        
        <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-action>
              <v-icon color="secondary">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content align="end">
              <v-list-item-title class="secondary--text text--lighten-1 text-subtitle-2">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid>
      <div class="d-flex ml-3">
        <v-row xs6 class="align-end">
          <h1 class="mb-5">CineLog</h1>
        </v-row>
        <v-column xs6 class="align-end">
          <a href="https://f-droid.org/packages/com.ulicae.cinelog/" target="blank">
            <img
              src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
              alt="Get it on F-Droid"
              height="60"
            />
          </a>
        </v-column>
      </div>

      <v-card class="pa-5">
        <router-view xs12></router-view>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Cinelog",
  data() {
    return {
      miniVariant: false,
      permanent: false,
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

