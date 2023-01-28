<script setup lang="ts">
defineProps({
  header: String,
});
</script>

<template>
  <header class="w-full h-fit flex flex-row items-center justify-between">
    <h2 class="text-2xl text-primary-color font-bold">{{ header }}</h2>
    <div class="bg-[#DDE2E8] rounded-[6px] text-center py-3 px-5">Suzine</div>
  </header>
</template>
