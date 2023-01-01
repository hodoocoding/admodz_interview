import React, { useState, ChangeEvent, FormEvent } from "react";
import { useProductMutation } from "hooks/queries/useProductMutation";
import { ImageUploader } from "components/imageUploader";
import * as Styled from "./ProductAddForm.style";

const OPTIONS = ["반지", "목걸이", "귀걸이", "이어커프", "팔찌", "발찌"];

function ProductAddForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const onChangeFormValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const { mutate } = useProductMutation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(product, {
      onSuccess: () => {
        console.log("등록성공");
      },
    });
  };

  const setProductThumbnail = (image: string) => {
    setProduct({
      ...product,
      image,
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
          value={product.name}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>

      <Styled.Fieldset>
        <Styled.Label htmlFor="price">가격</Styled.Label>
        <Styled.TextInput
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>
      <Styled.Fieldset>
        <Styled.Label htmlFor="price">카테고리</Styled.Label>
        <Styled.Selectd
          id="category"
          name="category"
          onChange={onChangeFormValue}
        >
          {OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Styled.Selectd>
      </Styled.Fieldset>
      <Styled.Fieldset>
        <ImageUploader setProductThumbnail={setProductThumbnail} />
      </Styled.Fieldset>
      <Styled.SubmitButton type="submit">생성</Styled.SubmitButton>
    </Styled.Form>
  );
}

export default ProductAddForm;
