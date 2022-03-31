import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Slider,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useCallback, useState, VFC } from "react";
import { PauseIcon, PlayArrowIcon, VolumeDownIcon, VolumeUpIcon } from "../../../components/elements/Icons";
import { Page } from "../../../components/elements/Page";
import { FlattenMusic } from "../../../hooks/musics";
import { useAudio } from "../../library/components/MusicPlayer.logic";
import { usePlayingMusic } from "../../library/stores";
import { FilteredMusicList } from "./FilteredMusicList";
import { useBack, usePlayLogic, useTweetResult } from "./Play.logic";
import { QuizInfo } from "./quiz";

const MusicPlayer: VFC = () => {
  const [music, _] = usePlayingMusic();
  const [volume, setVolume] = useState(0.5);
  const { playing, play, pause } = useAudio(music?.source, volume, true);

  const handleVolumeChange = useCallback((_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setVolume(newValue);
    }
  }, []);

  return (
    <Toolbar disableGutters sx={{ ml: 1, mr: 1 }} variant="dense">
      <IconButton onClick={() => (playing ? pause() : play())}>
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Stack width="100%" spacing={2} direction="row" alignItems="center">
        <VolumeDownIcon />
        <Slider min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} />
        <VolumeUpIcon />
      </Stack>
    </Toolbar>
  );
};

type ResultProps = {
  answers: string[];
  quizInfo: QuizInfo;
  musicTable: Record<string, FlattenMusic>;
};
const Result: VFC<ResultProps> = ({ answers, quizInfo, musicTable }) => {
  const back = useBack();
  const tweetResult = useTweetResult(answers, quizInfo);

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box>
        <Button variant="outlined" sx={{ m: 1 }} onClick={back}>
          トップに戻る
        </Button>
        <Button variant="outlined" sx={{ m: 1 }} onClick={tweetResult}>
          結果をtweetする
        </Button>
      </Box>
      <Box flexGrow="1" bgcolor="white" overflow="auto">
        <List>
          {answers.map((answer, index) => (
            <>
              <ListItemButton>
                <Typography>{index + 1}.</Typography>
                <Typography m={1}>{answer === quizInfo.musicIds[index] ? "⭕" : "❌"}</Typography>
                <ListItemText>{musicTable[answer].title}</ListItemText>
              </ListItemButton>
              {answer !== quizInfo.musicIds[index] && (
                <ListItem>
                  <ListItemText>正解：{musicTable[quizInfo.musicIds[index]].title}</ListItemText>
                </ListItem>
              )}
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

type PlayingProps = {
  filterText: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currentStage: number;
  lastStage: number;
  submitAnswer: (musicId: string) => void;
};
const Playing: VFC<PlayingProps> = ({ filterText, handleFilterChange, currentStage, lastStage, submitAnswer }) => {
  return (
    <Box height="100%" bgcolor="white" display="flex" flexDirection="column">
      <Box>
        <Typography variant="body1">
          {currentStage + 1} / {lastStage}
        </Typography>
      </Box>
      <Box>
        <Box bgcolor="grey.100" p={1}>
          <MusicPlayer />
        </Box>
      </Box>
      <Box p={2}>
        <OutlinedInput fullWidth placeholder="フィルター" value={filterText} onChange={handleFilterChange} />
      </Box>
      <Box flexGrow="1" overflow="hidden">
        <FilteredMusicList filterText={filterText} handleClick={submitAnswer} />
      </Box>
    </Box>
  );
};

export const Play: VFC = () => {
  const { filterText, handleFilterChange, currentStage, lastStage, submitAnswer, answers, quizInfo, musicTable } =
    usePlayLogic();
  const theme = useTheme();
  return (
    <Page sx={{ bgcolor: "grey.100" }}>
      <Box display="flex" height="100%" justifyContent="center" alignItems="center">
        <Box width={`${theme.breakpoints.values.sm}px`} height="100%">
          {currentStage !== lastStage ? (
            <Playing
              filterText={filterText}
              handleFilterChange={handleFilterChange}
              currentStage={currentStage}
              lastStage={lastStage}
              submitAnswer={submitAnswer}
            />
          ) : (
            <Result answers={answers} quizInfo={quizInfo} musicTable={musicTable} />
          )}
        </Box>
      </Box>
    </Page>
  );
};
