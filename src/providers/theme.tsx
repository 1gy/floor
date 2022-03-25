import { ReactNode, VFC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type AppThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
  },
});

export const AppThemeProvider: VFC<AppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
