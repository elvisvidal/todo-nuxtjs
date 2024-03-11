import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ToggleButton from "@/components/ToggleButton.vue"; // Adjust the import path

// Mocks
global.alert = vi.fn();
global.$fetch = vi.fn();

describe("ToggleButton.vue", () => {
  let wrapper;

  const todo = {
    id: 1,
    title: "Learn Vue.js",
    completed: false,
  };

  beforeEach(() => {
    // Reset mocks to clear previous calls
    global.$fetch.mockReset();
    global.alert.mockReset();

    // Initialize wrapper with props and global mocks
    wrapper = mount(ToggleButton, {
      props: {
        todo,
      },
      global: {
        mocks: {
          $fetch: global.$fetch,
        },
      },
    });
  });

  it('emits "onCompleted" event on successful toggle', async () => {
    // Set $fetch to resolve successfully
    global.$fetch.mockResolvedValueOnce();

    // Simulate user clicking the checkbox
    await wrapper.find('input[type="checkbox"]').setValue(true);

    // Assert $fetch was called correctly
    expect(global.$fetch).toHaveBeenCalledWith("/api/todo", {
      method: "PUT",
      body: {
        id: todo.id,
        title: todo.title,
        completed: true, // The new value after toggle
      },
    });

    // Assert "onCompleted" event was emitted
    expect(wrapper.emitted()).toHaveProperty("onCompleted");
  });

  it("shows an alert on toggle failure", async () => {
    // Set $fetch to reject
    global.$fetch.mockRejectedValue(new Error("Failed"));

    // Simulate user clicking the checkbox
    await wrapper.find('input[type="checkbox"]').setValue(true);

    // Assert alert was called with the expected error message
    expect(global.alert).toHaveBeenCalledWith(
      "Failed to complete todo. Please try again later.",
    );
  });
});
