import React, { useState, ChangeEvent, FormEvent } from "react";
import { useProductMutation } from "hooks/queries/useProductMutation";
import * as Styled from "./ProductAddForm.style";

function ProductAddForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const onChangeFormValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const { mutate } = useProductMutation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        console.log("등록성공");
      },
    });
  };

  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.Fieldset>
        <Styled.Label htmlFor="name">이름</Styled.Label>
        <Styled.TextInput
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>

      <Styled.Fieldset>
        <Styled.Label htmlFor="price">가격</Styled.Label>
        <Styled.TextInput
          id="price"
          type="number"
          name="price"
          value={form.price}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>

      <Styled.SubmitButton type="submit">생성</Styled.SubmitButton>
    </Styled.Form>
  );
}

export default ProductAddForm;
