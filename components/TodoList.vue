<template>
  <div class="mt-4">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="flex items-center gap-2 border-b border-gray-200 p-2"
    >
      <p class="flex-1">{{ todo.title }}</p>
      <EditLink :todoId="todo.id" />
      <DeleteButton :todoId="todo.id" @on-delete="emit('onDelete')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EditLink from "./EditLink.vue";
import DeleteButton from "./DeleteButton.vue";
import type { Todo } from "~/lib/definitions";

const emit = defineEmits(["onDelete"]);

defineProps({
  todos: {
    type: Array as PropType<Todo[]>,
    default: () => [],
  },
});
</script>
