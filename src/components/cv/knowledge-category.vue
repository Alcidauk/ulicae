<template>
  <v-container v-if="selectedPage === currentPage">
    <h1 class="page-title">Compétences</h1>

    <KnowledgePart
      :knowledges=proKnowledges
      title="Professionnelles"/>
    <KnowledgePart
      :knowledges=techKnowledges
      title="Technologiques"/>

  </v-container>
</template>

<script>
import KnowledgePart from './knowledge-part'
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
    KnowledgePart
  },
   data () {
    return {
      currentKnowledge: null,
      techKnowledges: [
        {
          title: "Linux",
          content: "Très bonne aisance avec les environnements Linux.\n" +
          "+ Utilisation d'une distribution Debian de manière personnelle;\n" +
          "+ Travail avec des distributions dérivées d'Ubuntu dans le cadre professionnel;\n" +
          "+ Connaissance des distributions RedHat et dérivées (CentOs, Fedora);\n" +
          "+ Rudiments dans l'utilisation d'une distribution ArchLinux.",
          imgsrc: "linux.png"
        },
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
        },
        {
          title: "Docker",
          content: "Aisance dans l'utilisation de cette technologie.\n" +
          "+ Utilisation dans le cadre d'un environnement de développement (SKINsoft);\n" +
          "+ Utilisation sur un serveur personnel en production;\n" +
          "+ Maîtrise de l'utilisation de conteneurs existants, de la création de nouveaux conteneurs, de la création d'une image;\n" +
          "+ Maîtrise de la surcouche Docker Compose.",
          imgsrc: "docker.png"
        },
        {
          title: "Vue.js",
          content: "Connaissances des fondements de ce framework.\n" +
          "+ Développements ponctuels de composants UI;\n" +
          "+ Connaissance et compréhension de la notion de modèle.",
          imgsrc: "vue.png"
        },
        {
          title: "Shell / Bash",
          content: "Très bonne aisance dans l'usage d'une ligne de commandes. Des bases dans le développement de script bash.\n" +
          "+ Utilisation quotidienne du terminal dans le cadre de l'environnement de développement;\n" +
          "+ Rédaction de scripts shell utilitaires de manière occasionnelle.",
          imgsrc: "shell.png"
        },
        {
          title: "ExtJS",
          content: "Bonnes connaissances autour du framework\n" +
          "+ Utilisation quotidienne dans le cadre de développements d'une version datée (2.3);\n" +
          "+ Bonne compréhension des composants principaux proposés par ExtJS\n;" +
          "+ Aisance dans les notions propres à ExtJS (extension de composants, configuration, évènements).",
          imgsrc: "extjs.png"
        },
        {
          title: "Android",
          content: "Aisance dans le développement natif sur cette plateforme\n" +
          "+ Reprise de plusieurs applicatifs Android;\n" +
          "+ Socle de connaissances sur les notions d'une application Android (Activité, Cycle de vie);\n" +
          "+ Connaissances de base dans les composants graphiques disponibles.",
          imgsrc: "android.png"
        },
        {
          title: "PhP",
          content: "Rudiments et développements partiels sur d'anciennes versions.\n" +
          "+ Compréhension de la notion de langage script;\n" +
          "+ Connaissances de base sur le framework Symfony et son ORM Doctrine.",
          imgsrc: "php.png"
        },
        {
          title: "Javascript",
          content: "Connaissances à travers l'utlisation de framework tels que Vue.js et ExtJS.\n" +
          "+ Développement régulier de base;\n" +
          "+ Rudiments sur les différentes versions de JS (ES2016).",
          imgsrc: "javascript.png"
        },
        {
          title: "Python",
          content: "Rudiments et développements sur d'anciennes versions.\n" +
          "+ Développement de quelques scripts;\n" +
          "+ Développement d'une application avec interface graphique en GTK 2.",
          imgsrc: "python.png"
        },
        {
          title: "Svn",
          content: "Utilisation aisée de ce gestionnaire de versions.",
          imgsrc: "svn.png"
        },
        {
          title: "Git",
          content: "Bonnes connaissances dans l'utilisation de ce gestionnaire de versions.\n" +
          "+ Utilisation des fonctionnalités de branche;\n" +
          "+ Aisance dans l'utilisatioon d'outils autour de Git: Github, Gitlab.",
          imgsrc: "git.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-title {
  background-color: #4DB6AC;
  color: #EEFF41;
  font-weight: bold;
}
.knowledge-avatar {
  background-color: #ffffff;
}
</style>
