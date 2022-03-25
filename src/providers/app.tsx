import { ReactNode, Suspense, VFC } from "react";
import { RecoilRoot } from "recoil";
import { ErrorBoundary, FallbackProps } from "../libs/errorBoundary";
import { AppThemeProvider } from "./theme";

const ErrorFallback: VFC<FallbackProps> = ({ error }) => {
  console.error(error);
  return <div>something went wrong</div>;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: VFC<AppProviderProps> = ({ children }) => (
  <Suspense fallback={<></>}>
    <ErrorBoundary fallback={ErrorFallback}>
      <RecoilRoot>
        <AppThemeProvider>{children}</AppThemeProvider>
      </RecoilRoot>
    </ErrorBoundary>
  </Suspense>
);
