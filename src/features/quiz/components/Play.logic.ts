import { useMatch, useNavigate } from "@tanstack/react-location";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useAudio } from "../../../hooks/audio";
import { useFlattenMusics } from "../../../hooks/musics";
import { useVolume } from "../../../hooks/settings";
import { usePlayingMusic } from "../../library/stores";
import { decodeQuizInfo, QuizInfo } from "./quiz";

export const useMusicPlayerLogic = () => {
  const [music, _] = usePlayingMusic();
  const [volume, setVolume] = useVolume();
  const { playing, play, pause, canUseVolume } = useAudio(music?.source, volume, true);

  const handleVolumeChange = useCallback((_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setVolume(newValue);
    }
  }, []);

  return {
    music,
    playing,
    play,
    pause,
    canUseVolume,
    volume,
    handleVolumeChange,
    canUseVolume,
  };
};

export const useTweetResult = (answers: string[], quizInfo: QuizInfo) => {
  return useCallback(() => {
    const mark = (index: number) => (answers[index] === quizInfo.musicIds[index] ? "⭕" : "❌");
    let text = "FLOOR QUIZ\n";
    text += `1) ${mark(0)}　2) ${mark(1)}\n`;
    text += `3) ${mark(2)}　4) ${mark(3)}\n`;
    text += `5) ${mark(4)}　6) ${mark(5)}\n`;
    text += `7) ${mark(6)}　8) ${mark(7)}\n`;
    text += `9) ${mark(8)}　10) ${mark(9)}\n`;
    text += document.location.href;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(text)}`;
    window.open(tweetUrl, "_blank");
  }, [answers, quizInfo]);
};

export const useBack = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate({ to: "/" });
  }, []);
};

export const usePlayLogic = () => {
  // quiz info
  const {
    params: { info },
  } = useMatch();
  const quizInfo = decodeQuizInfo(info);

  // music data
  const { musicTable } = useFlattenMusics();
  const [_, setMusic] = usePlayingMusic();

  // filter
  const [filterText, setFilterText] = useState("");
  const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }, []);

  // stage
  const [currentStage, setCurrentStage] = useState(0);
  const lastStage = quizInfo.musicIds.length;

  // answers
  const [answers, setAnswers] = useState<string[]>([]);

  // action
  const submitAnswer = useCallback((musicId: string) => {
    setCurrentStage((stage) => stage + 1);
    setAnswers((answers) => [...answers, musicId]);
  }, []);

  useEffect(() => {
    setMusic(musicTable[quizInfo.musicIds[currentStage]]);
    return () => {
      /** */
    };
  }, [currentStage]);

  if (import.meta.env.DEV) {
    useEffect(() => {
      // debug
      console.log(answers.map((musicId) => musicTable[musicId].title));
      console.log(quizInfo.musicIds.map((musicId) => musicTable[musicId].title));
      return () => {
        /** */
      };
    }, [JSON.stringify(quizInfo.musicIds), currentStage, JSON.stringify(answers)]);
  }

  return {
    filterText,
    handleFilterChange,
    currentStage,
    lastStage,
    submitAnswer,
    answers,
    quizInfo,
    musicTable,
  };
};
