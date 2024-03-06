import { Todo } from "~/lib/definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const updatedTodo: Todo = await prisma.todo.update({
      where: { id: parseInt(body.id) },
      data: { title: body.title },
    });
    return updatedTodo;
  } catch (error) {
    return new Response("Failed to create todo.", { status: 500 });
  }
});
