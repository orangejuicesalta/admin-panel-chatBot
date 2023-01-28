<script setup lang="ts">
import { ref } from "vue";
import ChatBubbleBase from "../../components/base/ChatBubbleBase.vue";
const message = ref("");

const onSend = () => {
  message.value = "";
  console.log("message sent");
};
</script>

<template>
  <main class="w-full flex flex-col h-full">
    <header
      class="bg-white h-fit flex flex-row justify-between items-center px-4 py-4 border border-border-color rounded-r-[15px]"
    >
      <div class="flex flex-row items-center gap-2.5">
        <img
          src="../../assets/logo.svg"
          width="36"
          height="36"
          class="rounded-[50%]"
          alt="avatar"
        />
        <p class="flex flex-col gap-0.5">
          <span class="text-sm font-normal">Марина</span>
          <span class="text-xs font-normal text-gray-label"
            >48 пользователей</span
          >
        </p>
      </div>
      <img
        class="cursor-pointer"
        @click="$router.push({ path: '/chats/list' })"
        width="20"
        src="../../assets/icons/close.svg"
        alt="icon"
      />
    </header>
    <section class="h-full flex flex-col gap-2 overflow-y-auto py-2 pl-5 pr-2">
      <ChatBubbleBase text="Hey, what's up?" />
      <ChatBubbleBase text="dfdfdfdddddddd" isOwner />
    </section>
    <div
      class="h-fit flex flex-row items-center gap-2 !rounded-br-[15px] !py-4 px-3 bg-white border border-border-color"
    >
      <a-input
        v-model:value="message"
        @pressEnter="onSend()"
        placeholder="Сообщение"
        :bordered="false"
      >
      </a-input>
      <div class="w-[25px] h-[25px]">
        <img src="../../assets/icons/paper_plane.svg" alt="icon" />
      </div>
    </div>
  </main>
</template>
