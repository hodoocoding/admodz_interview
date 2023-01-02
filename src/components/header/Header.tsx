import { Sidebar } from "components/sidebar";
import { Link, useLocation } from "react-router-dom";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useLocation();
  return (
    <Styled.Header>
      <Styled.TitleWrap>
        <Link to="/">
          <Styled.Title>Amondz 인터뷰 프로젝트</Styled.Title>
        </Link>
        <Styled.MenuWrap>
          <Link to="/products">
            <Styled.Menu isActive={location.pathname === "/products"}>
              상품목록
            </Styled.Menu>
          </Link>
          <Link to="/">
            <Styled.Menu isActive={location.pathname === "/"}>
              상품등록
            </Styled.Menu>
          </Link>
        </Styled.MenuWrap>
      </Styled.TitleWrap>
      <Sidebar width={320}>123</Sidebar>
    </Styled.Header>
  );
};

export default Header;
