<template>
  <div class="root">
    <div class="map animated slideInRight" id="mapDiv"></div>
    <div class="slider">
      <div class="slider-container">
        <slider :country="country" :sports="sports"></slider>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default {
  name: "HelloWorld",
  components: {
    Slider
  },
  data() {
    return {
      country: "",
      datas: {},
      sports: {}
    };
  },
  mounted() {
    var vue = this;
    var lastCountry = "";
    var datas = {};

    axios
      .all([
        axios.request({
          url: "http://10.0.4.18:4000/trends/keyword/football",
          method: "get",
          timeout: 200000,
          headers: { "Content-Type": "application/json" }
        }),
        axios.request({
          url: "http://10.0.4.18:4000/trends/keyword/tennis",
          method: "get",
          timeout: 200000,
          headers: { "Content-Type": "application/json" }
        }),
        axios.request({
          url: "http://10.0.4.18:4000/trends/keyword/basketball",
          method: "get",
          timeout: 200000,
          headers: { "Content-Type": "application/json" }
        })
      ])
      .then(
        axios.spread(function(results_foot, results_basket, results_tennis) {
          Object.keys(results_foot.data).map(function(objectKey, index) {
            var obj = {};
            obj["football"] = results_foot.data[objectKey].metadata.count;
            vue.datas[objectKey] = obj;
          });

          Object.keys(results_basket.data).map(function(objectKey, index) {
            vue.datas[objectKey].basketball =
              results_tennis.data[objectKey].metadata.count;
          });

          Object.keys(results_tennis.data).map(function(objectKey, index) {
            vue.datas[objectKey].tennis =
              results_tennis.data[objectKey].metadata.count;
          });
        })
      );

    var map = AmCharts.makeChart("mapDiv", {
      type: "map",
      backgroundColor: "#000000",
      dataProvider: {
        map: "worldLow",
        getAreasFromMap: true
      },
      areasSettings: {
        autoZoom: false,
        color: "#2A333D",
        outlineThickness: "0.2",
        selectedColor: "#039BBD",
        selectedOutlineColor: "#039BBD",
        selectable: true
      },
      listeners: [
        {
          event: "clickMapObject",
          method: function(event) {
              console.log(event)
            switch (event.mapObject.id) {
              case "FR":
                var sortable = [];
                for (var data in vue.datas["fr"]) {
                  sortable.push([data, vue.datas["fr"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
              case "US":
                var sortable = [];
                for (var data in vue.datas["us"]) {
                  sortable.push([data, vue.datas["us"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
            case "ES":
                var sortable = [];
                for (var data in vue.datas["es"]) {
                  sortable.push([data, vue.datas["es"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
                case "IT":
                var sortable = [];
                for (var data in vue.datas["it"]) {
                  sortable.push([data, vue.datas["it"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
                case "UK":
                var sortable = [];
                for (var data in vue.datas["UK"]) {
                  sortable.push([data, vue.datas["UK"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
                case "DE":
                var sortable = [];
                for (var data in vue.datas["de"]) {
                  sortable.push([data, vue.datas["de"][data]]);
                }
                sortable.sort(function(a, b) {
                  return b[1] - a[1];
                });

                vue.sports = sortable
                break;
            }

            var slider = document.getElementsByClassName("slider")[0];
            var sliderContainer = document.getElementsByClassName(
              "slider-container"
            )[0];

            if (!slider.classList.contains("slided")) {
              slider.classList.add("slided");
              sliderContainer.classList.remove("d-none");
            }
            if (event.mapObject.title == lastCountry) {
              slider.classList.remove("slided");
              sliderContainer.classList.add("d-none");
              map.selectedObject = false;
              map.showAsSelected = false;
              lastCountry = "";
            } else {
              lastCountry = event.mapObject.title;
            }

            vue.country = event.mapObject.title;
          }
        }
      ]
    });
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: "Montserrat";
  background-color: #222222;
  margin: 0;
}
#mapDiv {
  width: 100%;
  height: 100vh;
  margin: 0;
  background: #404a59;
}

.slider {
    position: absolute;
    top: 95px;
    right: 0;
    width: 0px;
    height: 100%;
    overflow: hidden;
    background: #fff;

  transition: all 0.75s ease;
}

.slided {
  height: 100%;
  width: 30%;
}
</style>
