<template>
  <v-btn :ripple="{ class: 'lime--text' }" fab color="lime accent-1" large class="knowledge-image" @click.prevent="$emit('update:currentKnowledge', knowledge)">
      <img v-if="knowledge.imgsrc" :src="require(`@/assets/${knowledge.imgsrc}`)"/>
      <v-icon v-if="knowledge.icon" large color="teal lighten-1">{{knowledge.icon}}</v-icon>
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
