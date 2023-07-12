import * as H from "./style";
import Logo from "../../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <H.HeaderContainer>
      <H.Header>
        <H.LogoBox>
          <H.Logo>
            <img src={Logo} onClick={() => navigate("/")} />
          </H.Logo>
        </H.LogoBox>

        <H.PageContainer>
          <H.TestPageContainer onClick={() => navigate("/survel")}>
            행복 테스트
          </H.TestPageContainer>
          <H.PostPageContainer>행복 게시판</H.PostPageContainer>
        </H.PageContainer>
      </H.Header>
    </H.HeaderContainer>
  );
};
export default Header;
