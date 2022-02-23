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

export default {
  name: 'KnowledgeCategory',
  props: {
    currentPage: String,
    selectedPage: String
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
          content: "Développement de nombreux projets au cours d'études, de stages et d'emplois.\n\n" +
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
          "+ À l'aise avec Spring Data, la librairie permettant de dialoguer avec une base de données;\n" +
          "+ Utilisation de Spring Boot;\n" +
          "+ Connaissances autour des fonctionnalités de sécurisation des applicatifs (Spring Security);\n" +
          "+ Maîtrise de la génération d'une API Rest à l'aide de Spring.",
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
          "+ Maîtrise de la notion de stockage sous forme de documents (types, schémas, description de schémas en XSD);\n" +
          "+ Compréhension du système de contribution à une application Nuxeo (composants OSGi, contributions XML, services);\n" +
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
          content: "Bonnes connaissances autour du framework.\n" +
          "+ Utilisation quotidienne dans le cadre de développements sur une ancienne version (2.3);\n" +
          "+ Bonne compréhension des composants principaux proposés par ExtJS;\n" +
          "+ Aisance dans les notions propres à ExtJS (extension de composants, configuration, évènements).",
          imgsrc: "extjs.png"
        },
        {
          title: "Android",
          content: "Aisance dans le développement natif sur cette plateforme.\n" +
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
          "+ Développement régulier dans ce langage;\n" +
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
          "+ Aisance dans l'utilisation d'outils satellites à Git: Github, Gitlab.",
          imgsrc: "git.png"
        }
      ],
      proKnowledges: [
        {
          title: "Analyse fonctionnelle et développement",
          content: "Compétences dans la gestion de développements fonctionnels.\n" +
          "+ Capacité à chiffrer rapidement une demande fonctionnelle;\n" +
          "+ Habilité à spécifier et à découper une demande fonctionnelle en tâches techniques logiques;\n" +
          "+ Aisance dans la remontée d'alertes lors d'imprévus sur des développements.",
          imgsrc: null,
          icon: "fa-chart-pie"
        },
        {
          title: "Méthode de travail",
          content: "Rigueur et suivi dans les développements réalisés.\n" +
          "+ Connaissance d'outils tels que Trello ou Jira;\n" +
          "+ Habitude du bon suivi des développements;\n" +
          "+ Compétences dans l'intégration continue et le déploiement de livrables.",
          imgsrc: null,
          icon: "fa-ruler"
        },
        {
          title: "Travail en équipe",
          content: "Habitué à travailler au sein d'équipes de développement.\n" +
          "+ Aisance dans l'organisation Agile d'une équipe;\n" +
          "+ Pratique régulière du binômage sur un poste de travail;\n" +
          "+ Habitude à mener un projet fonctionnel à plusieurs.",
          imgsrc: null,
          icon: "fa-users"
        },
        {
          title: "Formation d'autres développeurs",
          content: "Compétent dans le suivi et la montée en compétences des développeurs.\n" +
          "+ Formation d'un stagiaire lors d'une précédente expérience professionnelle;\n" +
          "+ Suivi de la qualité du code d'une équipe de développeurs;\n" +
          "+ Force de proposition sur l'amélioration des processus de développement.",
          imgsrc: null,
          icon: "fa-chalkboard-teacher"
        },
        {
          title: "Intervention auprès de clients",
          content: "Aisance dans la communication avec les clients.\n" +
          "+ Habitude de dialogue technique avec des interlocuteurs techniciens;\n" +
          "+ Capacité à vulgariser le fonctionnement technique d'applicatifs.",
          imgsrc: null,
          icon: "fa-comments"
        },
        {
          title: "Rédaction",
          content: "Bonne maîtrise de l'écrit.\n" +
          "+ Capacité à rédiger clairement des documents techniques;\n" +
          "+ À l'aise dans la correspondance écrite avec un client.",
          imgsrc: null,
          icon: "fa-quote-left"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-title {
  font-weight: bold;
}
.knowledge-avatar {
  background-color: #ffffff;
}
</style>
