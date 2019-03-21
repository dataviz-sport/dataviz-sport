<template>
  <div>
    <div class="label-trends">
      <h1 class="display-2 text-white">TOP TENDANCES</h1>
    </div>
    <div class="container ct-example-row">
        <div class="row">
            <div class="col-sm">
                <span><b></b></span>
            </div>

                <div class="col-sm block">
                    <div class="label-top"><span><b>TOP MOTS CLÉS</b></span></div>
                    <div class="row line"></div>
                    
                    <div class="row element">
                        <div class="col-md-1 gold square"><b>1.</b></div>
                        <a class="col label-link" href="#/"><b>PSG</b></a>
                    </div>

                    <div class="row element">
                        <div class="col-md-1 silver square"><b>2.</b></div>
                        <a class="col label-link" href="#/"><b>Mercato</b></a>
                    </div>

                    <div class="row element">
                        <div class="col-md-1 bronze square"><b>3.</b></div>
                        <a class="col label-link" href="#/"><b>Football</b></a>
                    </div>

                    <div class="row element">
                        <div class="col-md-1 blue square"><b>4.</b></div>
                        <a class="col label-link" href="#/"><b>OM</b></a>
                    </div>

                    <div class="row element">
                        <div class="col-md-1 blue square"><b>5.</b></div>
                        <a class="col label-link" href="#/"><b>Ligue 1</b></a>
                    </div>
                    
                </div>

                <div class="col-sm">
                <span><b></b></span>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: "trends",
  components: {}
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
    border-radius: 0.50rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    background-color: #404A59;
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
    padding-left: 1.50rem;
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
    color: #404A59;
}

.gold{
    background-color: #FFB800;
}

.silver {
    background-color: #C7C7C7;
}

.bronze {
    background-color: #D76C54;
}

.blue {
    background-color: #7eace8;
}



</style>
