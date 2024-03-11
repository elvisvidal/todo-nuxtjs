<template>
  <div class="mx-auto max-w-4xl px-4">
    <h1 class="my-4 text-center text-2xl font-bold">Todo List</h1>
    <AddTodo @on-add="fetchTodos()" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts" setup>
import AddTodo from "~/components/AddTodo.vue";
import TodoList from "~/components/TodoList.vue";
import type { Todo, Events } from "~/lib/definitions";

const todos = ref<Todo[]>([]);
const events = ref<Events>({});

function onEvent(key: string, callback: (data: any) => void): void {
  events.value[key] = callback;
}
provide("emitEvent", (key: string, data: any) => {
  if (events.value[key]) {
    events.value[key](data);
  }
});
provide("onEvent", onEvent);

onEvent("on-delete", (data) => {
  if (data.deleted) {
    fetchTodos();
  }
});

async function fetchTodos() {
  const data = await $fetch<Todo[]>("/api/todos");
  todos.value = data;
}

onMounted(() => {
  fetchTodos();
});
</script>
