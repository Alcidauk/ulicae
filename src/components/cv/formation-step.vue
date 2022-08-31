<template>
  <v-card class="pa-2 ma-2">
    <v-container grid-list-xl>
      <v-layout class="align-center">
        <v-avatar :size="$vuetify.breakpoint.mobile ? 48 : 96" class="avatar-border mr-5 ml-5">
              <v-img contain :src="require(`@/assets/${imgsrc}`)" alt="title"/>
        </v-avatar>
        <v-flex>
          <div>
            <div class="page-title"
            :class="{ 'text-subtitle-2': $vuetify.breakpoint.mobile, 'text-h6': !$vuetify.breakpoint.mobile }">
              {{title}}
            </div>
            <div class="primary--text"
            :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{dates}}</div>
            <div class="primary--text"
            :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{place}}</div>
            <div class="subheading"
            :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{diploma}}</div>
            <div :class="{ 'text-caption': $vuetify.breakpoint.mobile }">{{subDiploma}}</div>
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
