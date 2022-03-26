import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { VFC } from "react";
import { contests } from "../../../assets/data";
import { Page } from "../../../components/elements/Page";
import { useSet } from "../../../hooks/set";
import { SoundList } from "./SoundList";

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

const SoundPlayer: VFC = () => {
  return <Box>player</Box>;
};

export const LibraryPage: VFC = () => {
  return (
    <Page>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <SoundList />
        </Box>
        <Box sx={{ bgcolor: "#ddd" }}>
          <SoundPlayer />
        </Box>
      </Box>
    </Page>
  );
};
