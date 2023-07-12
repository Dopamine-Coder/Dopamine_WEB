// import axios from "axios";
import { QuestionListType, QuestionPage } from "../../types/Question";
// import { SERVER } from "../../config/config.json";
// // import { SERVER } from "../../config/config.json";

// class QuestionRepository {
//   public async QuestionList({ page }: QuestionPage): Promise<QuestionListType> {
//     const { data } = await axios.get(`${SERVER}/page/${page}`, {});
//     console.log(data);
//     return data;
//   }
// }

// export default new QuestionRepository();

import axios from "axios";
import config from "../../config/config.json";
// import { SERVER } from "../../config/config.json";

class QuestionRepository {
  public async QuestionList({ page }: QuestionPage): Promise<QuestionListType> {
    const { data } = await axios.get(`${config.SERVER}/page/${page}`);
    console.log(data);
    return data;
  }
}

export default new QuestionRepository();
