import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import { findUserByUsername } from "../services/findUserByUsername.ts";

import type { RequestUserData } from "../types.ts";

export const loginHandler = async (request: Request, response: Response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).send({ isSuccess: false, message: "Validation error", errors });
    }

    const userData: RequestUserData = request.body;
    const { username, password } = userData;

    const existingUser = await findUserByUsername(username);
    if (!existingUser)
      return response
        .status(400)
        .send({ isSuccess: false, message: "A user with a similar username does not exists." });
    const { hashPassword, ...existingUserWithoutPassword } = existingUser;

    const result = bcrypt.compareSync(password, hashPassword);
    if (!result)
      return response.status(400).send({ isSuccess: false, message: "Password does not matches" });

    response.status(200).send({ isSuccess: true, user: existingUserWithoutPassword, message: "Success login to account" });
  } catch (error) {
    return response.status(400).send({ isSuccess: false, message: "Login error", error });
  }
};
