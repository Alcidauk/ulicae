<template>
  <v-layout v-if="selectedPage === currentPage" row>

            <v-container>
                <h1 class="mb-2 page-title">Centres d'intérêts</h1>
                <v-layout column>
                  <HobbyStep 
                    title="Développement mobile de l'application Cinélog" 
                    description="Développement fonctionnel et graphique d'une application de revue de films et séries" 
                    subDescription="Crédits: Kerstin Maur" 
                    imgsrc="cinelog_large.png"
                    imgposition="left 0% top 50%"/>
                  <HobbyStep 
                    title="Supermarché coopératif" 
                    description="implication dans les groupes d'approvisionnement aux 400 Coop (Paris 20ème)"
                    subDescription="Crédits photographies: Arnaud CAILLOU / L’Oeil Témoin" 
                    imgsrc="coop.jpg"
                    imgposition="left 0% top 10%"/>
                  <HobbyStep 
                    title="Café" 
                    description="intérêt pour les techniques de barista" 
                    subDescription="Crédits photographiques: eliasfalla / pixabay.com" 
                    imgsrc="coffee.jpg"
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
