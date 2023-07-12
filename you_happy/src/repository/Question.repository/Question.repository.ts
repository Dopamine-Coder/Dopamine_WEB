// import axios from "axios";
import {
  QuestionListType,
  QuestionPage,
  QuestionResponseType,
  StarTotal,
} from "../../types/Question";
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

  //   QuestionStarTotal = async (request: StarTotal) => {
  //     try {
  //       const { data }: { data: QuestionResponseType } = await axios.post(
  //         `${config.SERVER}/api/score`,
  //         request,
  //         {}
  //       );
  //       return data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  public async postStarTotal(): Promise<QuestionResponseType> {
    const { data } = await axios.get(`${config.SERVER}/api/score?data=70`);
    console.log(data);
    return data;
  }
}

export default new QuestionRepository();
