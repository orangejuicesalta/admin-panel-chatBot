<script setup lang="ts">
import HeaderBase from "../../components/base/HeaderBase.vue";
</script>

<template>
  <main class="h-full flex flex-col">
    <HeaderBase header="Чаты" />
    <section class="h-full w-full grid grid-cols-even-cols mt-5">
      <div>
        <router-view name="left" />
      </div>
      <div>
        <router-view name="right" />
      </div>
    </section>
  </main>
</template>
