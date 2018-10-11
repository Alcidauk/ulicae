<template>
<v-container fluid>
  <v-card class="ma-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex align-center justify-center layout>
          <h1>Portfolio</h1>
        </v-flex>

          <v-container grid-list-md>
            <v-layout justify-center row wrap class="mb-2">

              <v-flex v-for="(item,i) in portfolios" :key=i>
                <v-avatar contain size=64>
                    <v-img
                      :src="require(`@/assets/portfolio/${item.code}/1.jpg`)"
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
                  <v-layout>
                    <router-link :to="'/portfolio/' + item.code">{{item.name}}</router-link>
                  </v-layout>
              </v-flex>

            </v-layout>
          </v-container>
          
          <router-view xs12></router-view>
      </v-layout>
    </v-container>
  </v-card>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Portfolio',
  created () {
    axios
      .get(process.env.VUE_APP_API_URL + `/portfolios`)
      .then(response => {
        this.portfolios = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data () {
    return { 
      portfolios: []
    }
  }
}
</script>

<style scoped>
</style>

