<template>
<div class="root">
  <div class="map animated slideInRight" id="mapDiv">
  </div>
  <div class="slider">
      <div class="slider-container">
       <slider :country="country" :datas="datas"></slider>
      </div>
  </div>
  </div>
</template>

<script>
import Slider from "./Slider"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default {
  name: 'HelloWorld',
   components: {
    Slider
  },
  data() {
      return {
        country: "",
        datas: [],
      }
  },
  mounted() {
      var vue= this
      var lastCountry = "";
     var map = AmCharts.makeChart("mapDiv", {
    "type": "map",
    "backgroundColor": "#000000",
    "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
    },
    "areasSettings": {
        "autoZoom": false,
        "color": "#2A333D",
        "outlineThickness": "0.2",
        "selectedColor": "#039BBD",
        "selectedOutlineColor": "#039BBD",
        "selectable": true
    },
    "listeners": [{
        "event": "clickMapObject",
        "method": function(event) {
            var slider = document.getElementsByClassName("slider")[0];
            var sliderContainer = document.getElementsByClassName("slider-container")[0];

            if (!slider.classList.contains("slided")) {
                slider.classList.add("slided");
                 sliderContainer.classList.remove("d-none")
            }
            console.log(event.mapObject.title)
             console.log(lastCountry)
              console.log(event.mapObject.title == lastCountry)
            if (event.mapObject.title == lastCountry) {
                slider.classList.remove("slided");
                sliderContainer.classList.add("d-none")
                lastCountry = ""
            } else {
                lastCountry = event.mapObject.title
            }

            vue.country = event.mapObject.title;
            vue.datas = [1, 2, 3, 4, 5, 6, 7, 8]
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
    font-family: "Montserrat";
    background-color:#222222;
    margin:0;
  }
  #mapDiv {
    width: 100%;
    height: 100vh;
    margin: 0;
    background: #404A59
  }

.slider {
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 100%;
    overflow: hidden;
    background: #fff;

    transition: all .75s ease;
}

.slided {
    height: 100%;
    width: 30%;
}
</style>
