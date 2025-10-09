export const BASE_SERVER_AUTH_URL = (import.meta.env.VITE_BASE_SERVER_AUTH_URL as number) || 5000;

export const USERNAME_VALID_LENGTH = 4 as const;
export const USERNAME_VALID_LITERALS_UNICODE_RANGE = [97, 122] as const;

export const PASSWORD_VALID_LENGTH = 8 as const;
export const PASSWORD_VALID_LITERALS_UNICODE_RANGE = [37, 122] as const;

export const VALID_NUMBERS_UNICODE_RANGE = [48, 57] as const;

export const VALIDATION_ERRORS = {
  USERNAME: [
    "The username must not contain invalid characters.",
    `Username length must be at least ${USERNAME_VALID_LENGTH}`,
  ],
  PASSWORD: [
    "The password must not contain invalid characters",
    `Password length must be at least ${PASSWORD_VALID_LENGTH}`,
  ],
  REPEAT_PASSWOPRD: ["Passwords must match"],
} as const;
