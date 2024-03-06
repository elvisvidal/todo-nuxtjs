<template>
  <div className="mx-auto max-w-4xl px-4">
    <h1 className="my-4 text-center text-2xl font-bold">Todo List</h1>
    <AddTodo onAdd="{fetchTodos}" />
    <TodoList todos="{todos}" onDeleteSuccess="{onDeleteSuccess}" />
  </div>
</template>

<script lang="ts" setup>
import AddTodo from "~/components/AddTodo.vue";
import TodoList from "~/components/TodoList.vue";
</script>
