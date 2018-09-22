import Vue from "vue";
import Router from "vue-router";
import home from "../components/routeStudy/home.vue";
import search from "../components/routeStudy/search.vue";
import rankings from "../components/routeStudy/rankings.vue";
import bottoms from "../components/routeStudy/bottom.vue";
import detail from "../components/routeStudy/details.vue";
import catalo from "../components/routeStudy/catalog.vue";
import conten from "../components/routeStudy/content.vue";
Vue.use(Router);
export default new Router({
  routes:[
    {
      path:"/",
      name:"home",
      meta:{index:0},
      components:{
        default:home,
        bottom:bottoms
      }
    },
    {
      path:"/search",
      name:"search",
      meta:{index:1},
      components:{
        default:search
      }
    },
    {
      path:"/rankings",
      name:"rankings",
      meta:{index:2},
      components:{
        default:rankings
      }
    },
    {
      path:"/details",
      name:"details",
      meta:{index:3},
      components:{
        default:detail
      }
    },
    {
      path:"/catalog",
      name:"catalog",
      meta:{index:4},
      components:{
        default:catalo
      }
    },
    {
      path:"/content",
      name:"content",
      meta:{index:5},
      components:{
        default:conten
      }
    },
  ]
})
