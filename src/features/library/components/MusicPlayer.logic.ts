import { useCallback, useEffect, useMemo, useState } from "react";

const useUpdate = () => {
  const [, update] = useState(false);
  return useCallback(() => update((prev) => !prev), []);
};

export const useAudio = (url: string | undefined, volume: number, autoStart: boolean) => {
  const audio = useMemo(() => {
    return new Audio(url);
  }, [url]);
  const update = useUpdate();

  useEffect(() => {
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
  };
};
