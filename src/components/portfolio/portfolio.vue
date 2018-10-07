<template>
<v-layout wrap fill-height>
  <v-img :src="require(`@/assets/home.jpg`)">
    <v-card class="ma-5">
       <v-flex align-center justify-center layout>
       <v-card-title><h1>Bienvenue</h1></v-card-title>
       </v-flex>
       <v-flex justify-center layout>
        <v-btn :to="{path:'/cv'}" fab large color="light-green accent-2">
          <v-icon contain large color="teal lighten-1">mdi-notebook</v-icon>
        </v-btn>
       </v-flex>
      <v-flex justify-center layout>
        <h3>Mon CV ici</h3>
      </v-flex>
    </v-card>
  </v-img>
</v-layout>
</template>

<script>
export default {
  name: 'Portfolio ',
  props: {
    msg: String
  },
  data () {
    return { 
    }
  }
}
</script>

<style scoped>
</style>

