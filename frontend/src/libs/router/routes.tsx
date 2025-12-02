import { Navigate } from "react-router";

// const SignIn = React.lazy(() => import("@pages/sign-in"));

export const ROUTES = [
  {
    path: "/",
    element: <Navigate to="/sign-in" />,
  },
  {
    path: "/sign-in",
    lazy: lazyRoute(() => import("@pages/sign-in"), "SignIn"),
  },
  {
    path: "/sign-up",
    lazy: lazyRoute(() => import("@pages/sign-up"), "SignUp"),
  },
];

function lazyRoute<T>(importFn: () => Promise<T>, componentName: keyof T) {
  return async () => {
    const module = await importFn();
    return { Component: module[componentName] };
  };
}
