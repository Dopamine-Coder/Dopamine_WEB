import styled from "styled-components";

export const StartPageContainer = styled.div``;
export const StartTitleBox = styled.div`
  margin-top: 5%;
`;
export const StartExplainBox = styled.div`
  margin-top: 3.5%;
`;

export const Text = styled.text<{ isText: boolean }>`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.isText ? "26px" : "16px")};
  color: ${(props) => (props.isText ? "black" : "gray")};
  font-weight: ${(props) => (props.isText ? "bold" : "")};
  margin-bottom: ${(props) => (props.isText ? "" : "5px")};
`;
export const TextBox = styled.div`
  margin-bottom: 20px;
`;

export const StartInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21%;
    height: 60px;
    background-color: #f5f5f5;
    border: 0;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  input::-webkit-input-placeholder {
    text-align: center;
  }
`;
export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21%;
  height: 60px;
  background-color: #f5f5f5;
  border: 0;
  border-radius: 10px;
`;
export const Button = styled.button`
  width: 21%;
  height: 60px;
  background-color: #fff1a7;
  border: 0;
  border-radius: 10px;
`;
