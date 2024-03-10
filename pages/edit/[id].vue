<template>
  <div class="mx-auto max-w-4xl px-4">
    <h1 class="my-4 text-center text-2xl font-bold">
      Editing Todo id: {{ id }}
    </h1>
    <form class="flex gap-2" @submit="handleSubmit">
      <input
        class="flex-1 rounded border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="title"
        type="text"
        v-model="title"
        required
      />
      <button
        type="submit"
        class="rounded bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from "~/lib/definitions";

const route = useRoute();
const id = route.params.id;
const title = ref("");
const completed = ref(false);

async function fetchTodo() {
  const data = await $fetch<Todo>(`/api/todo/${id}`);
  title.value = data.title;
  completed.value = data.completed;
}

async function handleSubmit(e: Event) {
  e.preventDefault();
  await $fetch("/api/todo", {
    method: "PUT",
    body: { id: id, title: title.value, completed: completed.value },
  });
  await navigateTo("/");
}

onMounted(() => {
  fetchTodo();
});
</script>
