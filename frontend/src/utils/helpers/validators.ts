import {
  USERNAME_VALID_LITERALS_UNICODE_RANGE,
  PASSWORD_VALID_LITERALS_UNICODE_RANGE,
  VALID_NUMBERS_UNICODE_RANGE,
  USERNAME_VALID_LENGTH,
  PASSWORD_VALID_LENGTH,
  VALIDATION_ERRORS,
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
    validationResult.push(VALIDATION_ERRORS.USERNAME[0]);
  }
  if (!isValidLength) {
    validationResult.push(VALIDATION_ERRORS.USERNAME[1]);
  }

  return validationResult;
};

export const validatePassword = (password: string) => {
  const validationResult = [];

  const isValidLength = password.length >= PASSWORD_VALID_LENGTH;
  const isValidLiterals = isValidStringCharCodes(password, [PASSWORD_VALID_LITERALS_UNICODE_RANGE]);

  if (!isValidLiterals) {
    validationResult.push(VALIDATION_ERRORS.PASSWORD[0]);
  }
  if (!isValidLength) {
    validationResult.push(VALIDATION_ERRORS.PASSWORD[1]);
  }

  return validationResult;
};

export const validateRepeatPasswords = (password: string, repeatPassword: string) => {
  const validationResult = [];
  const isMatches = password === repeatPassword;

  if (!isMatches) validationResult.push(VALIDATION_ERRORS.REPEAT_PASSWOPRD[0]);

  return validationResult;
};
