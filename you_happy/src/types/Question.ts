export interface QuestionListType {
  text: string;
  page: number;
  good: string;
  bad: string;
}

export interface StarTotal {
  score: number;
  advice: string;
  link: string;
  title: string;
}

export interface QuestionResponseType {
  status: number;
}

export interface QuestionPage {
  page: number;
}
