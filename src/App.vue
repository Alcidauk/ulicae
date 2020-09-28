<template>
  <v-app>
    <Toolbar
      v-if="
        $router.currentRoute.path !== '/' &&
        $router.currentRoute.path !== '/home'
      "
      v-on:toggle-navigate="updateNavigate()"
    />
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer v-model="navigate" absolute temporary color="primary">
      <v-list nav dense>
        <v-list-item-group active-class="primary accent-4">

          <v-list-item :to="{ path: '/home' }">
            <v-list-item-icon>
              <v-icon class="secondary--text">fa-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="secondary--text">Accueil</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/cv' }">
            <v-list-item-icon depressed>
              <v-icon class="secondary--text">fa-address-card</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="secondary--text">CV</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/notes' }">
            <v-list-item-icon depressed>
              <v-icon class="secondary--text">fa-clipboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="secondary--text">Notes</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/portfolio' }">
            <v-list-item-icon depressed>
              <v-icon class="secondary--text">fa-images</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="secondary--text">Albums</v-list-item-title>
          </v-list-item>

          <v-list-item class="cinelog-item">
            <v-list-item-icon
              :to="{ path: '/cinelog/home' }"
              depressed>
              <v-img
                height="24"
                width="24"
                :src="require(`@/assets/cinelog.png`)"
              />
            </v-list-item-icon>
            <v-list-item-title class="secondary--text">CineLog</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Cv from "./components/cv/cv";
import Toolbar from "./components/toolbar";

export default {
  name: "App",
  components: {
    Cv,
    Toolbar,
  },
  methods: {
    updateNavigate: function () {
      this.navigate = !this.navigate;
    },
  },
  data() {
    return {
      navigate: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire",
        },
      ],
    };
  },
};
</script>

<style>
@font-face {
  font-family: "library";
  src: url("./assets/fonts/Library 3 am.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "sawarabi";
  src: url("./assets/fonts/Farro-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: sawarabi, Arial, sans-serif;
}

.cinelog-item {
  background-color: #320b86;
}
</style>
