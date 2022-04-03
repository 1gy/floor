import { useMemo } from "react";
import { MusicInfo } from "../assets/data";
import { Loadable } from "../libs/loadable";

const dataModule = new Loadable(import("../assets/data"));

export type FlattenMusic = MusicInfo & {
  contest: string;
  musicId: string;
};

export const useContests = () => {
  const contests = dataModule.getValue().contests;
  return { contests };
};

export const useFlattenMusics = () => {
  const contests = dataModule.getValue().contests;
  return useMemo(() => {
    const musics = contests
      .map((contest) =>
        contest.musics.map<FlattenMusic>((music, index) => ({
          ...music,
          contest: contest.id,
          musicId: `${contest.id}_${index}`,
        }))
      )
      .flat();
    const musicTable = Object.fromEntries(musics.map((music) => [music.musicId, music]));
    return {
      musics,
      musicTable,
    };
  }, [contests]);
};
