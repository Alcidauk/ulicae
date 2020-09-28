<template>
  <v-btn :ripple="{ class: 'secondary--text' }" fab depressed large 
    class="knowledge-image mt-1 ml-1 mb-1 mr-3 avatar-border" 
    @click.prevent="$emit('update:currentKnowledge', knowledge)">
      <img v-if="knowledge.imgsrc" :src="require(`@/assets/${knowledge.imgsrc}`)" width="60" height="60"/>
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
