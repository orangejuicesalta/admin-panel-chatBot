import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/MainLayout.vue"),
      redirect: {
        name: "chats-list",
      },
      children: [
        {
          path: "chats",
          component: () => import("../views/chats/ChatsView.vue"),
          children: [
            {
              path: "list",
              name: "chats-list",
              components: {},
            },
          ],
        },
      ],
    },
  ],
});

export default router;
