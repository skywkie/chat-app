import { createBrowserRouter, RouterProvider } from "react-router";

import { ROUTES } from "./routes";

const router = createBrowserRouter(ROUTES, { basename: "chat-app" });

export const RoutesProvider = () => <RouterProvider router={router} />;
