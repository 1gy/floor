// Atoms ===================================================

import { atom, useRecoilState } from "recoil";
import { localStorageEffect } from "../libs/storage";

const volumeAtom = atom<number>({
  key: "1gy.floor.volume",
  default: 0.5,
  effects: [localStorageEffect("1gy.floor.volume")],
});

// Hooks ===================================================

export const useVolume = () => useRecoilState(volumeAtom);
