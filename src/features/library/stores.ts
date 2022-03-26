import { atom, useRecoilState } from "recoil";
import { SoundInfo } from "../../assets/data";

const playingSoundAtom = atom<SoundInfo | null>({ key: "floor.library.playingSound", default: null });

export const usePlayingSound = () => useRecoilState(playingSoundAtom);
