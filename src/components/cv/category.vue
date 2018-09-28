<template>
  <v-layout column align-center>
    <div class="container-fluid" v-if="selectedPage === currentPage">
    <h3 class="page-title">{{selectedPage}}</h3>
    {{currentPage}} section
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'Category',
  props: {
    currentPage: String,
    selectedPage: String
  },
   data () {
    return {
    }
  }
}
</script>
