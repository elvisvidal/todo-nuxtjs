<template>
  <div class="mt-4">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="flex items-center gap-2 border-b border-gray-200 p-2"
    >
      <p class="flex-1" :class="{ 'line-through': todo.completed }">
        {{ todo.title }}
      </p>
      <ToggleButton :todo="todo" @on-completed="handleCompleted(todo.id)" />
      <EditLink :todoId="todo.id" />
      <DeleteButton :todoId="todo.id" @on-delete="emit('onDelete')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EditLink from "./EditLink.vue";
import DeleteButton from "./DeleteButton.vue";
import ToggleButton from "./ToggleButton.vue";
import type { Todo } from "~/lib/definitions";

const emit = defineEmits(["onDelete"]);
const props = defineProps({
  todos: {
    type: Array as PropType<Todo[]>,
    default: () => [],
  },
});

function handleCompleted(todoId: number) {
  const todo = props.todos.find((t) => t.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
  }
}
</script>
