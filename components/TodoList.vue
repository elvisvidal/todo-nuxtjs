<template>
  <div class="mt-4">
    <div
      key="{todo.id}"
      class="flex items-center gap-2 border-b border-gray-200 p-2"
    >
      <p class="flex-1">{todo.title}</p>
      <EditLink todoId="{todo.id}" />
      <DeleteButton todoId="{todo.id}" onDeleteSuccess="{onDeleteSuccess}" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EditLink from "./EditLink.vue";
import DeleteButton from "./DeleteButton.vue";
</script>
