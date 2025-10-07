import prisma from "../database/db.ts";

export const findUserByUsername = (username: string) => prisma.users.findUnique({ where: { username } });
