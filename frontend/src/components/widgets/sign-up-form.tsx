import { useState, type ChangeEvent } from "react";

import AuthInput from "@ui/Inputs/auth-input";
import AuthButton from "@ui/Buttons/auth-button";

import AuthInputLayout from "@layouts/auth-input-layout";

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
    <form onSubmit={onSubmit} className="h-2/3 w-full flex flex-col items-center justify-evenly">
      <AuthInputLayout>
        <AuthInput name="username" label="Username" onChange={onChange} />
        <AuthInput name="password" label="Password" onChange={onChange} />
        <AuthInput name="repeatPassword" label="Repeat password" onChange={onChange} />
      </AuthInputLayout>
      <AuthButton>Sign In</AuthButton>
    </form>
  );
}
