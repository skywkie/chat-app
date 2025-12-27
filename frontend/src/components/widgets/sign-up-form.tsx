import { Activity, useState, type ChangeEvent } from "react";

import { AuthInput } from "@ui/inputs/auth-input";
import { AuthButton } from "@ui/buttons/auth-button";
import { AuthLinkPrompt } from "@ui/prompts/auth-link";
import { AuthInputSuggest } from "@ui/prompts/auth-input-suggest";

import { AuthInputLayout } from "@layouts/auth-input-layout";

import { validateUsername, validatePassword, validateRepeatPasswords } from "@utils/helpers/validators";
import { VALIDATION_ERRORS } from "@utils/constants";
import { useAuth } from "@utils/hooks/useAuth";

interface RequestUserData {
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
  const [userData, setUserData] = useState<RequestUserData>({
    username: "qweqweqwe",
    password: "qweqweqwe",
    repeatPassword: "qweqweqwe",
  });

  const [validationErrors, setValidationErrors] = useState<ErrorsData>({
    username: [],
    password: [],
    repeatPassword: [],
  });

  const { signUp, isLoading } = useAuth();

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // prettier-ignore
    const isValidationCorrect = () => Object.values(validationErrors).every((error: Error) => !error.length);

    if (isValidationCorrect()) {
      const response = await signUp(userData);

      console.log(response);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value: inputValue } = event.target;

    setUserData({
      ...userData,
      [inputName]: inputValue,
    });

    validateInput(inputName, inputValue);
  };

  const validateInput = (inputType: string, inputValue: string) => {
    const getValidationErrors = () => {
      switch (inputType) {
        case "username":
          return validateUsername(inputValue);
        case "password":
          setValidationErrors((prev) => ({
            ...prev,
            repeatPassword: validateRepeatPasswords(userData.repeatPassword, inputValue),
          }));

          return validatePassword(inputValue);
        default:
          return validateRepeatPasswords(userData.password, inputValue);
      }
    };

    const validationInputErrors: string[] | [] = getValidationErrors();

    if (validationInputErrors) {
      setValidationErrors((prev) => ({ ...prev, [inputType]: validationInputErrors }));
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="h-3/4 w-full lg:w-4/5 flex flex-col items-center justify-evenly"
    >
      <AuthInputLayout className="h-7/10">
        <AuthInput name="username" label="Username" onChange={onChange} value={userData.username}>
          <Activity mode={userData.username ? "visible" : "hidden"}>
            <AuthInputSuggest text={VALIDATION_ERRORS.USERNAME} activeText={validationErrors.username} />
          </Activity>
        </AuthInput>
        <AuthInput
          name="password"
          type="password"
          label="Password"
          onChange={onChange}
          value={userData.password}
        >
          <Activity mode={userData.password ? "visible" : "hidden"}>
            <AuthInputSuggest text={VALIDATION_ERRORS.PASSWORD} activeText={validationErrors.password} />
          </Activity>
        </AuthInput>
        <AuthInput
          name="repeatPassword"
          type="password"
          label="Repeat password"
          onChange={onChange}
          value={userData.repeatPassword}
        >
          <Activity mode={userData.repeatPassword ? "visible" : "hidden"}>
            <AuthInputSuggest
              text={VALIDATION_ERRORS.REPEAT_PASSWOPRD}
              activeText={validationErrors.repeatPassword}
            />
          </Activity>
        </AuthInput>
      </AuthInputLayout>
      <div>
        <AuthButton isLoading={isLoading}>Sign Up</AuthButton>
        <AuthLinkPrompt to="/sign-in" linkText="Sign In">
          Already have an account?{" "}
        </AuthLinkPrompt>
      </div>
    </form>
  );
};
