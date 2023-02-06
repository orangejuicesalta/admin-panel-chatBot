<script setup lang="ts">
import { onMounted } from "vue";
import HeaderBase from "../../components/base/HeaderBase.vue";
import { useAuthStore } from "../../store/authorization";
import { useChats } from "../../store/chats_store";
const authStore = useAuthStore();
const chatStore = useChats();

onMounted(() => {
  authStore.getMyProfile();
  chatStore.getChatsList();
});
</script>

<template>
  <main class="h-full flex flex-col">
    <HeaderBase header="Чаты" />
    <section class="h-[750px] w-full grid grid-cols-even-cols mt-5">
      <div>
        <router-view name="left" />
      </div>
      <div>
        <router-view name="right" />
      </div>
    </section>
  </main>
</template>
