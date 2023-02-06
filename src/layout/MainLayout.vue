<script setup lang="ts">
import SidebarBase from "../components/base/SidebarBase.vue";
import { URL_WEBSOCKET } from "../api/api";
import { useWebsocket } from "../store/websocket";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

let connection: any = null;
const wsStore = useWebsocket();
const route = useRoute();

onMounted(() => {
  connection = new WebSocket(URL_WEBSOCKET);
  connection.onopen = function (event: any) {
    console.log("Successfully connected to the echo websocket server...");
  };
  connection.onmessage = function (event: any) {
    const data = JSON.parse(event.data);
    wsStore.manageMessage(JSON.parse(data), route.fullPath.includes("chats"));
  };
  connection.onclose = function (event: any) {
    console.log("Websocket connection closed");
  };
});
</script>

<template>
  <div
    class="max-w-screen-xxxl mx-auto h-screen grid grid-cols-template gap-x-[30px]"
  >
    <SidebarBase />
    <div class="w-full pt-9 pr-16 pb-9">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
