import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import DeleteButton from "@/components/DeleteButton.vue"; // Adjust the import path

// Mocks
global.alert = vi.fn();
global.inject = vi.fn(() => vi.fn());

describe("DeleteButton.vue", () => {
  it("emits an event on successful deletion", async () => {
    // Mock $fetch to resolve successfully
    global.$fetch = vi.fn();

    const wrapper = mount(DeleteButton, {
      global: {
        provide: {
          emitEvent: vi.fn(),
        },
      },
      props: {
        todoId: 123,
      },
    });

    await wrapper.find("button").trigger("click");

    // Check if $fetch was called correctly
    expect(global.$fetch).toHaveBeenCalledWith("/api/todo", {
      method: "DELETE",
      body: { id: 123 },
    });

    // Check if the event was emitted
    expect(wrapper.vm.emitEvent).toHaveBeenCalledWith("on-delete", {
      deleted: true,
    });
  });

  it("shows an alert on deletion failure", async () => {
    // Mock $fetch to reject
    global.$fetch = vi.fn(() => Promise.reject(new Error("Failed")));

    const wrapper = mount(DeleteButton, {
      global: {
        provide: {
          emitEvent: vi.fn(),
        },
      },
      props: {
        todoId: 123,
      },
    });

    await wrapper.find("button").trigger("click");

    // Check if alert was called correctly
    expect(global.alert).toHaveBeenCalledWith(
      "Failed to delete todo. Please try again later.",
    );
  });
});
