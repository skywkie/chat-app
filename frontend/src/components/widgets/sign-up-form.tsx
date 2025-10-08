import { useState, type ChangeEvent } from "react";

import { AuthInput } from "@ui/inputs/auth-input";
import { AuthButton } from "@ui/buttons/auth-button";
import { AuthLinkPrompt } from "@ui/prompts/auth-link";
import { AuthInputSuggest } from "@ui/prompts/auth-input-suggest";

import { AuthInputLayout } from "@layouts/auth-input-layout";

import { validateUsername, validatePassword, validateRepeatPasswords } from "@utils/helpers/validators";

interface UserData {
  username: string;
  password: string;
  repeatPassword: string;
}

interface ErrorsData {
  username?: string[];
  password?: string[];
  repeatPassword?: string[];
}

export const SignUpForm = () => {
  const [userData, setUserData] = useState<UserData>({ username: "", password: "", repeatPassword: "" });
  const [validationErrors, setValidationErrors] = useState<ErrorsData>({
    username: [],
    password: [],
    repeatPassword: [],
  });

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userData.username) validateForm("username");
    if (!userData.password) validateForm("password");
    if (!userData.repeatPassword) validateForm("repeatPassword");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    validateForm(event.target.name);
  };

  const validateForm = (inputType: string) => {
    let validationInputsErrors: string[] = [];

    switch (inputType) {
      case "username":
        validationInputsErrors = validateUsername(userData.username);
        break;
      case "password":
        validationInputsErrors = validatePassword(userData.password);
        console.log("test");

        break;
      case "repeatPassword":
        validationInputsErrors = validateRepeatPasswords(userData.password, userData.repeatPassword);
        break;
    }

    if (validationInputsErrors) {
      console.log(`@Validation ${inputType} ERROR`);

      setValidationErrors({ ...validationErrors, [inputType]: validationInputsErrors });
    }
  };

  return (
    <form onSubmit={onSubmit} className="h-3/4 w-full flex flex-col items-center justify-evenly">
      <AuthInputLayout className="h-7/10">
        <AuthInput name="username" label="Username" onChange={onChange}>
          {validationErrors.username && <AuthInputSuggest text={validationErrors.username} />}
        </AuthInput>
        <AuthInput name="password" type="" label="Password" onChange={onChange}>
          {validationErrors.password && <AuthInputSuggest text={validationErrors.password} />}
        </AuthInput>
        <AuthInput name="repeatPassword" type="" label="Repeat password" onChange={onChange}>
          {validationErrors.repeatPassword && (
            <AuthInputSuggest text={validationErrors.repeatPassword} />
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
