import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { QuestionPage, StarTotal } from "../../types/Question";
import QuestionRepository from "../../repository/Question.repository/Question.repository";

export const useGetQuestion = ({ page }: QuestionPage) =>
  useQuery(["/page", page], () => QuestionRepository.QuestionList({ page }), {
    enabled: !!page,
  });

export const useGetStarTotal = (): UseQueryResult<StarTotal> =>
  useQuery(["/api/score?data=70"], () => QuestionRepository.postStarTotal());
