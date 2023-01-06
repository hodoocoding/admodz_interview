import React, { Suspense, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSidebarStore } from "store/useSidebarStore";
import { AiOutlineClose } from "react-icons/ai";
import { ProductAddForm } from "components/productAddForm";
import { ProductUpdateForm } from "components/productUpdateForm ";

import * as Styled from "./Sidebar.style";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const { isOpen, position, onClickToggle } = useSidebarStore();

  // 새로고침 막기 변수
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

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
            {pathname === "/product" ? (
              <ProductAddForm />
            ) : (
              <ProductUpdateForm />
            )}
          </Styled.Content>
        </Suspense>
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
