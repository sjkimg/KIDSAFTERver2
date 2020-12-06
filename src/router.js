import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/views/Home";
import MainPage from "./components/views/MainPage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/mainpage",
      component: MainPage
    }
  ]
});

export default router;