import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div>
      <S.StartPageContainer>
        <S.StartTitleBox>
          <S.Text isText={true}>당신은 행복하신가요?</S.Text>
          <S.Text isText={true}>새로운 행복을 원하시나요?</S.Text>
        </S.StartTitleBox>
        <S.StartExplainBox>
          <S.TextBox>
            <S.Text isText={false}>당신은 언제 행복함을 느끼나요?</S.Text>
            <S.Text isText={false}>"행복"이란 흔이 쓰이는 단어이지만</S.Text>
            <S.Text isText={false}>쉽게 정의하기는힘든데요.</S.Text>
          </S.TextBox>
          <S.TextBox>
            <S.Text isText={false}>어쩌면 내 주변과 매일 있는 일상이</S.Text>
            <S.Text isText={false}>행복을 주는 선물일 수도 있습니다.</S.Text>
          </S.TextBox>

          <S.TextBox>
            <S.Text isText={false}>작은 노려으로 만드는 일상의 행복,</S.Text>
            <S.Text isText={false}>
              테스트로 행복 지수를 알아보고 당신에게 딱 맞는 행복해지는 방법을
              확인해보세요
            </S.Text>
          </S.TextBox>
        </S.StartExplainBox>
        <S.StartInputBox>
          <input placeholder="닉네임을 입력해 주세요" className="test"></input>
          <S.Button onClick={() => navigate("/survel/1")}>
            테스트 시작하기
          </S.Button>
        </S.StartInputBox>
      </S.StartPageContainer>
    </div>
  );
};

export default Start;
