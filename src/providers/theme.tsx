import { ReactNode, VFC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type AppThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#009688",
    },
  },
  transitions: {
    create: () => "none",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const AppThemeProvider: VFC<AppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
