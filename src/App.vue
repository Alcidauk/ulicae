<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <Cv/>
    </v-content>
  </v-app>
</template>

<script>
import Cv from './components/cv'
import Toolbar from './components/toolbar'

export default {
  name: 'App',
  components: {
    Cv,
    Toolbar
  },
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
    }
  }
}
</script>
