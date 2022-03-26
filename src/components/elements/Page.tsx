import { Box, SxProps, Theme } from "@mui/material";
import type { ReactNode, VFC } from "react";

export type PageProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

export const Page: VFC<PageProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)", // for phone
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};
