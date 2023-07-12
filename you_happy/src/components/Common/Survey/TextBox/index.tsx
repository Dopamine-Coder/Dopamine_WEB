import React, { useState } from "react";
import * as T from "./style";
import { useRecoilState } from "recoil";
import { SurveyStarAtom } from "../../../../stores/SurveyStotes";

interface RatingProps {
  totalStars: number;
  initialRating?: number;
  onChangeRating?: (rating: number) => void;
}

const StarRating: React.FC<RatingProps> = ({
  totalStars,
  initialRating = 0,
  onChangeRating,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [Page, setPage] = useRecoilState<number>(SurveyStarAtom);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onChangeRating) {
      onChangeRating(selectedRating);
    }
  };

  const handlePageChange = (pagelist: any) => {
    setPage(pagelist);
  };

  return (
    <T.StarBox>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <T.StarIcon
            key={starValue}
            onClick={() => {
              handleStarClick(starValue);
              handlePageChange(Page + 1);
            }}
            style={{
              cursor: "pointer",
              color: starValue <= rating ? "gold" : "#D9D9D9",
              fontSize: "30pxs",
            }}
          >
            ★
          </T.StarIcon>
        );
      })}
    </T.StarBox>
  );
};

export default StarRating;
