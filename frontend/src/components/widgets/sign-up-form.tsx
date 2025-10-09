import { useState, type ChangeEvent } from "react";

import { AuthInput } from "@ui/inputs/auth-input";
import { AuthButton } from "@ui/buttons/auth-button";
import { AuthLinkPrompt } from "@ui/prompts/auth-link";
import { AuthInputSuggest } from "@ui/prompts/auth-input-suggest";

import { AuthInputLayout } from "@layouts/auth-input-layout";

import { validateUsername, validatePassword, validateRepeatPasswords } from "@utils/helpers/validators";
import { VALIDATION_ERRORS } from "@utils/constants";

interface UserData {
  username: string;
  password: string;
  repeatPassword: string;
}

type Error = string[] | [];

interface ErrorsData {
  username: Error;
  password: Error;
  repeatPassword: Error;
}

export const SignUpForm = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "qweqweqwe",
    password: "qweqweqwe",
    repeatPassword: "qweqweqwe",
  });
  const [validationErrors, setValidationErrors] = useState<ErrorsData>({
    username: [],
    password: [],
    repeatPassword: [],
  });

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(validationErrors).every((error: Error) => !error.length)) {
      console.log(validationErrors);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    validateInput(event.target.name, event.target.value);
  };

  const validateInput = (inputType: string, inputValue: string) => {
    let validationInputsErrors: string[] | [] = [];

    switch (inputType) {
      case "username":
        validationInputsErrors = validateUsername(inputValue);
        break;
      case "password":
        validationInputsErrors = validatePassword(inputValue);
        break;
      case "repeatPassword":
        validationInputsErrors = validateRepeatPasswords(userData.password, inputValue);
        break;
    }

    if (validationInputsErrors) {
      setValidationErrors((prev) => ({ ...prev, [inputType]: validationInputsErrors }));
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="h-3/4 w-full lg:w-4/5 flex flex-col items-center justify-evenly"
    >
      <AuthInputLayout className="h-7/10">
        <AuthInput name="username" label="Username" onChange={onChange} value={userData.username}>
          {userData.username && (
            <AuthInputSuggest text={VALIDATION_ERRORS.USERNAME} activeText={validationErrors.username} />
          )}
        </AuthInput>
        <AuthInput
          name="password"
          type="password"
          label="Password"
          onChange={onChange}
          value={userData.password}
        >
          {userData.password && (
            <AuthInputSuggest text={VALIDATION_ERRORS.PASSWORD} activeText={validationErrors.password} />
          )}
        </AuthInput>
        <AuthInput
          name="repeatPassword"
          type="password"
          label="Repeat password"
          onChange={onChange}
          value={userData.repeatPassword}
        >
          {userData.repeatPassword && (
            <AuthInputSuggest
              text={VALIDATION_ERRORS.REPEAT_PASSWOPRD}
              activeText={validationErrors.repeatPassword}
            />
          )}
        </AuthInput>
      </AuthInputLayout>
      <div>
        <AuthButton>Sign In</AuthButton>
        <AuthLinkPrompt to="/sign-in" linkText="Sign In">
          Already have an account?{" "}
        </AuthLinkPrompt>
      </div>
    </form>
  );
};
