import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

import prisma from "../database/db.ts";

import type { RequestUserData } from "../types.ts";

const saltRounds = 10;

export const createUser = async (userData: RequestUserData) => {
  try {
    const { password, username } = userData;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    await prisma.users.create({
      data: { id: nanoid(), username, hashPassword, createdAt: new Date() },
    });
  } catch (error) {
    console.log("@createUser CATCH ERROR", error);
  }
};
