import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await prisma.todo.delete({
      where: { id: parseInt(body.id) },
    });
    return true;
  } catch (error) {
    return new Response("Failed to create todo.", { status: 500 });
  }
});
