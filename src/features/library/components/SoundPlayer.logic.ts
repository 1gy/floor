import { useCallback, useEffect, useMemo, useState } from "react";

const useUpdate = () => {
  const [, update] = useState(false);
  return useCallback(() => update((prev) => !prev), []);
};

export const useAudio = (url: string | undefined) => {
  const audio = useMemo(() => {
    return new Audio(url);
  }, [url]);
  const update = useUpdate();

  useEffect(() => {
    audio.volume = 0.1;
    audio.addEventListener("play", update);
    audio.addEventListener("pause", update);
    audio.addEventListener("timeupdate", update);

    return () => {
      audio.pause();
      audio.removeEventListener("play", update);
      audio.removeEventListener("pause", update);
      audio.removeEventListener("timeupdate", update);
    };
  }, [audio]);

  const play = useCallback(() => {
    audio.play();
  }, [audio]);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  return {
    playing: !audio.paused,
    currentTime: audio.currentTime,
    play,
    pause,
  };
};
