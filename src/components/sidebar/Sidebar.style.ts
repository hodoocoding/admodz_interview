import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f0f5;
`;

type SidebarProps = {
  width: number;
  position: number;
};

export const Sidebar = styled.div<SidebarProps>`
  background-color: #f0f0f5;
  border-left: 1px solid #dae1e7;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${(props) => `${props.width}px`};
  transform: ${(props) => `translatex(${-props.position}px)`};
  height: 100%;
  transition: 0.4s ease;
  color: #202020;
  height: 100%;
  z-index: 99;
`;

export const CloseIconWrap = styled.button`
  position: relative;
  left: -70px;
  top: 10px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #9999dd;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: medium;
  :hover {
    background-color: #2b3445;
    color: #e0e0e0;
  }
`;

export const OpenButton = styled.button`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: 40px 40px 0 20px;
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  margin: 0;
  color: #202020;
`;
