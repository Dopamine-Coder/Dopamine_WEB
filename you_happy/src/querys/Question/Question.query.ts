import { useQuery } from "@tanstack/react-query";
import { QuestionPage } from "../../types/Question";
import QuestionRepository from "../../repository/Question.repository/Question.repository";

export const useGetQuestion = ({ page }: QuestionPage) =>
  useQuery(["/page", page], () => QuestionRepository.QuestionList({ page }), {
    enabled: !!page,
  });
