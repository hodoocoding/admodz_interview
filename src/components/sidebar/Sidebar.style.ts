import styled from "styled-components";

export const Container = styled.div`
  background-color: #e3ecf1;
`;

type SidebarProps = {
  width: number;
  position: number;
};

export const Sidebar = styled.div<SidebarProps>`
  background-color: #e3ecf1;
  border-left: 4px solid #202020;
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

export const Button = styled.button`
  position: relative;
  left: -200px;
  top: 10px;
  width: 40px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 2px solid #202020;
  border-radius: 40px;
  overflow: hidden;
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
