import AuthPageLayout from "@layouts/auth-page-layout";
import AuthForm from "@widgets/AuthForm/auth-form";

export default function SignIn() {
  return (
    <AuthPageLayout>
      <h1 className="text-4xl">Sign In</h1>
      <AuthForm />
    </AuthPageLayout>
  );
}
