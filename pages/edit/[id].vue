<template>
  <div class="mx-auto max-w-4xl px-4">
    <h1 class="my-4 text-center text-2xl font-bold">
      Editing Todo id: {{ id }}
    </h1>
    <form class="flex gap-2" @submit="handleSubmit">
      <input
        class="flex-1 rounded border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
        id="title"
        type="text"
        v-model="title"
        required
      />
      <button
        type="submit"
        :class="{
          'rounded px-4 py-2 text-white shadow': true,
          'bg-blue-900 hover:bg-blue-700': isFormValid,
          'cursor-not-allowed bg-gray-500': !isFormValid,
        }"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from "~/lib/definitions";
import { useInput } from "~/composables/titleInput";

const route = useRoute();
const id = route.params.id;
const { title, isFormValid } = useInput();
const completed = ref(false);

async function fetchTodo() {
  try {
    const data = await $fetch<Todo>(`/api/todo/${id}`);
    title.value = data.title;
    completed.value = data.completed;
  } catch (error) {
    const errorObj = {
      type: "error",
      message: "Failed to load todo. Please try again later.",
    };
    alert(errorObj.message);
  }
}

async function handleSubmit(e: Event) {
  e.preventDefault();

  try {
    await $fetch("/api/todo", {
      method: "PUT",
      body: { id: id, title: title.value, completed: completed.value },
    });
    await navigateTo("/");
  } catch (error) {
    const errorObj = {
      type: "error",
      message: "Failed to edit todo. Please try again later.",
    };
    alert(errorObj.message);
  }
}

onMounted(() => {
  fetchTodo();
});
</script>
