import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useCallback, useMemo, useRef, VFC } from "react";
import { useVirtual } from "react-virtual";
import { contests, SoundInfo } from "../../../assets/data";

type FlattenSound = SoundInfo & {
  contest: string;
};

const useFlattenSounds = (): FlattenSound[] => {
  return useMemo(() => {
    return Object.entries(contests)
      .map(([key, contest]) => {
        return contest.sounds.map<FlattenSound>((sound) => ({ ...sound, contest: key }));
      })
      .flat();
  }, [contests]);
};

export const SoundList: VFC = () => {
  const sounds = useFlattenSounds();
  const containerRef = useRef<HTMLUListElement>(null);
  const virtualizer = useVirtual({
    size: sounds.length,
    parentRef: containerRef,
    estimateSize: useCallback(() => 70, []),
  });

  return (
    <List ref={containerRef} sx={{ width: "100%", height: "100%", overflow: "auto" }}>
      <Box sx={{ width: "100%", height: virtualizer.totalSize, position: "relative" }}>
        {virtualizer.virtualItems.map((row) => (
          <ListItemButton
            key={row.key}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${row.size}px`,
              transform: `translateY(${row.start}px)`,
            }}
          >
            <ListItemText secondary={sounds[row.index].artist}>{sounds[row.index].title}</ListItemText>
          </ListItemButton>
        ))}
      </Box>
    </List>
  );
};
