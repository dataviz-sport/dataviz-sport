<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="text-center text-light">____________</div>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-start">
            <li class="nav-item">
              <a
                href="https://github.com/dataviz-sport"
                class="nav-link"
                target="_blank"
                rel="noopener"
              >Hackathon GES 2019 - DataViz Sport {{year}}</a>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/dataviz-sport"
                class="nav-link"
                target="_blank"
                rel="noopener"
              >Groupe 26 : Aublet - Demay - Kok - Gibbings - Razonable</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-design-system"
                class="nav-link"
                target="_blank"
                rel="noopener"
              >Template from : Creative Tim</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
