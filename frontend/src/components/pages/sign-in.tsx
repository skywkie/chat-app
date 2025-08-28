import AuthPageLayout from "@layouts/auth-page-layout";

import SignInForm from "@widgets/sign-in-form";

export default function SignIn() {
  return (
    <AuthPageLayout>
      <h1 className="text-4xl">Sign In</h1>
      <SignInForm />
    </AuthPageLayout>
  );
}
