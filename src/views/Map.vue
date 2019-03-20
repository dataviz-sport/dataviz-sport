<template>
<div class="root">
  <div class="map animated slideInRight" id="mapDiv">
  </div>
  <div class="slider">
       <div class="text" id="country"></div>
  </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default {
  name: 'HelloWorld',
  data() {
      return {
 country: ""
      }
  },
  mounted() {
     var map = AmCharts.makeChart("mapDiv", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": false,
    "selectedColor": "#CC0000",
    "selectable": true
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(event) {
     var slider = document.getElementsByClassName("slider")[0];

    if (!slider.classList.contains("slided")) {
        slider.classList.add("slided");
    }

    document.getElementById("country").innerHTML= event.mapObject.title
    }
  }]
});
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color:#222222;
    margin:0;
  }
  #mapDiv {
    width: 100%;
    height: 100vh;
    margin: 0;
  }

.slider {
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 100%;
    overflow: hidden;
    background: red;

    transition: all .75s ease;
}

.slided {
    height: 100%;
    width: 25%;
}
</style>
