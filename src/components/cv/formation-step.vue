<template>
  <v-card class="pa-2 ma-2">
    <v-container grid-list-xl>
      <v-layout class="align-center">
        <v-avatar size="96" class="avatar-border">
              <v-img contain :src="require(`@/assets/${imgsrc}`)" alt="title"/>
        </v-avatar>
        <v-flex>
          <div>
            <h3 class="page-title">{{title}}</h3>
            <div class="primary--text">{{dates}}</div>
            <div class="primary--text">{{place}}</div>
            <div class="subheading">{{diploma}}</div>
            <div>{{subDiploma}}</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: 'FormationStep',
  props: {
    title: String,
    imgsrc: String,
    dates: String,
    place: String,
    diploma: String,
    subDiploma: String
  }
}
</script>

<style scoped>
.avatar-border {
  border: 2px solid #edb976;
}

.knowledge-image {
  overflow: hidden;
}
</style>
