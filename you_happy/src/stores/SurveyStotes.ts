import { atom } from "recoil";

export const SurveyStarAtom = atom<number>({
  key: "SurveyStarAtom",
  default: 0,
});
