<template>
  <v-container>
    <h2>{{name}}</h2>

    <v-container grid-list-md>
      <v-card color="primary lighten-1" class="pa-5">
        <v-layout justify-center row wrap>
          <viewer 
            :images="images"
            class="viewer" 
            ref="viewer">
              <img
                width=128
                height=128
                class="ma-2 portfolio-avatar"
                v-for="(item,i) in images"
                :key="i" 
                :src="require(`@/assets/portfolio/${code}/${item}_light.jpg`)"/>
          </viewer>
        
        </v-layout>
      </v-card>
    </v-container>

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
.portfolio-avatar {
  border-radius: 50%;
}
</style>

