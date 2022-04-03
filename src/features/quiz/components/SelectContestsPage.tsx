import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { VFC } from "react";
import type { Contest } from "../../../assets/data";
import { Page } from "../../../components/elements/Page";
import { useRandomQuiz, useSelectorLogic } from "./SelectContestsPage.logic";

type ContestBannerProps = {
  contest: Contest;
  onClick: () => void;
  selected: boolean;
};

const ContestItem: VFC<ContestBannerProps> = ({ contest, onClick, selected }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton dense onClick={onClick}>
        <ListItemIcon>
          <Checkbox disableRipple checked={selected} />
        </ListItemIcon>
        <Box display="flex" flexDirection="row">
          <img
            width="100%"
            src={contest.banner}
            draggable="false"
            style={{ filter: selected ? "none" : "grayscale(1)" }}
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export const Selector: VFC = () => {
  const { contests, has, toggle, selectAll, unselectAll, selectedContests } = useSelectorLogic();
  const { canPlay, play } = useRandomQuiz(selectedContests);

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box bgcolor="grey.100" p={1} display="flex" alignItems="center">
        <Typography m={1} variant="body1">
          コンテスト選択
        </Typography>
        <Box flexGrow="1" />
        <Button variant="contained" sx={{ m: 1 }} onClick={play} disabled={!canPlay}>
          OK
        </Button>
      </Box>
      <Box p={1}>
        <Button variant="outlined" sx={{ m: 1 }} onClick={selectAll}>
          全選択
        </Button>
        <Button variant="outlined" sx={{ m: 1 }} onClick={unselectAll}>
          全解除
        </Button>
      </Box>
      <Box flexGrow="1" bgcolor="white" overflow="auto">
        <List>
          {contests.map((contest) => (
            <ContestItem
              key={contest.id}
              contest={contest}
              onClick={() => toggle(contest.id)}
              selected={has(contest.id)}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export const SelectContestsPage: VFC = () => {
  const theme = useTheme();
  return (
    <Page sx={{ bgcolor: "grey.100" }}>
      <Box display="flex" height="100%" justifyContent="center" alignItems="center">
        <Box width={`${theme.breakpoints.values.sm}px`} height="100%" boxShadow="0px 0px 8px 0px gray">
          <Selector />
        </Box>
      </Box>
    </Page>
  );
};
