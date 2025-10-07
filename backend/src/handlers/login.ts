import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import { findUserByUsername } from "../services/findUserByUsername.ts";

import type { RequestUserData } from "../types.ts";

export const loginHandler = async (request: Request, response: Response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).send({ success: false, message: "Validation error", errors });
    }

    const userData: RequestUserData = request.body;
    const { username, password } = userData;

    const existingUser = await findUserByUsername(username);
    if (!existingUser)
      return response
        .status(400)
        .send({ success: false, message: "A user with a similar username does not exists." });
    const { hashPassword } = existingUser;

    const result = bcrypt.compareSync(password, hashPassword);
    if (!result)
      return response.status(400).send({ success: false, message: "Password does not matches" });

    response.status(201).send({ success: true, message: "Success login to account" });
  } catch (error) {
    return response.status(400).send({ success: false, message: "Login error", error });
  }
};
