import { Todo } from "~/lib/definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const id = <string>getRouterParam(event, "id");
    const todo: Todo | null = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });

    if (!todo) {
      return new Response("Todo not found.", { status: 404 });
    }

    return todo;
  } catch (error) {
    return new Response("Failed to fetch todos.", { status: 500 });
  }
});
