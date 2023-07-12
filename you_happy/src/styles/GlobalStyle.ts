import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Yeongdeok from "../font/YeongdeokSnowCrab.ttf";

const GlobalStyle = createGlobalStyle`
 
  @font-face {
  font-family: "yeongdeok";
  src: url(${Yeongdeok}) format(ttf) !important;
  }

  * {
    font-family: "yeongdeok";
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
     }
    ${reset}
`;

export default GlobalStyle;
