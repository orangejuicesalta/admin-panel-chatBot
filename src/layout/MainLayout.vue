<script setup lang="ts">
import SidebarBase from "../components/base/SidebarBase.vue";
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
