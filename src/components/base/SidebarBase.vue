<script setup lang="ts"></script>

<template>
  <KeepAlive>
    <nav class="sidebar">

        <router-link to="" class="sidebar_item">
          
        </router-link>
        <router-link to="" class="sidebar_item">
          
        </router-link>
    </nav>
  </KeepAlive>
</template>

<style scoped>
.sidebar {
  @apply h-screen flex flex-col;
}
.sidebar_item {

}
.router-link-active {
  @apply bg-primary-color text-white;
}

</style>
