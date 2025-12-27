import { Outlet } from "react-router";

import { RootLayout } from "@layouts/root-layout";

export const App = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
