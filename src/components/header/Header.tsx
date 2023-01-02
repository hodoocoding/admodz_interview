import { Sidebar } from "components/sidebar";
import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Title>Amondz 인터뷰 프로젝트</Styled.Title>
      <Sidebar width={320}>123</Sidebar>
    </Styled.Header>
  );
};

export default Header;
