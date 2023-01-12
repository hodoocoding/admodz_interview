import styled from "styled-components";

type ImageProps = {
  src: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  justify-content: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 8px 16px;
  background-color: #6d6bd1;
  border-radius: 8px;
  color: #f0f0f5;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: mintcream;
    color: #9999dd;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ImageWraper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
`;

export const Image = styled.img<ImageProps>`
  width: 380px;
  height: 100%;
`;

export const CloseButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 10px;
  background-color: #dcdcdc;
  border: none;
  opacity: 80%;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`;
