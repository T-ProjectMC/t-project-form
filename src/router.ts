import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: HelloWorld,
  //   beforeRouteLeave: function (to, from, next) {
  //     const answer = window.confirm(
  //       "編集中のものは保存されませんが、よろしいですか？"
  //     );
  //     if (answer) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   },
  // },
  {
    path: "/t-project-form/",
    name: "Home",
    component: Home,
    beforeRouteLeave: function (to, from, next) {
      const answer = window.confirm(
        "編集中のものは保存されませんが、よろしいですか？"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
