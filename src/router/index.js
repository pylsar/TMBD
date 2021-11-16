import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import List from "../components/List.vue";
import ListItem from "../components/ListItem.vue";
import Comments from "../components/Comments.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/list",
      component: List
    },
    {
      path: "/comments",
      component: Comments
    },
    {
      path: "/list/:id",
      component: ListItem,
      name: "ListItem",
      props: true
    }
  ]
});
