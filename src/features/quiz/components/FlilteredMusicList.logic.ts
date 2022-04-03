import { useMemo } from "react";
import { FlattenMusic, useFlattenMusics } from "../../../hooks/musics";
import { QuizInfo } from "./quiz";

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

export const useFilteredMusicList = (filterText: string, quizInfo: QuizInfo) => {
  const { musics: originalMusics } = useFlattenMusics();
  const musics = useMemo(() => {
    if (quizInfo.type == undefined) {
      return originalMusics;
    } else if (quizInfo.type === "contests") {
      const contestSet = new Set(quizInfo.contestIds);
      return originalMusics.filter((music) => contestSet.has(music.contest));
    }
    return originalMusics.filter((music) => music.contest);
  }, [originalMusics, quizInfo]);

  const filteredMusics = useMemo(() => {
    return musics.filter((music) => {
      return matchMusic(filterText, music);
    });
  }, [filterText, musics]);

  return { filteredMusics };
};
