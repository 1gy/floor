import { Box, IconButton, ListItem, ListItemText, Slider, Stack, Toolbar } from "@mui/material";
import { useCallback, useState, VFC } from "react";
import { CloseIcon, PauseIcon, PlayArrowIcon, VolumeDownIcon, VolumeUpIcon } from "../../../components/elements/Icons";
import { usePlayingSound } from "../stores";
import { useAudio } from "./SoundPlayer.logic";

export const SoundPlayer: VFC = () => {
  const [sound, setSound] = usePlayingSound();
  const [volume, setVolume] = useState(0.5);
  const { playing, play, pause } = useAudio(sound?.source, volume);

  const handleVolumeChange = useCallback((event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setVolume(newValue);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSound(null);
  }, []);

  if (!sound) {
    return <></>;
  }

  return (
    <Box bgcolor="grey.100" sx={{ pr: 1 }}>
      <ListItem
        sx={{ pt: 1, pl: 2 }}
        disableGutters
        secondaryAction={
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      >
        <ListItemText secondary={sound.artist}>{sound.title}</ListItemText>
      </ListItem>
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
    </Box>
  );
};
