<template>
  <div v-html="desc">
  </div>
</template>

<script>
  export default {
    name: 'CinelogPart',
    data () {
      return {
        desc: null,
      }
    },
    mounted () {
      this.desc = require('../../assets/cinelog-' + this.$route.params.part + '.md')
    },
    watch: {
      $route(_to, _from) {
        this.desc = require('../../assets/cinelog-' + this.$route.params.part + '.md')
      }
    }
  }
</script>

<style scoped>
.violet {
  color: #971796;
}
</style>

