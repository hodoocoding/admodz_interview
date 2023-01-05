import { Link, useLocation } from "react-router-dom";
import { useSidebarStore } from "store/useSidebarStore";
import { Sidebar } from "components/sidebar";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useLocation();
  const { onClickToggle, isOpen } = useSidebarStore();

  return (
    <Styled.Header>
      <Styled.TitleWrap>
        <Link to="/">
          <Styled.Title>Amondz 인터뷰 프로젝트</Styled.Title>
        </Link>
        <Styled.MenuWrap>
          <Styled.Menu
            isActive={location.pathname === "/"}
            onClick={() => {
              onClickToggle();
            }}
          >
            상품등록
          </Styled.Menu>
        </Styled.MenuWrap>
      </Styled.TitleWrap>
      {isOpen && <Sidebar />}
    </Styled.Header>
  );
};

export default Header;
