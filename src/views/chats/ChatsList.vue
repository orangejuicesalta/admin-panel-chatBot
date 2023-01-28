<script setup lang="ts">
import { ref } from "vue";

const search = ref("");
const onSearch = () => {
  console.log(search.value);
};
</script>
<template>
  <section
    class="h-full w-full border border-border-color rounded-l-[15px] bg-white"
  >
    <div class="py-4 px-8 border-b border-border-color">
      <a-input
        allowClear
        v-model:value="search"
        bordered
        @pressEnter="onSearch"
        placeholder="Поиск"
        class="!rounded-[30px] !px-5 !py-2"
      >
        <template #suffix>
          <img src="../../assets/icons/Vectorsearch.svg" alt="icon " />
        </template>
      </a-input>
    </div>
    <div class="w-full flex flex-col items-start justify-center">
      <router-link
        :to="`/chats/list/${1}`"
        class="w-full flex flex-row justify-between items-center px-[30px] py-5 border-b border-border-color"
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
              >сообщение пользователя</span
            >
          </p>
        </div>

        <div
          class="w-5 h-5 bg-primary-orange text-white text-xs font-normal rounded-[30px] text-center pt-0.5"
        >
          3
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.router-link-active {
  @apply bg-gray-bg;
}
</style>
