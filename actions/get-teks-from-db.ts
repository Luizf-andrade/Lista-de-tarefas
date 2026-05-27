import { prisma } from "@/utils/prisma";

const getTask = async () => {
    const tasks = await prisma.tasks.findMany()

    if (!tasks) return

    console.log(tasks)
    return tasks
}