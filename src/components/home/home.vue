  <template>
  <div class="d-flex flex-column fill-height">
    <v-row class="justify-center align-center primary lighten-1 pt-3">
      <v-container text-center>
        <div class="toolbar-title pb-3" align="center" justify="center">
          <div>
            <span class="text-h3 text-md-h1 title-font secondary--text"
              >Ulicae</span
            >
            <span class="text-h5 text-md-h3 extension-font secondary--text"
              >.com</span
            >
          </div>
          <span
            class="text-h5 text-md-h3 subtitle-font primary--text text--lighten-4 text-lg-right"
          >
            Pierre Rognon
          </span>
        </div>
        <div
          class="mt-1 mb-5 secondary--text text-subtitle-1 text-md-h6"
          align="center"
          justify="center"
        >
          Bienvenue sur mon site. Développeur depuis plusieurs années, vous
          pourrez trouver quelques ressources personnelles et professionnelles.
        </div>

        <v-row>
          <v-col
            class="link-buttons"
            v-bind:class="{ 'small-link-buttons': $vuetify.breakpoint.smAndDown }"
            v-for="n in 3"
            :key="n"
          >
            <v-btn :to="{ path: tabs[n - 1].path }" fab color="secondary">
              <v-flex>
                <v-icon 
                  :x-large="!$vuetify.breakpoint.mobile" 
                  :large="$vuetify.breakpoint.smAndUp" 
                color="primary">
                {{ tabs[n - 1].icon }}
                </v-icon>
              </v-flex>
            </v-btn>
            <v-flex class="mt-2 label-text secondary--text text-h6">{{ tabs[n - 1].name }}</v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-row class="justify-center align-center cinelog_primary lighten-1 pt-3">
      <v-container text-center>
        <div class="toolbar-title pb-3" align="center" justify="center">
          <div>
            <span
              class="text-h3 text-md-h1 title-font cinelog_secondary--text text--lighten-3"
            >
              Cinelog
            </span>
          </div>
        </div>
        <div
          class="mb-5 cinelog_secondary--text text--lighten-3 text-subtitle-1 text-md-h6"
        >
          CineLog est une application mobile permettant de sauvegarder et de
          noter les films et séries que vous regardez.
        </div>


        <v-row>
          <v-col
            class="link-buttons"
            v-bind:class="{ 'small-link-buttons': $vuetify.breakpoint.smAndDown }"
          >
           <v-btn depressed fab :to="{ path: '/cinelog/home' }">
            <v-img
              :width="$vuetify.breakpoint.smAndDown ? 78 : 128"
              :height="$vuetify.breakpoint.smAndDown ? 78 : 128"
              :src="require(`@/assets/cinelog_big.png`)"
            />
           </v-btn>
            <v-flex class="mt-2 label-text cinelog_secondary--text text--lighten-3 text-h6">CineLog</v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>

  <script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      tabs: [
        {
          path: "/cv",
          icon: "fa-address-card",
          name: "CV",
        },
        {
          path: "/notes",
          icon: "fa-clipboard",
          name: "Notes",
        },        
        {
          path: "/portfolio",
          icon: "fa-images",
          name: "Portfolio",
        },
      ],
    };
  },
  computed: {
    cols() {
      const { lg, sm } = this.$vuetify.breakpoint;
      return lg ? [3, 9] : sm ? [9, 3] : [6, 6];
    },
  },
};
</script>

<style scoped>
.fill-height {
  height: 100%;
}

a {
  text-decoration: none;
}

.container-fill {
  padding: 0px;
  height: 100%;
  width: 100%;
}
.toolbar-title {
  margin-right: 25px;
  line-height: 0.9;
}

.title-font {
  font-family: "library" !important;
  font-weight: 600;
}

.extension-font {
  font-family: "library" !important;
}

.subtitle-font {
  font-family: "library" !important;
}

.link-buttons > .v-btn {
  height: 128px;
  width: 128px;
}

.small-link-buttons > .v-btn {
  height: 78px;
  width: 78px;
}
</style>

