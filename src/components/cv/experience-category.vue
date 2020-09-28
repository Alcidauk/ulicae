<template>
  <v-layout v-if="selectedPage === currentPage" row>
    <v-container>
      <h1 class="page-title">Expériences</h1>
      <v-expansion-panels focusable>
            <ExperienceStep
              v-for="(experience, index) in experiences"
              :key="index"
              :title="experience.title"
              :place="experience.place"
              :dates="experience.dates"
              :diploma="experience.diploma"
              :subDiploma="experience.subDiploma"
              :imgsrc="experience.imgsrc"
            />
      </v-expansion-panels>
    </v-container>
  </v-layout>
</template>

<script>
import ExperienceStep from "./experience-step";

export default {
  name: "ExperienceCategory",
  props: {
    currentPage: String,
    selectedPage: String,
  },
  data() {
    return {
      experiences: [
        {
          title: "Ingénieur développement FullStack",
          place: "CN Films (Paris, France)",
          dates: "depuis 12/2018",
          diploma:
            "Développement sur une suite de produits à destination des distributeurs et exploitants dans le domaine du cinéma",
          subDiploma: [
            {
              title:
                "Conception et développement d'une nouvelle version de Cinego Distri",
              content:
                '- conception et développement "from scratch" d\'un nouveau Frontend, en Angular 2 (versions 7 et supérieures)\n' +
                "- refonte du coeur technique Backend afin de disposer d'une API REST",
              icon: "fa-flask",
            },
            {
              title:
                "Développement sur les différents produits existants proposés par CN Films",
              content:
                "- développement Backend du coeur applicatif sur plate-forme Python, à l'aide des framework Pyramid et TurboGears\n" +
                "- développement de templates en Frontend",
              icon: "fa-industry",
            },
            {
              title: "Mise en place d'un système d'intégration continue",
              content:
                "- utilisation de Gitlab CI, la couche d'intégration continue de Gitlab\n" +
                "- mise en place de scripts de déploiement, de tests unitaires et d'intégration dans des conteneurs Docker",
              icon: "fa-industry",
            },
            {
              title: "Participation à la relation client",
              content:
                "- participation aux rendez-vous clients\n" +
                "- suivi de demandes en lien avec le support client",
              icon: "fa-handshake",
            },
          ],
          imgsrc: "cnfilms_short.png",
        },
        {
          title: "Lead technique & ingénieur développement FullStack",
          place: "SKINsoft (Besançon, France)",
          dates: "04/2017 à 07/2018",
          diploma:
            "Conception, définition des orientations techniques logicielles, et développement d'une suite logicielle de gestion de collections d'œuvres",
          subDiploma: [
            {
              title: "Développement au sein de la suite logicielle de SKINsoft",
              content:
                "- développement Backend sur la plate-forme SKINsoft, surcouche à la GED (Gestion Électronique de Documents) Nuxeo, en Java EE\n" +
                "- développement Frontend sur la plate-forme SKPlayer, utilisant le framework Javascript ExtJS",
              icon: "fa-flask",
            },
            {
              title:
                "Développement au sein de la nouvelle architecture logicielle de SKINsoft",
              content:
                "- développement Backend sur la nouvelle architecture logicielle (Spring/Java EE, MongoDB, API REST)\n" +
                "- développement Frontend sur la nouvelle architecture logicielle (Vue.js)",
              icon: "fa-flask",
            },
            {
              title:
                "Suivi de la qualité des développements de l'ensemble de l'équipe technique",
              content:
                "- mise en place de revues de code\n" +
                "- participation à l'élaboration des Sprints\n" +
                "- supervision de la réalisation des tests unitaires et d'intégration",
              icon: "fa-chart-line",
            },
            {
              title: "Participation à la relation client",
              content:
                "- participation à plusieurs auditions lors d'appels d'offres\n" +
                "- intervention chez plusieurs clients dans le cadre de support technique\n" +
                "- collaboration avec les interlocuteurs techniques de clients de le cadre du suivi de projets",
              icon: "fa-handshake",
            },
          ],
          imgsrc: "skin.jpg",
        },
        {
          title: "Ingénieur développement fullstack",
          place: "SKINsoft (Besançon, France)",
          dates: "08/2015 à 03/2017",
          diploma:
            "Conception, spécification et développement d'une suite logicielle de gestion de collections d'œuvres",
          subDiploma: [
            {
              title: "Développement au sein de la suite logicielle de SKINsoft",
              content:
                "- développement Backend sur la plate-forme SKINsoft, surcouche à la GED (Gestion Électronique de Documents) Nuxeo, en Java EE\n" +
                "- développement Frontend sur la plate-forme SKPlayer, utilisant le framework Javascript ExtJS",
              icon: "fa-flask",
            },
            {
              title:
                "Développement et maintenance de l'application mobile de récolement d'œuvres SKINreporter",
              content:
                "- refonte du code, maintenance et réalisation d'évolutions de l'application native Android\n" +
                "- réalisation d'évolutions sur l'API Rest de la suite SKINsoft\n" +
                "- suivi et finalisation de la relation avec le prestataire en charge du développement de l'application native Android",
              icon: "fa-mobile-alt",
            },
            {
              title: "Participation à la relation client",
              content:
                "- déplacements chez plusieurs clients lors d'ateliers de compréhension technique des besoins\n" +
                "- gestion de maintenance et de mises à jour chez plusieurs clients auto-hébergés",
              icon: "fa-handshake",
            },
            {
              title:
                "Participation à la conception d'une nouvelle architecture logicielle",
              content:
                "- réflexion autour de l'évolution de l'architecture existante\n" +
                "- réalisation d'une étude et de preuves de concept autour de l'architecture logicielle\n" +
                "- participation à la définition de la nouvelle architecture (from scratch)",
              icon: "fa-industry",
            },
          ],
          imgsrc: "skin.jpg",
        },
        {
          title: "Ingénieur informatique stagiaire",
          place: "SKINsoft (Besançon, France)",
          dates: "02/2015 à 07/2015",
          diploma:
            "Développement d'un nouveau produit mobile permettant le récolement des œuvres d'un musée",
          subDiploma: [
            {
              title:
                "Réalisation d'une API REST au sein de la plate-forme SKINsoft",
              content:
                "- recherche d'une solution technique et réalisation de preuves de concept pour le développement d'une API REST en Java\n" +
                "- développement d'un tiers se connectant à la plate-forme SKINsoft pour mettre à disposition des données au sein d'une API REST\n" +
                "- réalisation d'une documentation technique autour de l'utilisation de l'API REST et maintenance de celle-ci",
              icon: "fa-flask",
            },
            {
              title:
                "Gestion de la relation avec le prestataire en charge du développement mobile",
              content:
                "- mise en place d'une collaboration afin de développer une API REST conforme aux besoins de l'application mobile\n" +
                "- suivi de l'avancement des développements du prestataire, organisation de réunions techniques\n" +
                "- tests fonctionnels de l'application native Android",
              icon: "fa-handshake",
            },
          ],
          imgsrc: "skin.jpg",
        },
        {
          title: "Technicien informatique",
          place: "Kimoce (Mulhouse, France)",
          dates: "07/2014",
          diploma:
            "Développement à majorité Backend sur une application Web en Java EE (CDD d’un mois, suite au stage d’assistant ingénieur)",
          subDiploma: [
            {
              title: "Développement d’un module Backend en Java",
              content:
                "- développement des couches modèle et présentation d'un nouveau module fonctionnel\n" +
                "- participation au développement de la couche vue à l'aide du Framework VAADIN",
              icon: "fa-flask",
            },
          ],
          imgsrc: "kimoce.jpg",
        },
        {
          title: "Ingénieur informatique assistant stagiaire",
          place: "Kimoce (Mulhouse, France)",
          dates: "09/2013 à 02/2014",
          diploma:
            "Développement d’une application Web en SaaS (Software As A Service)",
          subDiploma: [
            {
              title:
                "Démarrage du développement d'une nouvelle application Web en mode SaaS",
              content:
                "- formation à la technologie VAADIN, Framework Java EE\n" +
                "- formation aux technologies utilisées chez Kimoce (Java EE, RMI)\n" +
                "- participation à la mise en place de l'environnement de développement nécessaire à ce nouveau projet",
              icon: "fa-industry",
            },
            {
              title:
                "Conception et développement des premiers modules fonctionnels de l'application",
              content:
                "- participation à la conception des différentes couches de l'application\n" +
                "- participation aux choix techniques inhérents au démarrage d'un projet: base de données, modèle de données, technologies Java EE\n" +
                "- réalisations de premiers modules sous forme de preuves de concept afin de valider les choix techniques effectués",
              icon: "fa-flask",
            },
          ],
          imgsrc: "kimoce.jpg",
        },
        {
          title:
            "Technicien informatique stagiaire, puis technicien informatique",
          place: "SIDEO Bedeville (Fesches le Chatel, France)",
          dates: "04/2012 à 07/2012",
          diploma:
            "Réalisation d’un applicatif en intranet en PhP pour le suivi de la production d'un atelier industriel",
          subDiploma: [
            {
              title:
                "Conception d'un applicatif de suivi de production de pièces automobiles",
              content:
                "- recherches autour du système d'informations existant: Sybase\n" +
                "- étude de différents choix techniques possibles\n" +
                "- choix et mise en place d'une preuve de concept autour d'une application PhP",
              icon: "fa-industry",
            },
            {
              title: "Développement de l'applicatif PhP de suivi de production",
              content:
                "- développement d'une couche de connexion au système d'information\n" +
                "- développement d'un générateur de requêtes permettant de créer des rapports d'informations sur les informations voulues\n" +
                "- développement d'une vue en HTML et Javascript permettant d'afficher les rapports dans l'atelier de production",
              icon: "fa-flask",
            },
          ],
          imgsrc: "sideo.jpg",
        },
      ],
    };
  },
  components: {
    ExperienceStep,
  },
};
</script>
