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
                v-for="(item) in numbers"
                :key="item" 
                :src="require(`@/assets/portfolio/besancon/${item}_light.jpg`)"/>
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
  data () {
    return { 
      numbers: [ 1, 2, 3, 4, 5, 6 ],
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

