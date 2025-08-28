import { BrowserRouter } from "react-router";

import AppLayout from "@layouts/app-layout";

import renderRoutes from "@libs/router";

export default function App() {
  return (
    <AppLayout>
      <BrowserRouter basename="chat-app">{renderRoutes()}</BrowserRouter>
    </AppLayout>
  );
}
