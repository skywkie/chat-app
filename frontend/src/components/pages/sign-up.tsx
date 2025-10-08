import { AuthPageLayout } from "@layouts/auth-page-layout";

import { SignUpForm } from "@widgets/sign-up-form";

export const SignUp = () => {
  return (
    <AuthPageLayout>
      <h1 className="text-4xl">Sign Up</h1>
      <SignUpForm />
    </AuthPageLayout>
  );
};
