import { Box, IconButton } from "@mui/material";
import { VFC } from "react";
import { PauseIcon, PlayArrowIcon } from "../../../components/elements/Icons";
import { usePlayingSound } from "../stores";
import { useAudio } from "./SoundPlayer.logic";

export const SoundPlayer: VFC = () => {
  const [sound] = usePlayingSound();
  const { playing, currentTime, play, pause } = useAudio(sound?.source);

  if (!sound) {
    return <></>;
  }

  return (
    <Box>
      <IconButton onClick={() => (playing ? pause() : play())}>
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
    </Box>
  );
};
