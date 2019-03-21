<template>
  <div>
    <div class="label-articles">
      <h1 class="display-2 text-white">TOP ARTICLES PAR MOT CLEF</h1>
    </div>

    <div class="offset-4 col-lg-4 mt-5 mb-5 row">
      <input class="col-lg-8 form-control" v-model="search_text" placeholder="Recherchez un mot">
      <button class="col-lg-2 ml-5 btn btn-info" v-on:click="search">Go</button>
    </div>

    <table v-if="(data.length != 0)" class="table col-lg-10 offset-1">
      <thead>
        <tr>
          <th>Source</th>
          <th>Titre</th>
          <th>Publication</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
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
import Vue from "vue";
Vue.use(require("vue-moment"));

export default {
  data() {
    return {
      data: [],
      search_text: ""
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
            }/edition/fr-fr`,
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

