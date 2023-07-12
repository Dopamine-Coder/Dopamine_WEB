import axios from "axios";
import { QuestionListType, QuestionPage } from "../../types/Question";
import { SERVER } from "../../config/config.json";

class Question {
  public async QuestionList({ page }: QuestionPage): Promise<QuestionListType> {
    const { data } = await axios.get(`${SERVER}/page/${page}`, {});
    return data;
  }
}

export default new Question();
