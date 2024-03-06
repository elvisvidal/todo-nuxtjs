import { Todo } from "~/lib/definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await prisma.todo.delete({
      where: { id: parseInt(body.id) },
    });
    return new Response("Todo deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to create todo.", { status: 500 });
  }
});
