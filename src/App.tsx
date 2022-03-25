import { CssBaseline } from "@mui/material";
import { VFC } from "react";
import { StyleUtils } from "./components/elements/StyleUtils";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

export const App: VFC = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <StyleUtils />
      <AppRoutes />
    </AppProvider>
  );
};
