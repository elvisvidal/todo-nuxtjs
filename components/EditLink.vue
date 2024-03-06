<template>
  <NuxtLink
    class="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    :to="`edit/${todoId}`"
  >
    Edit
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  todoId: {
    type: Number,
    default: 0,
  },
});
</script>
