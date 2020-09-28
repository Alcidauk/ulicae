  <template>
  <v-layout fill-height background lighten-1>
    <v-container>
      <h1 align="center" justify="center">Notes</h1>

      <v-flex justify="center" layout>
        <v-card
          v-if="notes.length !== 0"
          v-for="(note, index) in notes"
          :key="index"
          class="ma-2"
          color="primary lighten-4"
          width="100%">
          <v-card-title class="pa-2 card-title" color="secondary accent-1">
            <h2>{{ note.title }}</h2>
            {{ note.date }}
          </v-card-title>
          <v-card-text v-html="compiledMarkdown(note.content)" />
        </v-card>
      </v-flex>

      <div v-if="notes.length === 0" class="mt-5" align="center" justify="center">
        Aucune note pour le moment.
      </div>
    </v-container>
  </v-layout>
</template>

  <script>
import axios from "axios";
import marked from "marked";

export default {
  name: "Note",
  props: {
    msg: String,
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + `/notes`)
      .then((response) => {
        this.notes = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    compiledMarkdown: function (item) {
      return marked(item, { sanitize: true });
    },
  },
  data() {
    return {
      notes: [],
    };
  },
};
</script>

  <style scoped>
</style>

