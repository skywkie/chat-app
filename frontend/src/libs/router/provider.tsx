import { createBrowserRouter, RouterProvider } from "react-router";

import ROUTES from "./routes";

const router = createBrowserRouter(ROUTES, { basename: "chat-app" });

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
