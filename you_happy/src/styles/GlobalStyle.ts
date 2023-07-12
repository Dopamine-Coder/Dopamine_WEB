import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// import "./font.css";
// import test from "../font/"
// import YeongdeokSnowCrab from "../font/"
import Yeongdeok from "../font/YeongdeokSnowCrab.ttf";
// import Yeongdeok from "../../assets/font/YeongdeokSnowCrab.ttf";
// import Yeongdeok from "."

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
