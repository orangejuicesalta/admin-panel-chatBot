<script setup lang="ts">
import HeaderBase from "../../components/base/HeaderBase.vue";
</script>

<template>
  <main class="h-full flex flex-col">
    <HeaderBase header="Пользователи" />
    <section
      class="mt-6 flex flex-row justify-between items-center p-3 border border-[#DDE2E8] bg-white rounded-[10px]"
    >
      <p class="text-sm font-normal">Количество пользователей: 20585</p>
      <button
        class="bg-secondary-blue text-white rounded-[10px] py-2.5 px-3 text-sm font-normal"
      >
        Добавить пользователя
      </button>
    </section>

    <section class="h-full w-full grid grid-cols-even-cols mt-2">
      <div>
        <router-view name="left" />
      </div>
      <div>
        <router-view name="right" />
      </div>
    </section>
  </main>
</template>
