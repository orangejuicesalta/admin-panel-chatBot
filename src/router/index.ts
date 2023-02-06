import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/MainLayout.vue"),
      redirect: {
        path: "/auth",
      },
      children: [
        {
          path: "chats",
          component: () => import("../views/chats/ChatsView.vue"),
          children: [
            {
              path: "list",
              name: "chats-list",
              components: {
                left: () => import("../views/chats/ChatsList.vue"),
                right: () => import("../views/DummyView.vue"),
              },
            },
            {
              path: "list/:id",
              name: "selected-chat",
              components: {
                left: () => import("../views/chats/ChatsList.vue"),
                right: () => import("../views/chats/SingleChatView.vue"),
              },
            },
          ],
        },
        {
          path: "messages",
          name: "direct_messages",
          component: () => import("../views/users/UsersView.vue"),
          children: [
            {
              path: "list",
              name: "messages-list",
              components: {
                left: () => import("../views/users/UsersList.vue"),
                right: () => import("../views/DummyView.vue"),
              },
            },
            {
              path: "list/:id",
              name: "selected-message",
              components: {
                left: () => import("../views/users/UsersList.vue"),
                right: () => import("../views/users/OneUserChatView.vue"),
              },
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
