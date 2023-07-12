import { useGetStarTotal } from "../../../querys/Question/Question.query";
import * as R from "./style";
import im from "../../../assets/img/im.jpg";
import tong from "../../../assets/img/tong.png";
const Result = () => {
  const { data: getStarTotal } = useGetStarTotal();

  return (
    <div>
      <R.ResultContainer>
        <R.TitleBox>
          <R.Name>해리모님은</R.Name>
          <R.Score>{getStarTotal?.score}점,행복을 추천 해드릴게요</R.Score>
        </R.TitleBox>
        <R.ContentContainer>
          <R.ContentTitle ismargin={true}>{getStarTotal?.title}</R.ContentTitle>
        </R.ContentContainer>
        <R.TitleContainer>
          <R.Content className="test">{getStarTotal?.advice}</R.Content>
        </R.TitleContainer>
        <R.ContentContainer>
          <R.ContentTitle ismargin={false}>당신을 위한 TIP!</R.ContentTitle>
        </R.ContentContainer>
        <R.TitleContainer>
          <div>
            <img src={im}></img>
          </div>
        </R.TitleContainer>
        <R.Link>
          <a href="https://www.tripadvisor.co.kr/Attractions-g294196-Activities-c47-t76-South_Korea.html">
            산책로 추천 : {getStarTotal?.link}
          </a>
        </R.Link>
        <R.ContentContainer>
          <R.ContentTitle ismargin={true}>나와 같은 사람들은?</R.ContentTitle>
        </R.ContentContainer>
        <R.Tong>
          <img src={tong} />
        </R.Tong>
      </R.ResultContainer>
    </div>
  );
};

export default Result;
