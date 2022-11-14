import { createRouter, createWebHistory } from "vue-router";
import NewsFeed from "./../components/NewsFeed.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: NewsFeed,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
