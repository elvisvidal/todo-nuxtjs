<template>
  <form class="flex gap-2" @submit="handleSubmit">
    <input
      type="text"
      class="new-todo-input flex-1 rounded border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
      placeholder="Add new todo"
      name="title"
      v-model.trim="title"
    />
    <button
      type="submit"
      :class="{
        'rounded px-4 py-2 text-white shadow': true,
        'bg-blue-900 hover:bg-blue-700': isFormValid,
        'cursor-not-allowed bg-gray-500': !isFormValid,
      }"
    >
      Add
    </button>
  </form>
</template>

<script lang="ts" setup>
import { useInput } from "~/composables/titleInput";
const emit = defineEmits(["onAdd"]);
const { title, isFormValid } = useInput();

async function handleSubmit(e: Event) {
  e.preventDefault();
  if (!title.value || title.value === "") return;

  try {
    await $fetch("/api/todo", {
      method: "POST",
      body: { title: title.value },
    });
    title.value = "";
    emit("onAdd");
  } catch (error) {
    const errorObj = {
      type: "error",
      message: "Failed to add todo. Please try again later.",
    };
    alert(errorObj.message);
  }
}
</script>
