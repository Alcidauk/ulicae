<template>
  <v-container v-if="selectedPage === currentPage">
    <h1 class="page-title">Compétences</h1>

    <v-layout column>
      <h2 class="mt-5">Technologies</h2>

    <v-layout row align-center class="ma-5">
      <Knowledge v-for="(knowledge, index) in knowledges" 
      :key=index
      :knowledge=knowledge
      v-on:update:currentKnowledge="handleIt"/>
    </v-layout>

    <v-layout align-center>
      <v-card v-if=currentKnowledge class="ma-2" color="teal lighten-4" width="100%">
        <v-card-title class="card-title">
          <v-avatar class="elevation-5 mr-2 knowledge-avatar">
            <v-img contain :src="require(`@/assets/${currentKnowledge.imgsrc}`)"/>
          </v-avatar>
          <h3>{{currentKnowledge.title}}</h3>
        </v-card-title>
        <v-card-text v-html="compiledMarkdown(currentKnowledge.content)"/>
      </v-card>

      <v-card v-if=!currentKnowledge class="ma-2" color="teal lighten-4" width="100%">Cliquez sur l'une des icônes.</v-card>
    </v-layout>

    </v-layout>

  </v-container>
</template>

<script>
import Knowledge from './knowledge'
import marked from 'marked'

export default {
  name: 'KnowledgeCategory',
  props: {
    currentPage: String,
    selectedPage: String
  },
  methods: {
    handleIt: function (item) {
      this.currentKnowledge = item
    },
    compiledMarkdown: function (item) {
      return marked(item, { sanitize: true })
    }
  },
  components: {
    Knowledge
  },
   data () {
    return {
      currentKnowledge: null,
      knowledges: [
        {
          title: "LaTeX",
          content: "Bonnes connaissances usuelles de ce langage.\n" +
           "+ Rédaction de rapports (stage, cahier de spécifications);\n" +
           "+ Utilisation de la classe permettant de générer des diaporamas: Beamer.",
          imgsrc: "latex.png"
        },
        {
          title: "Java",
          content: "Développement de nombreux projets au cours d'études, de stages et d'emploi.\n\n" +
          "+ Connaissances autour des versions 6 à 8;\n" +
          "+ Utilisation de nombreuses librairies (Guava, Commons IO/Utils, Lombok, etc.);\n" +
          "+ Rédaction de tests unitaires avec JUnit, de tests d'intégration pour les API REST avec RestAssured;\n" +
          "+ Maîtrise de principaux gestionnaires de dépendences Maven et Gradle.",
          imgsrc: "java.png"
        },
        {
          title: "Java EE",
          content: "Utilisation de nombreux composants de Java EE dans plusieurs projets en entreprise.\n" +
          "+ Maîtrise de plusieurs serveurs Java EE (Tomcat, JBoss, Glassfish);\n" +
          "+ Maîtrise de la notion d'injection de dépendences et des EJBs;\n" +
          "+ Utilisation de l'ORM intégré à Java EE: JPA.",
          imgsrc: "javaee.png"
        },
        {
          title: "Spring",
          content: "Bonne maîtrise de nombreux pans de ce framework.\n" +
          "+ Utilisation de la partie de lien avec les bases de données (Spring Data);\n" +
          "+ Utilisation de Spring Boot;\n" +
          "+ Connaissances autour des fonctionnalités de sécurisation des applicatifs (Spring Security);\n" +
          "+ Maîtrise de la génération d'un API Rest à l'aide de Spring.",
          imgsrc: "spring.png"
        },
        {
          title: "Mongo DB",
          content: "Connaîssances globales sur ce Système de Gestion de Base de Données.\n" +
          "+ Utilisation de Morphia, librairie Java pour Mongo;\n" +
          "+ Connaissances dans l'utilisation de la ligne de commandes de Mongo.",
          imgsrc: "mongo.png"
        },
        {
          title: "Nuxeo",
          content: "Très bonne connaissance de cette Gestion Électronique de Documents.\n" +
          "+ Maîtrise de la notion de stockage sous forme de documents (types, schémas, descrption de schémas en XSD);\n" +
          "+ Compréhension du système de contribution à une application Nuxeo (composants OSGi, contribution XML, services);\n" +
          "+ Connaissances autour de l'interface graphique proposée par Nuxeo et développée en JSF.",
          imgsrc: "nuxeo.png"
        },
        {
          title: "Vaadin",
          content: "Bonne maîtrise du développement d'une application autour de ce Framework.\n" +
          "+ Connaissances autour du système de widgets proposés par Vaadin;\n" +
          "+ Utilisation du pattern recommandé par ce framework: MVVP (Modèle-Vue Vue-Présentation).",
          imgsrc: "vaadin.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-title {
  background-color: #4DB6AC;
}
.knowledge-avatar {
  background-color: #ffffff;
}
</style>
