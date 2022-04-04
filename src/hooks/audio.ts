import { useCallback, useEffect, useMemo, useState } from "react";

const useUpdate = () => {
  const [, update] = useState(false);
  return useCallback(() => update((prev) => !prev), []);
};

const checkCanUseVolume = () => {
  const userAgent = window.navigator.userAgent.toLocaleLowerCase();
  if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
    return false;
  }
  return true;
};

export const useAudio = (url: string | undefined, volume: number, autoStart: boolean) => {
  const audio = useMemo(() => {
    return new Audio(url);
  }, [url]);
  const canUseVolume = useMemo(() => checkCanUseVolume(), []);
  const update = useUpdate();

  useEffect(() => {
    audio.volume = 0;
    audio.volume = volume;
    audio.addEventListener("play", update);
    audio.addEventListener("pause", update);
    if (autoStart) {
      audio.play().catch((e) => {
        // see: Autoplay policy
      });
    }

    return () => {
      audio.pause();
      audio.removeEventListener("play", update);
      audio.removeEventListener("pause", update);
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  const play = useCallback(() => {
    audio.play();
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  return {
    playing: !audio.paused,
    play,
    pause,
    canUseVolume,
  };
};
