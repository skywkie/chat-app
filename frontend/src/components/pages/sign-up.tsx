import AuthPageLayout from "@layouts/auth-page-layout";

import SignUpForm from "@widgets/sign-up-form";

export default function SignUp() {
  return (
    <AuthPageLayout>
      <h1 className="text-4xl">Sign In</h1>
      <SignUpForm />
    </AuthPageLayout>
  );
}
