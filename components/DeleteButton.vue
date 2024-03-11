<template>
  <button
    @click="handleDelete"
    class="delete-button rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
  >
    Delete
  </button>
</template>

<script lang="ts" setup>
const emitEvent = inject<any>("emitEvent");
const eventKey = "on-delete";
const props = defineProps({
  todoId: {
    type: Number,
    default: 0,
  },
});

async function handleDelete(e: Event) {
  e.preventDefault();

  try {
    await $fetch("/api/todo", {
      method: "DELETE",
      body: { id: props.todoId },
    });
    emitEvent(eventKey, { deleted: true });
  } catch (error) {
    const errorObj = {
      type: "error",
      message: "Failed to delete todo. Please try again later.",
    };
    alert(errorObj.message);
  }
}
</script>
