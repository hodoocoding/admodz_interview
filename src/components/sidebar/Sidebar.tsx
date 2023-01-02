import React, { useState, ReactNode } from "react";
import { useSidebarStore } from "store/useSidebarStore";
import { AiOutlineClose } from "react-icons/ai";

import * as Styled from "./Sidebar.style";

type Sidebar = {
  width: number;
  children: ReactNode;
};

const Sidebar = ({ width = 320, children }: Sidebar) => {
  const { isOpen, position, onClickToggle } = useSidebarStore();
  console.log(position);

  return (
    <Styled.Container>
      <Styled.Sidebar width={width} position={position}>
        {isOpen && (
          <Styled.CloseIconWrap onClick={() => onClickToggle()}>
            <AiOutlineClose />
          </Styled.CloseIconWrap>
        )}

        <Styled.Content>{children}</Styled.Content>
      </Styled.Sidebar>
    </Styled.Container>
  );
};

export default Sidebar;
