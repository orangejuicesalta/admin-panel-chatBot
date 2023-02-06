<script setup lang="ts">
import { ref, onMounted, nextTick, onUpdated, watch } from "vue";
import ChatBubbleBase from "../../components/base/ChatBubbleBase.vue";
import { useUsers } from "../../store/users_store";
import { formatDate, getCurrentDate } from "../../composables/formatDate";
import { useRoute } from "vue-router";

const chatWindow: any = ref(null);
const message = ref("");
const store = useUsers();
const route = useRoute();

const onSend = async (id: string) => {
  await store.sendChatMessage(id, message.value);
  await store.getUserMessages(id);
  message.value = "";
};

watch(
  () => store.userMessages.length,
  (newValue) => {}
);

onMounted(() => {
  nextTick(() => {
    if (chatWindow.value)
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
  });
});
onUpdated(async () => {
  // let id: string;
  // if (Array.isArray(route.params.id)) {
  //   id = route.params.id[0];
  // } else {
  //   id = route.params.id;
  // }
  // await store.getUserMessages(id);
  nextTick(() => {
    if (chatWindow.value)
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
  });
});
</script>

<template>
  <main class="w-full flex flex-col h-[650px]">
    <header
      class="bg-white h-fit flex flex-row justify-between items-center px-4 py-4 border border-border-color rounded-r-[15px]"
    >
      <div class="h-full flex flex-row items-center gap-2.5">
        <img
          src="../../assets/logo.svg"
          width="36"
          height="36"
          class="rounded-[50%]"
          alt="avatar"
        />
        <p class="flex flex-col gap-0.5">
          <span class="text-sm font-normal">{{
            store.userMessages[0]?.chat?.username
          }}</span>
        </p>
      </div>
      <img
        class="cursor-pointer"
        @click="$router.push({ path: '/messages/list' })"
        width="20"
        src="../../assets/icons/close.svg"
        alt="icon"
      />
    </header>
    <section
      ref="chatWindow"
      class="h-full flex flex-col gap-1 overflow-y-auto py-2 pl-5 pr-2"
    >
      <div v-for="(message, idx) in store.userMessages" :key="idx">
        <div
          v-if="
            formatDate(message.date).date !==
            formatDate(store.userMessages[idx - 1]?.date).date
          "
          class="w-full text-center py-3 text-xs text-gray-700"
        >
          {{
            getCurrentDate() === formatDate(message?.date).date
              ? "Сегодня"
              : formatDate(message?.date).date
          }}
        </div>
        <ChatBubbleBase
          :name="message?.chat.username"
          :text="message?.text"
          :dateTime="formatDate(message?.date).time"
          :isOwner="message.chat.id !== message.user.id"
          :showAva="message.user.id !== store.userMessages[idx - 1]?.user.id"
        />
      </div>
    </section>
    <div
      class="h-fit flex flex-row items-center gap-2 !rounded-br-[15px] !py-4 px-3 bg-white border border-border-color"
    >
      <a-input
        v-model:value="message"
        @pressEnter="onSend(store.userMessages[0]?.chat.id)"
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
