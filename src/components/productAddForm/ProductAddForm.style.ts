import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 380px;
  margin-bottom: 120px;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  padding: 10px;
  border: none;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

export const TextInput = styled.input`
  width: 90%;
  margin-top: 10px;
  padding: 16px;
  background-color: #f7f7fa;
  border-radius: 12px;
  border: 1px solid #f7f7fa;
`;

export const Selectd = styled.select`
  display: black;
  width: 100%;
  padding: 16px;
  margin-top: 10px;
  background-color: #f7f7fa;
  border: 1px solid #f7f7fa;
  border-radius: 4px;
  line-height: inherit;
  font-size: inherit;
  color: inherit;
  &:focus {
    border-color: red;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #6d6bd1;
  border: none;
  font-weight: 700;
  font-size: 20px;
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
