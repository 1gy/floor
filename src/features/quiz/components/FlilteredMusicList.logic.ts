import { useMemo } from "react";
import { useFlattenMusics } from "../../../hooks/musics";

export const useFilteredMusicList = (filterText: string) => {
  const { musics } = useFlattenMusics();

  const filteredMusics = useMemo(() => {
    return musics.filter((music) => {
      return music.artist.includes(filterText) || music.title.includes(filterText);
    });
  }, [filterText, musics]);

  return { filteredMusics };
};
