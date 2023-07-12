import styled from "styled-components";

export const ResultContainer = styled.div``;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 4%;
`;

export const Name = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const Score = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #bd2e9e;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 41%; */
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 41%;
`;
export const ContentTitle = styled.div<{ ismargin: boolean }>`
  display: flex;

  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 60px;
  margin-right: ${(props) => (props.ismargin ? "-435px" : "-415px")};
`;
export const Content = styled.div`
  display: flex;
  width: 41%;
  font-size: 17px;
  color: #424242;
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  /* height: 100px; */
  a {
    color: black;
    text-decoration-line: none;
  }
`;

export const Tong = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 400px;
  }
  /* width: 300px; */
`;
