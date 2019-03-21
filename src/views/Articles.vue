<template>
  <div>
    <div class="label-trends">
      <h1 class="display-2 text-white">TOP TENDANCES</h1>
    </div>
    <table class="table col-lg-10 offset-1">
      <thead>
        <tr>
          <th>Source</th>
          <th>Titre</th>
          <th>Date publication</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Le monde</td>
          <td>Macron et ses vacances</td>
          <td>12/10/2019</td>
          <td>459</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    vue = this;
    data = {};

    // Récuperation de la data
    axios
      .all([
        axios.request({
          url: "http://10.0.4.18:4000/trends/keyword/football",
          method: "get",
          timeout: 200000,
          headers: { "Content-Type": "application/json" }
        })
      ])
      .then(
        axios.spread(function(results_foot) {
          Object.keys(results_foot.data).map(function(objectKey, index) {
            var obj = {};
            obj["football"] = results_foot.data[objectKey].metadata.count;
            vue.datas[objectKey] = obj;
          });
        })
      );
  },
  beforeDestroy() {},
  methods() {}
};
</script>


<style scoped>
.label-trends {
  text-align: center;
  background-color: #404a59;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>

