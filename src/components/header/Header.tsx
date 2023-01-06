import { Link, useLocation } from "react-router-dom";
import { useSidebarStore } from "store/useSidebarStore";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useLocation();
  const { onClickToggle } = useSidebarStore();

  return (
    <Styled.Header>
      <Styled.TitleWrap>
        <Link to="/">
          <Styled.Title>Amondz 인터뷰 프로젝트</Styled.Title>
        </Link>
        <Styled.MenuWrap>
          <Link to="/product" state={{ background: location }}>
            <Styled.Menu
              isActive={location.pathname === "/product"}
              onClick={() => {
                onClickToggle();
              }}
            >
              상품등록
            </Styled.Menu>
          </Link>
        </Styled.MenuWrap>
      </Styled.TitleWrap>
    </Styled.Header>
  );
};

export default Header;
