import { useNavigate } from "@tanstack/react-location";
import { useCallback } from "react";
import { FlattenMusic, useFlattenMusics } from "../../../hooks/musics";
import { randRange } from "../../../libs/rand";
import { encodeQuizInfo, QuizInfo } from "./quiz";

const createRandomQuiz = (musics: FlattenMusic[]): QuizInfo => {
  const size = 10;

  const quizSet = new Set<string>();
  while (quizSet.size < size) {
    const index = randRange(0, musics.length);
    quizSet.add(musics[index].musicId);
  }
  return {
    musicIds: Array.from(quizSet),
  };
};

export const useRandomQuiz = () => {
  const navigate = useNavigate();
  const { musics } = useFlattenMusics();
  const play = useCallback(() => {
    const info = encodeQuizInfo(createRandomQuiz(musics));
    navigate({ to: `/play/${info}` });
  }, [musics, navigate]);
  return {
    play,
  };
};

export const useSelectContests = () => {
  const navigate = useNavigate();
  const go = useCallback(() => {
    navigate({ to: "/contests" });
  }, [navigate]);
  return {
    go,
  };
};
