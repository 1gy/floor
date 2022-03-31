export type QuizInfo = {
  musicIds: string[];
};

export const encodeQuizInfo = (quizInfo: QuizInfo): string => {
  return btoa(JSON.stringify(quizInfo));
};

export const decodeQuizInfo = (quizInfoText: string): QuizInfo => {
  return JSON.parse(atob(quizInfoText));
};
