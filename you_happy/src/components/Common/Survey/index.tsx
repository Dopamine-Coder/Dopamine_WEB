import { useEffect, useState } from "react";
import StarRating from "./TextBox";
import { useRecoilState } from "recoil";
import { SurveyStarAtom } from "../../../stores/SurveyStotes";
// import { useEffect } from "react";
import * as S from "./style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Survey = () => {
  const [Page, setPage] = useRecoilState<number>(SurveyStarAtom);
  const [Text, setText] = useState<string>("");
  const handlePageChange = (pagelist: any) => {
    setPage(pagelist);
  };
  const [salaryGrade, setsalaryGrade] = useState<number>(0);

  //   let test = "";

  //   const hendleChangeText = () => {
  //     if (Page === 20) {
  //       navigator;
  //     }
  //   };

  //   if()

  //   useEffect(() => {
  //     console.log(salaryGrade++);
  //   }, [salaryGrade]);

  return (
    <>
      <S.SurveyContainer>
        <S.SurveyPageBox>
          <S.Button onClick={() => handlePageChange(Page - 1)}>
            <AiOutlineLeft className="icon" />
            이전으로
          </S.Button>
          <S.List>{Page}/20</S.List>
          <S.Button>
            결과보기
            <AiOutlineRight className="icon" />
          </S.Button>
        </S.SurveyPageBox>
        <S.SurveyList>어쩌구저ㅂ쩌구</S.SurveyList>
        <S.SurveyStar>
          <StarRating totalStars={5} initialRating={salaryGrade} />
        </S.SurveyStar>
      </S.SurveyContainer>
    </>
  );
};

export default Survey;
