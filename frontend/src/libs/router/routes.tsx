import AuthPageLayout from "@layouts/auth-page-layout";

import SignIn from "@pages/sign-in";
import SignUp from "@pages/sign-up";

const ROUTES = [
  {
    path: "/",
    element: (
      <AuthPageLayout>
        <SignIn />
      </AuthPageLayout>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <AuthPageLayout>
        <SignUp />
      </AuthPageLayout>
    ),
  },
];

export default ROUTES;
