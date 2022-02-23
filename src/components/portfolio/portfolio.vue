<template>
<v-container fluid fill-height child-flex secondary lighten-1>
  <v-card class="ma-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex align-center justify-center layout>
          <h1>Portfolio</h1>
        </v-flex>

          <v-container grid-list-md>
              <v-layout justify-center row wrap class="mb-2">
              <router-link to="/portfolio/besancon">
                  <v-avatar contain size=64>
                      <v-img
                        :src="require(`@/assets/portfolio/besancon/1.jpg`)"
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
                </router-link>

              </v-layout>
          </v-container>
          
          <router-view xs12></router-view>
      </v-layout>
    </v-container>
  </v-card>
</v-container>
</template>

<script>

export default {
  name: 'Portfolio',
}
</script>

<style scoped>
</style>

