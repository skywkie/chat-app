import { useState, type ChangeEvent } from "react";

import { AuthInput } from "@ui/inputs/auth-input";
import { AuthButton } from "@ui/buttons/auth-button";
import { AuthLinkPrompt } from "@ui/prompts/auth-link";

import { AuthInputLayout } from "@layouts/auth-input-layout";

import { useAuth } from "@utils/hooks/useAuth";

interface UserData {
  username: string;
  password: string;
}

export const SignInForm = () => {
  const [userData, setUserData] = useState<UserData>({ username: "qweqweqwe", password: "qweqweqwe" });

  const { signIn } = useAuth();

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await signIn(userData);
    console.log(response);
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
    <form
      onSubmit={onSubmit}
      className="h-3/4 w-full lg:w-4/5 flex flex-col items-center justify-evenly"
    >
      <AuthInputLayout>
        <AuthInput name="username" label="Username" onChange={onChange} value={userData.username} />
        <AuthInput
          name="password"
          label="Password"
          onChange={onChange}
          type="password"
          value={userData.password}
        />
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
