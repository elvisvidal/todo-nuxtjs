import { ref, computed } from "vue";

export function useInput() {
  const title = ref("");

  const titleError = computed(() => {
    if (!title.value) {
      return "Title is required";
    }
    return null;
  });

  const isFormValid = computed(() => {
    return titleError.value === null;
  });

  return { title, titleError, isFormValid };
}
