<template>
    <v-app-bar app fixed :clipped-left="true" color="primary" elevate-on-scroll>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile" class="secondary--text" @click="$emit('toggle-navigate')">
        <v-icon left class="secondary--text ml-3">fa-bars</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="toolbar-title">
        <span class="title-font secondary--text">{{ title }}</span>
        <span class="extension-font secondary--text">.com</span>

        <div class="subtitle-font primary--text text--lighten-4 text-lg-right">
          Pierre Rognon
        </div>
      </v-toolbar-title>

      <v-toolbar-items justify-space-around  v-if="!$vuetify.breakpoint.mobile">
        <v-btn :to="{ path: '/home' }" depressed class="primary accent-2 secondary--text">
          <v-icon left color="accent-1">fa-home</v-icon>
          Accueil
        </v-btn>
        <v-btn :to="{ path: '/cv' }" depressed color="primary accent-2 secondary--text"
          ><v-icon left color="accent-1">fa-address-card</v-icon
          >CV</v-btn
        >
        <v-btn :to="{ path: '/notes' }" depressed color="primary accent-2 secondary--text"
          ><v-icon left color="accent-1">fa-clipboard</v-icon
          >Notes</v-btn
        >
        <v-btn :to="{ path: '/portfolio' }" depressed color="primary accent-2 secondary--text"
          ><v-icon left color="accent-1">fa-images</v-icon
          >Albums</v-btn
        >
        <v-btn
          :to="{ path: '/cinelog/home' }"
          depressed
          color="#320b86"
          class="secondary--text"
        >
          <v-img
            height="30"
            width="30"
            class="mr-3"
            :src="require(`@/assets/cinelog.png`)"
          />
          CineLog
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    msg: String,
  },
  data: () => ({
    title: "Ulicae",
  }),
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title {
  margin-right: 25px;
  line-height: 0.9;
}

.title-font {
  font-family: "library";
  font-size: 1.4em;
}

.extension-font {
  font-family: "library";
  font-size: 0.8em;
}

.subtitle-font {
  font-family: "library";
  font-size: 1em;
}
</style>
