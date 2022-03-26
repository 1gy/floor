import { AppBar, Box, Divider, ToggleButton, ToggleButtonGroup, Toolbar, Typography, useTheme } from "@mui/material";
import { VFC } from "react";
import { contests } from "../../../assets/data";
import { LoadingSuspense } from "../../../components/elements/LoadingSuspense";
import { Page } from "../../../components/elements/Page";
import { useSet } from "../../../hooks/set";
import { SoundList } from "./SoundList";
import { SoundPlayer } from "./SoundPlayer";

type ContestBannerProps = {
  value: string;
  banner: string;
  onClick: () => void;
  selected: boolean;
};

const ContestBanner: VFC<ContestBannerProps> = ({ value, banner, onClick, selected }) => {
  return (
    <ToggleButton value={value} sx={{ p: 1 }} onClick={onClick} selected={selected}>
      <img src={banner} width="200px" draggable="false" style={{ filter: selected ? "none" : "grayscale(1)" }} />
    </ToggleButton>
  );
};

export const ContestSelector: VFC = () => {
  const { has, toggle } = useSet<string>();
  return (
    <Box sx={{ m: 2 }}>
      {Object.entries(contests).map(([key, contest]) => (
        <ContestBanner key={key} value={key} banner={contest.banner} selected={has(key)} onClick={() => toggle(key)} />
      ))}
    </Box>
  );
};

const TitleBar: VFC = () => {
  return (
    <AppBar position="relative">
      <Toolbar disableGutters sx={{ ml: 2 }} variant="dense">
        <Typography variant="h6" color="inherit">
          FLOOR Library
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Filter: VFC = () => {
  return <Box>filter</Box>;
};

export const LibraryPage: VFC = () => {
  const theme = useTheme();

  return (
    <Page>
      <Box display="flex" flexDirection="column" width="100%" height="100%">
        <Box>
          <TitleBar />
        </Box>
        <Box flexGrow="1" display="flex" overflow="hidden">
          {/*contents*/}
          <Box
            //width={`${theme.breakpoints.values.sm}px`}
            width="100%"
            display="flex"
            flexDirection="column"
            overflow="hidden"
            height="100%"
          >
            <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
              <LoadingSuspense>
                <SoundList />
              </LoadingSuspense>
            </Box>
            <Box>
              <SoundPlayer />
            </Box>
          </Box>
          {/*filter*/}
          <Box flexGrow={1} bgcolor="grey.100" display={{ xs: "none", sm: "none" }}>
            <Filter />
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
