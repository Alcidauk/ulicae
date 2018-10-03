<template>
  <v-layout v-if="selectedPage === currentPage" row>

            <v-container>
                <h1 class="mb-2 page-title">Formations</h1>
                <v-layout column>
                  <FormationStep 
                    title="Université de Technologies de Belfort-Montbéliard" 
                    place="Belfort (France, Territoire de Belfort)"
                    dates="2012-2015" 
                    diploma="Ingénieur diplômé, spécialité informatique" 
                    subDiploma="double cursus Ingénierie des Logiciels et de la Connaissance (ILC) et Réseaux et Télécommunications (R&T)"
                    imgsrc="utbm.jpg"/>
                  <FormationStep 
                    title="Institut Universitaire Technologique" 
                    place="Belfort (France, Territoire de Belfort)"
                    dates="2010-2012" 
                    diploma="Diplôme Universitaire Technologique, spécialité informatique" 
                    subDiploma=""
                    imgsrc="iut.png"/>
                  <FormationStep 
                    title="Lycée Général Victor Hugo"
                    place="Besançon (France, Doubs)"
                    dates="2007-2010" 
                    diploma="Baccalauréat scientifique, mention bien" 
                    subDiploma="spécialité Physique-Chimie"
                    imgsrc="lvh.png"/>
                </v-layout>

              <h1 class="mt-5 page-title">Certifications</h1>

              <h3 class="mt-2 page-title">Certifications linguistiques</h3>
              <v-layout column>
                <FormationStep 
                  title="Geothe Institut" 
                  place=""
                  dates="2014" 
                  diploma="Geothe-Zertifikat B1 (Certificat validant la maîtrise de la langue allemande) " 
                  subDiploma="mention Très Bien"
                  imgsrc="goethe.png"/>
                <FormationStep 
                  title="Business Language Testing Service" 
                  place=""
                  dates="2013" 
                  diploma="Certification de niveau C1 (Certification validant la maîtrise de l'anglais dans un contexte professionnel)" 
                  subDiploma="score de 75 sur 100, certifiant le niveau C1"
                  imgsrc="bulats.png"/>
              </v-layout>

              <h3 class="mt-2 page-title">Certifications techniques</h3>
              <v-layout column>
                <FormationStep 
                  title="Cisco Certified Network Associate"
                  place=""
                  dates="2013" 
                  diploma="Cisco Certified Network Associate 1 et 3: réseaux et routage" 
                  subDiploma=""
                  imgsrc="cisco.jpg"/>
                <FormationStep 
                  title="Cisco Certified Network Associate"
                  place=""
                  dates="2014" 
                  diploma="Cisco Certified Network Associate 2: switches" 
                  subDiploma=""
                  imgsrc="cisco.jpg"/>
              </v-layout>
            </v-container>

  </v-layout>
</template>

<script>
import FormationStep from './formation-step'

export default {
  name: 'FormationCategory',
  props: {
    currentPage: String,
    selectedPage: String
  },
  components: {
    FormationStep
  }
}
</script>
