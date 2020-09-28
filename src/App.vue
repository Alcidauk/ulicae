<template>
  <v-app>
    <Toolbar v-if="$router.currentRoute.path !== '/' && $router.currentRoute.path !== '/home'"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Cv from './components/cv/cv'
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

<style>
@font-face {
  font-family: 'library';
  src: url('./assets/fonts/Library 3 am.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'sawarabi';
  src: url('./assets/fonts/Farro-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

#app {
	font-family: sawarabi, Arial, sans-serif;
}

</style>
