import { SignIn } from "@pages/sign-in";
import { SignUp } from "@pages/sign-up";

import { Navigate } from "react-router";

export const ROUTES = [
  {
    path: "/",
    element: <Navigate to="/sign-in" />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
