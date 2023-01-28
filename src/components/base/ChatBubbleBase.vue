<script setup lang="ts">
defineProps({
  isOwner: {
    type: Boolean,
    default: false,
  },
  text: String,
});
</script>

<template>
  <div
    class="w-full flex flex-row gap-1 items-start justify-start"
    :class="{ '!justify-end': isOwner }"
  >
    <img
      v-if="!isOwner"
      src="../../assets/logo.svg"
      width="36"
      height="36"
      class="rounded-[50%]"
      alt="avatar"
    />
    <div class="flex flex-col gap-1">
      <span v-if="!isOwner" class="text-sm font-normal">Марина</span>
      <section
        class="max-w-sm flex flex-col gap-0.5 bg-chat-bubble pt-3 pb-1 px-3 rounded-r-[15px] rounded-tl-[15px]"
        :class="{
          '!bg-my-purple !text-white !rounded-bl-[15px] !rounded-br-none':
            isOwner,
        }"
      >
        <p class="text-xs font-normal break-words">
          {{ text }}
        </p>
        <p
          class="text-[10px] font-normal text-end text-gray-label"
          :class="{ '!text-white': isOwner }"
        >
          7:36
        </p>
      </section>
    </div>
  </div>
</template>
