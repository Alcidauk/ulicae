<template>
  <v-card class="ma-2">
     <v-img
        :src="require(`@/assets/${imgsrc}`)"
        aspect-ratio="5" :position="imgposition"/>

      <v-card-title primary-title>
        <div>
          <h3 class="page-title">{{title}}</h3>
          <div class="primary--text subheading">{{description}}</div>
          <div class="pt-3 primary--text text--lighten-1 caption">{{subDescription}}</div>
        </div>
      </v-card-title>
  </v-card>
</template>

<script>

export default {
  name: 'HobbyStep',
  props: {
    title: String,
    imgsrc: String,
    description: String,
    subDescription: String,
    imgposition: String
  }
}
</script>

