export type QuizInfo =
  | {
      type?: undefined;
      musicIds: string[];
    }
  | {
      type: "contests";
      contestIds: string[];
      musicIds: string[];
    };

export const encodeQuizInfo = (quizInfo: QuizInfo): string => {
  return btoa(JSON.stringify(quizInfo));
};

export const decodeQuizInfo = (quizInfoText: string): QuizInfo => {
  return JSON.parse(atob(quizInfoText));
};
