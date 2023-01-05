import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useSidebarStore } from "store/useSidebarStore";
import { AiOutlineClose } from "react-icons/ai";
import { ProductAddForm } from "components/productAddForm";

import * as Styled from "./Sidebar.style";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isOpen, position, onClickToggle } = useSidebarStore();

  return (
    <Styled.Container>
      <Styled.Sidebar width={420} position={position}>
        <Styled.CloseIconWrap
          onClick={() => {
            onClickToggle();
            navigate("/");
          }}
        >
          <AiOutlineClose />
        </Styled.CloseIconWrap>
        <Suspense fallback={<h1>loading</h1>}>
          <Styled.Content>
            <ProductAddForm />
          </Styled.Content>
        </Suspense>
        <div />
      </Styled.Sidebar>
      {isOpen && (
        <Styled.Backdrop
          onClick={() => {
            onClickToggle();
            navigate("/");
          }}
        />
      )}
    </Styled.Container>
  );
};

export default Sidebar;
