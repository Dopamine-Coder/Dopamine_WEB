import React, { useState } from "react";
import * as T from "./style";

import { Params, useNavigate, useParams } from "react-router-dom";

interface RatingProps {
  totalStars: number;
  initialRating?: number;
  onChangeRating: (rating: number) => void;
}

const StarRating: React.FC<RatingProps> = ({
  totalStars,
  initialRating = 0,
  onChangeRating,
}) => {
  const [rating, setRating] = useState(initialRating);

  const { page }: Readonly<Params<"page">> = useParams();

  const navigation = useNavigate();

  return (
    <T.StarBox>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <T.StarIcon
            key={starValue}
            onClick={() => {
              navigation(`/survel/${Number(page) + 1}`);
              onChangeRating(starValue);
            }}
            style={{
              cursor: "pointer",
              color: starValue <= rating ? "gold" : "#D9D9D9",
              fontSize: "30pxs",
            }}
          ></T.StarIcon>
        );
      })}
    </T.StarBox>
  );
};

export default StarRating;
