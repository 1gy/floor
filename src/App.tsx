import { VFC } from "react";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

export const App: VFC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
