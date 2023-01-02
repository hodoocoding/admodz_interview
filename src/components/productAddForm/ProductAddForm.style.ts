import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 1em;
    height: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 420px;
  margin-top: 40px;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  :first-child {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

export const TextInput = styled.input`
  width: 90%;
  margin-top: 8px;
  padding: 16px;
  background-color: #f7f7fa;
  border-radius: 12px;
  border: 1px solid #f7f7fa;
`;

export const Selectd = styled.select`
  display: black;
  width: 90%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #6d6bd1;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: #5553c4;
  }

  &:disabled {
    background-color: #e2e2ea;
  }
`;
