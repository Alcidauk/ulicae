<template>
  <v-layout v-if="selectedPage === currentPage" row>

            <v-container>
                <h1 class="mb-2 page-title">Centres d'intérêts</h1>
                <v-layout column>
                  <HobbyStep 
                    title="Flag football" 
                    description="pratique en compétition amateur lors de la saison 2017-2018"
                    subDescription="Crédits photographies: Pixeyes / footballamericain.com" 
                    imgsrc="flag.jpg"
                    imgposition="left 0% top 10%"/>
                  <HobbyStep 
                    title="Café" 
                    description="intérêt pour les techniques de barista" 
                    subDescription="Crédits photographiques: eliasfalla / pixabay.com" 
                    imgsrc="coffee.jpg"
                    imgposition="left 0% top 30%"/>
                  <HobbyStep 
                    title="Jardinage" 
                    description="pratique du jardinage en temps libre" 
                    subDescription="Crédits photographiques: ulleo / pixabay.com" 
                    imgsrc="jardin.jpg"
                    imgposition="left 0% top 30%"/>
                </v-layout>
            </v-container>

  </v-layout>
</template>

<script>
import HobbyStep from './hobby-step'

export default {
  name: 'HobbyCategory',
  props: {
    currentPage: String,
    selectedPage: String
  },
  components: {
    HobbyStep
  }
}
</script>
