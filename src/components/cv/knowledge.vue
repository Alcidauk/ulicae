<template>
  <v-btn :ripple="{ class: 'secondary--text' }" fab color="primary" large class="knowledge-image" @click.prevent="$emit('update:currentKnowledge', knowledge)">
      <img v-if="knowledge.imgsrc" :src="require(`@/assets/${knowledge.imgsrc}`)"/>
      <v-icon v-if="knowledge.icon" large color="secondary">{{knowledge.icon}}</v-icon>
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
