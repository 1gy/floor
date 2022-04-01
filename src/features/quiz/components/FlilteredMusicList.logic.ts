import { useMemo } from "react";
import { FlattenMusic, useFlattenMusics } from "../../../hooks/musics";

const normalizeText = (text: string) => {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ァ-ン]/g, (s) => String.fromCodePoint(s.codePointAt(0)! - 0x60));
};

const matchMusic = (filterText: string, music: FlattenMusic) => {
  const text = normalizeText(filterText);
  return normalizeText(music.artist).includes(text) || normalizeText(music.title).includes(text);
};

export const useFilteredMusicList = (filterText: string) => {
  const { musics } = useFlattenMusics();

  const filteredMusics = useMemo(() => {
    return musics.filter((music) => {
      return matchMusic(filterText, music);
    });
  }, [filterText, musics]);

  return { filteredMusics };
};
