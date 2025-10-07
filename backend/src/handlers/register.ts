import type { Request, Response } from "express";
import { validationResult } from "express-validator";

import { createUser } from "../services/createUser.ts";
import { findUserByUsername } from "../services/findUserByUsername.ts";

import type { RequestUserData } from "../types.ts";

export const registerHandler = async (request: Request, response: Response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).send({ success: false, message: "Validation error", errors });
    }

    const userData: RequestUserData = request.body;
    const { username } = userData;

    const existingUser = await findUserByUsername(username);
    if (existingUser)
      return response
        .status(400)
        .send({ success: false, message: "A user with a similar username already exists." });

    createUser(userData);

    response.status(201).send({ success: true, message: "Success account registration" });
  } catch (error) {
    return response.status(400).send({ success: false, message: "Register error", error });
  }
};
