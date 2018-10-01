<template>
  <v-btn fab large class="knowledge-image" @click.prevent="$emit('update:knowledge', knowledgeName)">
      <img :src="require(`@/assets/${imgsrc}`)"/>
  </v-btn>
</template>

<script>
export default {
  name: 'Knowledge',
  props: {
    imgsrc: String,
    knowledgeName: String
  }
}
</script>

<style scoped>
.knowledge-image {
  overflow: hidden;
}
</style>
