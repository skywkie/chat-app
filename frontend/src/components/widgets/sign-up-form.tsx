import { useState, type ChangeEvent } from "react";

import AuthInput from "@ui/inputs/auth-input";
import AuthButton from "@ui/buttons/auth-button";

import AuthInputLayout from "@layouts/auth-input-layout";
import AuthLinkPrompt from "@ui/prompts/auth-link";

interface UserData {
  username: string;
  password: string;
  repeatPassword: string;
}

export default function SignUpForm() {
  const [userData, setUserData] = useState<UserData>({ username: "", password: "", repeatPassword: "" });

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="h-3/4 w-full flex flex-col items-center justify-evenly">
      <AuthInputLayout className="h-7/10">
        <AuthInput name="username" label="Username" onChange={onChange} />
        <AuthInput name="password" label="Password" onChange={onChange} />
        <AuthInput name="repeatPassword" label="Repeat password" onChange={onChange} />
      </AuthInputLayout>
      <div>
        <AuthButton>Sign In</AuthButton>
        <AuthLinkPrompt to="/sign-in" linkText="Sign In">
          Already have an account?{" "}
        </AuthLinkPrompt>
      </div>
    </form>
  );
}
