import { useNavigate } from "@tanstack/react-location";
import { useCallback, useMemo } from "react";
import { FlattenMusic, useContests, useFlattenMusics } from "../../../hooks/musics";
import { useSet } from "../../../hooks/set";
import { randRange } from "../../../libs/rand";
import { encodeQuizInfo, QuizInfo } from "./quiz";

const quizSize = 10;

const createRandomQuiz = (musics: FlattenMusic[], contestIds: string[]): QuizInfo => {
  const quizSet = new Set<string>();
  while (quizSet.size < quizSize) {
    const index = randRange(0, musics.length);
    quizSet.add(musics[index].musicId);
  }
  return {
    type: "contests",
    musicIds: Array.from(quizSet),
    contestIds,
  };
};

export const useRandomQuiz = (contestIds: string[]) => {
  const navigate = useNavigate();
  const { musics: originalMusics } = useFlattenMusics();
  const musics = useMemo(() => {
    const contestIdSet = new Set(contestIds);
    return originalMusics.filter((musics) => contestIdSet.has(musics.contest));
  }, [originalMusics, contestIds]);

  const canPlay = useMemo(() => {
    return quizSize <= musics.length;
  }, [musics]);

  const play = useCallback(() => {
    const info = encodeQuizInfo(createRandomQuiz(musics, contestIds));
    navigate({ to: `/play/${info}` });
  }, [musics, contestIds, navigate]);

  return {
    canPlay,
    play,
  };
};

export const useSelectorLogic = () => {
  const { set, has, toggle, add, remove } = useSet<string>();
  const { contests } = useContests();

  const selectAll = useCallback(() => {
    contests.map((contest) => add(contest.id));
  }, [contests, add]);

  const unselectAll = useCallback(() => {
    contests.map((contest) => remove(contest.id));
  }, [contests, remove]);

  const selectedContests = useMemo(() => Array.from(set), [set]);

  return {
    contests,
    has,
    toggle,
    selectAll,
    unselectAll,
    selectedContests,
  };
};
