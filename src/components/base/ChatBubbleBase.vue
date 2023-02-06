<script setup lang="ts">
defineProps({
  isOwner: {
    type: Boolean,
    default: false,
  },
  text: String,
  name: String,
  dateTime: String,
  showAva: Boolean,
});
</script>

<template>
  <div
    class="w-full flex flex-row gap-1 items-start justify-start"
    :class="{ '!justify-end': isOwner }"
  >
    <div class="flex flex-col gap-1">
      <section
        class="max-w-sm w-fit flex flex-col bg-chat-bubble pt-2 pb-1 px-3 rounded-r-[15px] rounded-tl-[15px]"
        :class="{
          '!bg-my-purple !text-white !rounded-bl-[15px] !rounded-br-none':
            isOwner,
        }"
      >
        <p class="text-xs font-normal break-words">
          {{ text }}
        </p>
        <p
          class="pl-4 text-[10px] font-normal text-end text-gray-label"
          :class="{ '!text-white': isOwner }"
        >
          {{ dateTime }}
        </p>
      </section>
    </div>
  </div>
</template>
