import React, { useState, ReactNode } from "react";

import * as Styled from "./Sidebar.style";

type Sidebar = {
  width: number;
  children: ReactNode;
};

const Sidebar = ({ width = 320, children }: Sidebar) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPositon] = useState<number>(-width);

  // sidebar 토글 함수
  const onClickToggleSidebar = () => {
    if (position < 0) {
      setPositon(0);
      setIsOpen(true);
    } else {
      setPositon(-width);
      setIsOpen(false);
    }
  };

  return (
    <Styled.Container>
      <Styled.Sidebar width={width} position={position}>
        <Styled.Button onClick={() => onClickToggleSidebar()}>
          {isOpen ? <span>X</span> : <span>OPEN</span>}
        </Styled.Button>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Sidebar>
    </Styled.Container>
  );
};

export default Sidebar;
