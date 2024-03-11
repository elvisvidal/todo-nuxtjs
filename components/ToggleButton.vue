<template>
  <label class="toggle inline-flex cursor-pointer items-center">
    <input
      @change="handleToggle"
      type="checkbox"
      value=""
      class="peer sr-only"
      v-model="completed"
    />
    <div
      class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
    ></div>
  </label>
</template>

<script lang="ts" setup>
import type { Todo } from "~/lib/definitions";
const emit = defineEmits(["onCompleted"]);
const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    default: 0,
  },
});
const completed = ref(props.todo.completed);

async function handleToggle(e: Event) {
  e.preventDefault();

  try {
    await $fetch("/api/todo", {
      method: "PUT",
      body: {
        id: props.todo.id,
        title: props.todo.title,
        completed: completed.value,
      },
    });
    emit("onCompleted");
  } catch (error) {
    const errorObj = {
      type: "error",
      message: "Failed to complete todo. Please try again later.",
    };
    alert(errorObj.message);
  }
}
</script>
