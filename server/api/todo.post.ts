import { Todo } from "~/lib/definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newTodo: Todo = await prisma.todo.create({
      data: {
        title: body.title,
      },
    });
    return newTodo;
  } catch (error) {
    return new Response("Failed to create todo.", { status: 500 });
  }
});
