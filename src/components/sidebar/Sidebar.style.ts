import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => `${props.width}px`};
  height: 100%;
  /* padding: 50px 20px; */
  transform: ${(props) => `translatex(${-props.position}px)`};
  color: #202020;
  z-index: 99;
  transition: 0.8s ease;
`;

export const CloseIconWrap = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  color: #2b3445;
  border: none;
  border-radius: 50%;
  background-color: #f0f0f5;
  font-size: medium;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 98;
`;

export const OpenButton = styled.button`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: 10px 10px 0 20px;
  position: relative;
  width: 100%;
  height: 100;
  margin-top: 130px;
`;

export const IconWrapper = styled.div`
  margin: 0;
  color: #202020;
`;
