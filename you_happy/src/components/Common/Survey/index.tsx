import { useEffect, useState } from "react";
import StarRating from "./TextBox";
import { useRecoilState } from "recoil";
import { SurveyStarAtom, SurveyStarTotal } from "../../../stores/SurveyStotes";
import * as S from "./style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useGetQuestion } from "../../../querys/Question/Question.query";
import { Params, useNavigate, useParams } from "react-router-dom";

const Survey = () => {
  const [rates, setRates] = useRecoilState(SurveyStarAtom);
  const navigation = useNavigate();

  const [Text, setText] = useState<string>("");

  const { page }: Params<string> = useParams();

  const { data: getquestionLists } = useGetQuestion({
    page: Number(page),
  });

  const [rate, setRate] = useState<number>(0);
  const [totalRate, setTotalRate] = useRecoilState<number>(SurveyStarTotal); // 총합을 저장할 상태 추가

  const onControllRate = (rateParam: number) => {
    const findRate = rates.find((item) => item.idx === Number(page));

    if (findRate === undefined) {
      setRates((prev) => [...prev, { idx: Number(page), rate: rateParam }]);
    } else {
      const findRateIndex = rates.findIndex(
        (item) => item.idx === Number(page)
      );

      const newRate = {
        idx: Number(page),
        rate: rateParam,
      };

      setRates((prev) => {
        const copyPrev = [...prev];
        copyPrev.splice(findRateIndex, 1, newRate);
        return copyPrev;
      });
    }
  };

  useEffect(() => {
    const findRate = rates.find((item) => item.idx === Number(page));

    if (findRate) {
      setRate(findRate.rate);
    }
  }, [page]);

  useEffect(() => {
    console.log(rates);

    const sum = rates.reduce((total, item) => total + item.rate, 0);
    setTotalRate(sum);
  }, [rates]);

  return (
    <>
      <S.SurveyContainer>
        <S.SurveyPageBox>
          <S.Button
            onClick={() =>
              Number(page) !== 0 && navigation(`/survel/${Number(page) - 1}`)
            }
          >
            <AiOutlineLeft className="icon" />
            이전으로
          </S.Button>
          <S.List>{page}/20</S.List>
          <S.Button onClick={() => navigation("/result")}>
            결과보기
            <AiOutlineRight className="icon" />
          </S.Button>
        </S.SurveyPageBox>
        <S.SurveyList>{getquestionLists?.text}</S.SurveyList>
        <S.SurveyStar>
          {getquestionLists?.bad}
          <div className="test">
            <StarRating
              totalStars={5}
              initialRating={rate}
              onChangeRating={(rating) => {
                onControllRate(rating);
              }}
            />
          </div>
          {getquestionLists?.good}
        </S.SurveyStar>
        <div>Total Rate: {totalRate}</div>
      </S.SurveyContainer>
    </>
  );
};

export default Survey;
