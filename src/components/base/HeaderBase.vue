<script setup lang="ts">
import { computed, onMounted } from "vue";
import router from "../../router";
import {useAuthStore} from '../../store/authorization';
import { storeToRefs } from "pinia";

const {userName} = storeToRefs(useAuthStore());
defineProps({
  header: String,
});

function onLogout() {
  localStorage.clear();
  router.push("/auth");
}

</script>

<template>
  <header class="w-full h-fit flex flex-row items-center justify-between">
    <h2 class="text-2xl text-primary-color font-bold">{{ header }}</h2>
    <a-popover trigger="click">
      <template #content>
        <button @click="onLogout" class="hover:text-primary-color text-base">
          Выйти
        </button>
      </template>
      <div
        class="bg-[#DDE2E8] active:bg-opacity-60 rounded-[6px] text-center py-2 px-5 cursor-pointer"
      >
        {{ userName }}
      </div>
    </a-popover>
  </header>
</template>
