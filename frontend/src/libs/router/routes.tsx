import SignIn from "@src/components/pages/sign-in";
import SignUp from "@src/components/pages/sign-up";

const ROUTES = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default ROUTES;
