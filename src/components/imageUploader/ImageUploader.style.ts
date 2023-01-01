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
`;

export const Label = styled.label`
  display: grid;
  justify-content: center;
  margin-top: 100px;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: black;
  border-radius: 4px;
  color: #e0e0e0;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
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
  right: -40px;
  top: 0px;
  background-color: #dcdcdc;
  border: none;
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
