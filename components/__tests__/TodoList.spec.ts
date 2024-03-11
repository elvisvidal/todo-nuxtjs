import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue"; // Adjust the import path

// Example Todo items for testing
const todos = [
  { id: 1, title: "Learn Vue.js", completed: false },
  { id: 2, title: "Read Vue documentation", completed: true },
];

describe("TodoList.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TodoList, {
      props: { todos },
      global: {
        stubs: {
          NuxtLink: true,
          EditLink: true,
          DeleteButton: true,
          ToggleButton: true,
        },
      },
    });
  });

  it("renders the correct number of todo items", () => {
    const todoItems = wrapper.findAll(".todo-item");
    expect(todoItems).toHaveLength(todos.length);
  });

  it('applies "completed" class to completed todos', () => {
    const completedTodo = wrapper.findAll(".todo-item.completed");
    // Assuming one of the todos is completed
    expect(completedTodo).toHaveLength(
      todos.filter((todo) => todo.completed).length,
    );
  });

  it('toggles todo completed status on "handleCompleted" event', async () => {
    // Simulate "handleCompleted" being called for the first todo item
    await wrapper.vm.handleCompleted(todos[0].id);

    // Re-find the todo items to get the updated state
    const updatedTodoItems = wrapper.findAll(".todo-item");
    const firstTodoClass = updatedTodoItems[0].classes();

    // Check if the first todo item's completed status has been toggled
    expect(firstTodoClass).toContain("completed");
  });
});
