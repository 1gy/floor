import { Box, CircularProgress } from "@mui/material";
import { ReactNode, Suspense, VFC } from "react";

export const LoadingIndicator: VFC = () => (
  <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
    <Box
      sx={{
        bgcolor: "rgba(0,0,0,0.2)",
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  </Box>
);

export const LoadingSuspense: VFC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense fallback={<LoadingIndicator />}>{children}</Suspense>;
};
