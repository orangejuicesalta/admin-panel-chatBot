<script setup lang="ts">
import MessageIcon from "../icons/MessageIcon.vue";
import PeopleIcon from "../icons/PeopleIcon.vue";
</script>

<template>
  <KeepAlive>
    <nav class="sidebar">
      <div class="mx-auto">
        <img width="42" height="45" src="../../assets/logo.svg" alt="logo" />
      </div>

      <div class="w-full flex flex-col items-start gap-2">
        <router-link
          to="/chats/list"
          class="sidebar_item"
          :class="{ 'link-active': $route.fullPath.includes('chats') }"
        >
          <MessageIcon :is-active="$route.fullPath.includes('chats')" />
          <p>Чаты</p>
        </router-link>
        <router-link
          to="/messages/list"
          class="sidebar_item"
          :class="{ 'link-active': $route.fullPath.includes('messages') }"
        >
          <PeopleIcon :is-active="$route.fullPath.includes('messages')" />
          <p>Пользователи</p>
        </router-link>
      </div>
    </nav>
  </KeepAlive>
</template>

<style scoped>
.sidebar {
  @apply w-[218px] bg-white h-screen flex flex-col gap-[30px] items-start px-5 py-[40px];
}
.sidebar_item {
  @apply w-full flex flex-row gap-2.5 text-sm py-3 px-4 items-center;
}
.link-active {
  @apply bg-primary-color text-white rounded-lg;
}
</style>
