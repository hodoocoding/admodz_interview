import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f5;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #9999dd;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

type Menu = {
  isActive: boolean;
};

export const Menu = styled.p<Menu>`
  font-size: 1.6rem;
  color: ${(props) => (props.isActive ? "#9999dd" : "#7d879c")};
  cursor: pointer;
`;
