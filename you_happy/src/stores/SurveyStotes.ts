import { atom } from "recoil";

interface SurveyStar {
  idx: number;
  rate: number;
}

export const SurveyStarAtom = atom<SurveyStar[]>({
  key: "SurveyStarAtom",
  default: [],
});

export const SurveyStarTotal = atom<number>({
  key: "SurveyStarTotal",
  default: 0,
});
