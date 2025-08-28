import { Route, Routes } from "react-router";

import ROUTES from "./routes";

export default function renderRoutes() {
  return (
    <Routes>
      {ROUTES.map((ROUTE) => (
        <Route {...ROUTE} key={ROUTE.path} />
      ))}
    </Routes>
  );
}
