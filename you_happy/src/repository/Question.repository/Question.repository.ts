import {
  QuestionListType,
  QuestionPage,
  QuestionResponseType,
} from "../../types/Question";
import axios from "axios";
import config from "../../config/config.json";

class QuestionRepository {
  public async QuestionList({ page }: QuestionPage): Promise<QuestionListType> {
    const { data } = await axios.get(`${config.SERVER}/page/${page}`);
    console.log(data);
    return data;
  }

  public async postStarTotal(): Promise<QuestionResponseType> {
    const { data } = await axios.get(`${config.SERVER}/api/score?data=70`);
    console.log(data);
    return data;
  }
}

export default new QuestionRepository();
