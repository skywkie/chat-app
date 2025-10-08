import { useState, type ChangeEvent } from "react";

import { AuthInput } from "@ui/inputs/auth-input";
import { AuthButton } from "@ui/buttons/auth-button";

import { AuthInputLayout } from "@layouts/auth-input-layout";
import { AuthLinkPrompt } from "@ui/prompts/auth-link";

interface UserData {
  username: string;
  password: string;
}

export const SignInForm = () => {
  const [userData, setUserData] = useState<UserData>({ username: "", password: "" });

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // await fetch("http://localhost:5000/sign-up", {
  //   method: "POST",
  //   body: JSON.stringify(userData),
  //   headers: { "Content-type": "application/json" },
  // }).then((res) => console.log(res));

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="h-2/3 w-full flex flex-col items-center justify-evenly">
      <AuthInputLayout>
        <AuthInput name="username" label="Username" onChange={onChange} />
        <AuthInput name="password" label="Password" onChange={onChange} />
      </AuthInputLayout>
      <div>
        <AuthButton>Sign In</AuthButton>
        <AuthLinkPrompt to="/sign-up" linkText="Create an account">
          New here?{" "}
        </AuthLinkPrompt>
      </div>
    </form>
  );
};
