<!-- eslint-disable -->
<template>
  <div class="container p-2 text-dark">
    <div
      class="text-center font-weight-bold text-dark w-100 title mt-3 mb-3">TOP Sports for {{ country }}</div>
    <hr class="mt-0 mb-3">
    <div v-for="(value, key) in sports" class="card d-flex flex-row text-center mb-2">
      <div v-if="key == 0" class="top-number font-weight-bold bg-warning pt-3 pb-3">1</div>
      <div v-else-if="key == 1" class="top-number font-weight-bold bg-secondary pt-3 pb-3">2</div>
      <div v-else-if="key == 2" class="top-number font-weight-bold bg-danger pt-3 pb-3">3</div>
      <div v-else class="top-number font-weight-bold bg-info pt-3 pb-3"></div>
      <div v-on:click="emitClick(value[0])" class="top-text text-dark w-100 pt-3 pb-3 pointer">{{value[0]}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  props: ["country", "sports"],
  methods: {
      emitClick: function (keyword) {
        this.$emit('interface', keyword) // handle data and give it back to parent by interface
      }
  }
};
</script>
<style>
.top-number {
  width: 60px;
}

.top-text {
  background: #f9f9f9;
}

.title {
  font-size: 20px;
}

.pointer {
    cursor: pointer;
}
</style>
