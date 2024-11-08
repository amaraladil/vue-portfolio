import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "All about " + process.env.VUE_APP_TITLE,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/projects/:projectId",
    name: "project",
    meta: {
      title: "Project",
    },
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      title: "Not Found",
    },
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash)
      return {
        el: to.hash,
        behavior: "smooth",
      };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Set the title of the page based on the route
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? to.meta.title | "Portfolio";
  // if (to.params?.projectId) document.title += ' - ' + to.params.projectId
  document.title += to.params?.projectId ? " - " + to.params.projectId : "";
});

export default router;
