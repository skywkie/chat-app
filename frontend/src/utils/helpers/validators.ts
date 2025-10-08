import {
  USERNAME_VALID_LITERALS_UNICODE_RANGE,
  PASSWORD_VALID_LITERALS_UNICODE_RANGE,
  VALID_NUMBERS_UNICODE_RANGE,
  USERNAME_VALID_LENGTH,
  PASSWORD_VALID_LENGTH,
} from "@utils/constants";

import { isValidStringCharCodes } from "./unicode-range";

export const validateUsername = (login: string) => {
  const validationResult = [];

  const isValidLength = login.length >= USERNAME_VALID_LENGTH;
  const isValidLiterals = isValidStringCharCodes(login, [
    USERNAME_VALID_LITERALS_UNICODE_RANGE,
    VALID_NUMBERS_UNICODE_RANGE,
  ]);

  if (!isValidLiterals) {
    validationResult.push("The username must not contain invalid characters.");
  }
  if (!isValidLength) {
    validationResult.push(`Username length must be at least ${USERNAME_VALID_LENGTH}`);
  }

  return validationResult;
};

export const validatePassword = (password: string) => {
  const validationResult = [];

  const isValidLength = password.length >= PASSWORD_VALID_LENGTH;
  const isValidLiterals = isValidStringCharCodes(password, [PASSWORD_VALID_LITERALS_UNICODE_RANGE]);

  if (!isValidLiterals) {
    validationResult.push("The password must not contain invalid characters");
  }
  if (!isValidLength) {
    validationResult.push(`Password length must be at least ${PASSWORD_VALID_LENGTH}`);
  }

  return validationResult;
};

export const validateRepeatPasswords = (password: string, repeatPassword: string) => {
  const validationResult = [];
  const isMatches = password === repeatPassword;

  if (!isMatches) validationResult.push("Passwords must match");

  return validationResult;
};
