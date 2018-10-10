<template>
  <v-layout v-if="selectedPage === currentPage" row>

            <v-container>
                <h1 class="mb-2 page-title">Contact</h1>

                <v-layout column>
                  <h3 class="mt-2 page-title">Laisser un message</h3>
                  <v-form v-if="!sended">
                    <v-text-field
                      v-validate="'required'"
                      :error-messages="errors.collect('name')"
                      data-vv-name="name"
                      data-vv-as="nom"
                      v-model="name"
                      :counter="20"
                      label="Nom / Entreprise"/>
                    <v-text-field
                      v-validate="'required|email'"
                      v-model="email"
                      :error-messages="errors.collect('email')"
                      label="E-mail"
                      data-vv-name="email"
                      data-vv-as="mail"
                      required/>
                    <v-textarea
                      v-validate="'required'"
                      :error-messages="errors.collect('message')"
                      data-vv-name="message"
                      data-vv-as="message"
                      v-model="message"
                      :counter="2000"
                      label="Message"/>
                    <v-btn
                      :disabled="errors.length === 0"
                      @click="submit">Envoyer</v-btn>
                  </v-form>
                  <v-flex class="mt-3" v-if="sended">Message envoyé. Merci !</v-flex>
                  <v-flex class="mt-3 red--text" v-if="sendError">Une erreur s'est produite durant l'envoi du message. Réessayez plus tard, ou contactez moi par mail (présent sur mon CV au format PDF).</v-flex>
                </v-layout>
            </v-container>

  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LinkCategory',
  props: {
    currentPage: String,
    selectedPage: String,
    cvasset: String
  },
  methods: {
    pdfLink: function(){
      return 'CV_website.pdf';
    },
    submit: function(){
      this.$validator.validateAll().then(res => {
        this.sended = false;
        this.sendError = false;
        if (res){
          axios
            .put(process.env.VUE_APP_API_URL + '/messages', {
              name: this.name,
              email: this.email,
              message: this.message
            })
            .then(() => {
              this.sended = true;
            })
            .catch(() => {
              this.sendError = true
            });
        }
      })
    }
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      sended: false,
      sendError: false
    }
  }
}
</script>
