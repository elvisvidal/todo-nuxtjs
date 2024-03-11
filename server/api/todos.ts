import { Todo } from "~/lib/definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const todos: Todo[] = await prisma.todo.findMany({
      orderBy: [
        {
          completed: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    });
    return todos;
  } catch (error) {
    return new Response("Failed to fetch todos.", { status: 500 });
  }
});
