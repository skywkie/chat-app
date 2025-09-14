import RoutesProvider from "@libs/router/provider";
import ReduxProvider from "@libs/redux/provider";

export default function Providers() {
  return (
    <ReduxProvider>
      <RoutesProvider />
    </ReduxProvider>
  );
}
