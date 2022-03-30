import { atom, useRecoilState } from "recoil";
import { MusicInfo } from "../../assets/data";

const playingMusicAtom = atom<MusicInfo | null>({ key: "floor.library.playingMusic", default: null });

export const usePlayingMusic = () => useRecoilState(playingMusicAtom);
