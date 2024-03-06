<template>
  <div class="mx-auto max-w-4xl px-4">
    <h1 class="my-4 text-center text-2xl font-bold">Todo List</h1>
    <AddTodo @on-add="fetchTodos()" />
    <TodoList :todos="todos" @on-delete="fetchTodos()" />
  </div>
</template>

<script lang="ts" setup>
import AddTodo from "~/components/AddTodo.vue";
import TodoList from "~/components/TodoList.vue";
import type { Todo } from "~/lib/definitions";

const todos = ref<Todo[]>([]);

async function fetchTodos() {
  const data = await $fetch<Todo[]>("/api/todos");
  todos.value = data;
}

onMounted(() => {
  fetchTodos();
});
</script>
