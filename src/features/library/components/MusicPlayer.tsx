import { Box, IconButton, ListItem, ListItemText, Slider, Stack, Toolbar } from "@mui/material";
import { useCallback, VFC } from "react";
import { CloseIcon, PauseIcon, PlayArrowIcon, VolumeDownIcon, VolumeUpIcon } from "../../../components/elements/Icons";
import { useVolume } from "../../../hooks/settings";
import { usePlayingMusic } from "../stores";
import { useAudio } from "./MusicPlayer.logic";

export const MusicPlayer: VFC = () => {
  const [music, setMusic] = usePlayingMusic();
  const [volume, setVolume] = useVolume();
  const { playing, play, pause } = useAudio(music?.source, volume, true);

  const handleVolumeChange = useCallback((event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setVolume(newValue);
    }
  }, []);

  const handleClose = useCallback(() => {
    setMusic(null);
  }, []);

  if (!music) {
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
        <ListItemText secondary={music.artist}>{music.title}</ListItemText>
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
