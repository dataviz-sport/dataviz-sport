import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";
import Map from "./views/Map.vue";
import Articles from "./views/Articles.vue";
import Trends from "./views/Trends.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "map",
      components: {
        header: AppHeader,
        default: Map,
        footer: AppFooter
      }
    },
    {
      path: "/articles",
      name: "articles",
      components: {
        header: AppHeader,
        default: Articles,
        footer: AppFooter
      }
    },
    {
      path: "/trends",
      name: "trends",
      components: {
        header: AppHeader,
        default: Trends,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
