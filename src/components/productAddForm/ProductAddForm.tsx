import React, { useState, ChangeEvent } from "react";
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

  return (
    <Styled.Form>
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
