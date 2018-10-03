<template>
  <v-btn fab large class="knowledge-image" @click.prevent="$emit('update:currentKnowledge', knowledge)">
      <img :src="require(`@/assets/${knowledge.imgsrc}`)"/>
  </v-btn>
</template>

<script>
export default {
  name: 'Knowledge',
  props: {
    knowledge: Object
  }
}
</script>

<style scoped>
.knowledge-image {
  overflow: hidden;
}
</style>
