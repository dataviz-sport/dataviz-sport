<template>
  <div>
    <div class="label-trends">
      <h1 class="display-2 text-white">TOP TENDANCES</h1>
    </div>
    <div class="container ct-example-row">
      <div class="row">
        <div class="col-sm">
          <span>
            <b></b>
          </span>
        </div>

        <div class="col-sm block">
          <div class="label-top">
            <span>
              <b>TOP MOTS CLÉS</b>
            </span>
          </div>
          <div class="row line"></div>

          <div v-for="(value, key) in keywords" class="card d-flex flex-row text-center mb-2">
            <div v-if="key == 0" class="top-number font-weight-bold bg-warning pt-3 pb-3">1</div>
            <div v-else-if="key == 1" class="top-number font-weight-bold bg-secondary pt-3 pb-3">2</div>
            <div v-else-if="key == 2" class="top-number font-weight-bold bg-danger pt-3 pb-3">3</div>
            <div v-else class="top-number font-weight-bold bg-info pt-3 pb-3">{{ key + 1}}</div>
            <div class="top-text text-dark w-100 pt-3 pb-3 pointer">{{value.ngram}}</div>
          </div>
        </div>

        <div class="col-sm">
          <span>
            <b></b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trends",
  components: {},
  data() {
    return {
      keywords: {}
    };
  },
  mounted() {
    axios.get("http://localhost:4000/ngrams/details/1").then(response => {
      this.keywords = response.data.ngrams;
      console.log(response.data.ngrams);
    });
  }
};
</script>

<style scoped>
.label-trends {
  text-align: center;
  background-color: #404a59;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.block {
  font-size: 22px;
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  background-color: #404a59;
}

.label-top {
  text-align: center;
  margin-top: 0.35rem;
  margin-bottom: 1rem;
  color: white;
}

.line {
  margin-top: 0.45rem;
  margin-bottom: 0.4rem;
  border-bottom: 2px solid white;
}
.element {
  margin-bottom: 0.5rem;
}

.square {
  border-radius: 0.25rem;
  padding-left: 1.5rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  text-align: center;
  color: black;
}

.label-link {
  border-radius: 0.25rem;
  background-color: white;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  color: #404a59;
}

.gold {
  background-color: #ffb800;
}

.silver {
  background-color: #c7c7c7;
}

.bronze {
  background-color: #d76c54;
}

.blue {
  background-color: #7eace8;
}
</style>
