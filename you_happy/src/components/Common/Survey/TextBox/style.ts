import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
  }
`;

export const StarIcon = styled(AiFillStar)`
  font-size: 50px;
  gap: 0px;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;
