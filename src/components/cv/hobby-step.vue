<template>
  <v-card class="ma-2">
     <v-img
        :src="require(`@/assets/${imgsrc}`)"
        aspect-ratio="5" :position="imgposition"/>

      <v-card-title primary-title class="card-title">
        <div>
          <div class="page-title"
          :class="{ 'text-subtitle-2': $vuetify.breakpoint.mobile, 'text-h5': !$vuetify.breakpoint.mobile }">{{title}}</div>
          <div class="primary--text subheading"
          :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{description}}</div>
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

<style scoped>
.card-title {
  word-break: normal;
}
</style>