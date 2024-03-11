import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AddTodo from "@/components/AddTodo.vue"; // Adjust the path as per your project structure
import { nextTick } from "vue";

// Mocks
window.alert = vi.fn();
global.$fetch = vi.fn();

describe("AddTodo.vue", () => {
  it('emits an "onAdd" event with valid form submission', async () => {
    const wrapper = mount(AddTodo);

    expect(wrapper.find(".new-todo-input").text()).toContain("");

    await wrapper.find(".new-todo-input").setValue("New Todo");
    await wrapper.find("form").trigger("submit");

    await nextTick(); // Wait for any DOM updates

    expect(wrapper.emitted()).toHaveProperty("onAdd");
    expect(wrapper.find(".new-todo-input").element.value).toBe("");
  });

  it('does not emit "onAdd" with invalid input', async () => {
    const wrapper = mount(AddTodo);

    await wrapper.find("form").trigger("submit.prevent");
    await nextTick(); // Wait for any DOM updates

    expect(wrapper.emitted().onAdd).toBeFalsy();
  });
});
