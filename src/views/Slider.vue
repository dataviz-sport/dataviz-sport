<template>
<div class="container p-2 text-dark">
    <div class="text-center font-weight-bold text-dark  w-100 title mt-3 mb-3">
        TOP Sports for {{ country }}
    </div>
    <hr class="mt-0 mb-3">
    <div v-for="(data, index) in datas" class="card d-flex flex-row text-center mb-2">
        <div v-if="index == 0" class="top-number font-weight-bold bg-warning pt-3 pb-3">
            {{ data }}.
        </div>
         <div v-else-if="index == 1" class="top-number font-weight-bold bg-secondary pt-3 pb-3">
            {{ data }}.
        </div>
         <div v-else-if="index == 2" class="top-number font-weight-bold bg-danger pt-3 pb-3">
            {{ data }}.
        </div>
         <div v-else class="top-number font-weight-bold bg-info pt-3 pb-3">
            {{ data }}.
        </div>
        <div class="top-text text-dark w-100 pt-3 pb-3">
            2222DEAZEEZEZERZA
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "slider",
    props: ['country' , 'datas']
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
</style>
