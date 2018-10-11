<template>
  <v-container>
    <h2>{{name}}</h2>
    <v-flex xs12 sm6 offset-sm3>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>

            <v-flex
              v-if="selected === null"
              v-for="(item,i) in images"
              :key="i"
              xs4>
              <v-avatar size=128 @click.stop="selected = item">
                <v-img
                  :src="require(`@/assets/portfolio/${code}/${item}`)"
                  aspect-ratio="1">
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
            </v-flex>

            <v-container class="text-lg-right" v-if="selected">
              <v-btn flat @click.stop="selected = null"><v-icon>mdi-close</v-icon></v-btn>
              <v-img
                  :src="require(`@/assets/portfolio/${code}/${selected}`)"
                  class="grey lighten-2"/>
            </v-container>
          </v-layout>
        </v-container>
    </v-flex>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PortfolioCaroussel',
  created () {
    axios
      .get(process.env.VUE_APP_API_URL + `/portfolios/` + this.$route.params.name)
      .then(response => {
        this.name = response.data.name
        this.code = response.data.code
        this.images = response.data.images
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data () {
    return { 
      name: null,
      code: null,
      selected: null,
      images: []
    }
  }
}
</script>

<style scoped>
</style>

