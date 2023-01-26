<script setup lang="ts">

</script>

<template>
  <div class=" max-w-screen-xxxl mx-auto h-screen grid grid-cols-template">
    

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
