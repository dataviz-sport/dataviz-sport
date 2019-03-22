<template>
  <div>
    <div class="label-articles">
      <h1 class="display-2 text-white">TOP ARTICLES PAR MOT CLEF</h1>
    </div>

    <div class="offset-2 col-lg-8 mt-5 mb-5 row">
      <select class="col-lg-3 form-control" name id v-model="search_country">
        <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <input
        class="col-lg-7 form-control ml-4 mr-4"
        v-model="search_text"
        placeholder="Recherchez un mot"
      >
      <button class="col-lg-1 btn btn-info" v-on:click="search">Go</button>
    </div>

    <table class="table col-lg-10 offset-1">
      <thead>
        <tr>
          <th>Source</th>
          <th>Titre</th>
          <th>Publication</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody v-if="(data.length == 0)">
        <tr>
          <td colspan="4">Pas de données.</td>
        </tr>
      </tbody>
      <tbody v-if="(data.length != 0)">
        <tr v-for="article in data">
          <td>{{ article.source.domain }}</td>
          <td>
            <a v-bind:href="article.url">{{ article.name }}</a>
          </td>
          <td>{{ article.date_first_seen.substr(0, 10) }}</td>
          <td>{{ article.article_score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      data: [],
      search_text: "",
      search_country: "",
      options: [
        {
          text: "France",
          value: "fr-fr"
        },
        {
          text: "Espage",
          value: "es-es"
        },
        {
          text: "Italie",
          value: "it-it"
        },
        {
          text: "Allemagne",
          value: "de-de"
        },
        {
          text: "Royaume Uni",
          value: "en-gb"
        },
        {
          text: "USA",
          value: "en-gb-ny"
        }
      ]
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    search: function() {
      axios
        .all([
          axios.request({
            url: `http://192.168.0.30:4000/search/keyword/${
              this.search_text
            }/edition/${this.search_country}`,
            method: "get",
            timeout: 200000,
            headers: { "Content-Type": "application/json" }
          })
        ])
        .then(
          axios.spread(result => {
            this.data = result.data.articles;
            console.log(this.data);
          })
        );
    }
  }
};
</script>


<style scoped>
.label-articles {
  text-align: center;
  background-color: #404a59;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>

