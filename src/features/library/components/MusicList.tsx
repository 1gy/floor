import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useCallback, useRef, VFC } from "react";
import { useVirtual } from "react-virtual";
import { useFlattenMusics } from "../../../hooks/musics";
import { usePlayingMusic } from "../stores";

export const MusicList: VFC = () => {
  const { musics } = useFlattenMusics();
  const containerRef = useRef<HTMLUListElement>(null);
  const virtualizer = useVirtual({
    size: musics.length,
    parentRef: containerRef,
    estimateSize: useCallback(() => 70, []),
  });
  const [music, setMusic] = usePlayingMusic();

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
            onClick={() => setMusic(musics[row.index])}
            selected={musics[row.index].source === music?.source}
          >
            <ListItemText
              secondary={musics[row.index].artist}
              sx={{ textOverflow: "ellipsis" }}
              primaryTypographyProps={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
              secondaryTypographyProps={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
            >
              {musics[row.index].title}
            </ListItemText>
          </ListItemButton>
        ))}
      </Box>
    </List>
  );
};
