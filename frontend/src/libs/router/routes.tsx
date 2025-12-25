import { App } from "@src/app";

import { Home } from "@pages/home";
import { SignIn } from "@pages/sign-in";
import { SignUp } from "@pages/sign-up";

import { WithAuth } from "./guardRoute";

export const ROUTES = [
  {
    path: "/",
    element: <App />,
    errorElement: <span>Error!</span>,
    children: [
      {
        index: true,
        element: (
          <WithAuth redirectPath="/sign-in">
            <Home />
          </WithAuth>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <WithAuth redirectPath="/" reversed>
            <SignIn />
          </WithAuth>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <WithAuth redirectPath="/" reversed>
            <SignUp />
          </WithAuth>
        ),
      },
    ],
  },
];

// function lazyRoute<T>(importFn: () => Promise<T>, componentName: keyof T) {
//   return async () => {
//     const module = await importFn();
//     return { Component: module[componentName] };
//   };
// }
