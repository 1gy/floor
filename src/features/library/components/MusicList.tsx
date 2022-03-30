import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useCallback, useMemo, useRef, VFC } from "react";
import { useVirtual } from "react-virtual";
import type { MusicInfo } from "../../../assets/data";
import { Loadable } from "../../../libs/loadable";
import { usePlayingMusic } from "../stores";

const dataModule = new Loadable(import("../../../assets/data"));

type FlattenMusic = MusicInfo & {
  contest: string;
  music_id: string;
};

const useFlattenMusics = (): FlattenMusic[] => {
  return useMemo(() => {
    return dataModule
      .getValue()
      .contests.map((contest) =>
        contest.musics.map<FlattenMusic>((music, index) => ({
          ...music,
          contest: contest.id,
          music_id: `${contest.id}_${index}`,
        }))
      )
      .flat();
  }, [dataModule]);
};

export const MusicList: VFC = () => {
  const musics = useFlattenMusics();
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
