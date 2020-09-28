  <template>
  <v-container fluid>
    <v-layout row>
      <v-flex primary lighten-1 class="pt-3 pb-3">
        <div class="toolbar-title pb-3" align="center" justify="center">
          <div>
            <span class="title-font secondary--text">Ulicae</span>
            <span class="extension-font secondary--text">.com</span>
          </div>
          <span
            class="subtitle-font primary--text text--lighten-4 text-lg-right"
          >
            Pierre Rognon
          </span>
        </div>
        <div class="mt-1 mb-5 secondary--text" align="center" justify="center">
          Bienvenue sur mon site. Développeur depuis quelques années, vous
          pourrez trouver quelques ressources personnelles et professionnelles.
        </div>

        <v-container text-md-center>
          <v-layout row>
            <v-flex xs4 class="link-buttons">
              <v-btn :to="{ path: '/cv' }" fab color="secondary">
                <v-flex>
                  <v-icon x-large color="primary">fa-address-card</v-icon>
                </v-flex>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="link-buttons">
              <v-btn :to="{ path: '/notes' }" fab color="secondary">
                <v-icon x-large color="primary">fa-clipboard</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs4 class="link-buttons">
              <v-btn :to="{ path: '/portfolio' }" fab color="secondary">
                <v-icon x-large color="primary">fa-images</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4 class="label-text secondary--text">CV</v-flex>
            <v-flex xs4 class="label-text secondary--text">Notes</v-flex>
            <v-flex xs4 class="label-text secondary--text">Portfolio</v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex cinelog_primary class="pt-3 pb-3">
        <div class="toolbar-title pb-3" align="center" justify="center">
          <div>
            <span class="title-font cinelog_secondary--text text--lighten-1">
              Cinelog
            </span>
          </div>
        </div>
        <div
          class="mb-5 cinelog_secondary--text text--lighten-3"
          align="center"
          justify="center"
        >
          CineLog est une application mobile permettant de sauvegarder et de
          noter les films et séries que vous regardez.
        </div>

        <div class="link-buttons mt-1 mb-5" align="center" justify="center">
          <a href="/cinelog/home">
            <v-img
              width="128"
              height="128"
              :src="require(`@/assets/cinelog_big.png`)"
            />
            <span class="label-text cinelog_secondary--text text--lighten-3"
              >CineLog</span
            >
          </a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

  <script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
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
  font-family: "library";
  font-size: 7rem;
  font-weight: 600;
}

.extension-font {
  font-family: "library";
  font-size: 2rem;
}

.subtitle-font {
  font-family: "library";
  font-size: 2.5rem;
}

.link-buttons > .v-btn {
  height: 128px;
  width: 128px;
}
</style>

