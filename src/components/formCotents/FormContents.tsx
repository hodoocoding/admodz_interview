import React, { Dispatch, SetStateAction } from "react";
import { ImageUploader } from "components/imageUploader";
import { validateForm } from "utilities";
import { OPTIONS } from "constants/option";
import { ProductType } from "types/product";
import { useLocation } from "react-router-dom";
import * as Styled from "./FormCotents.style";

type Form = {
  product: ProductType;
  setProduct: Dispatch<SetStateAction<string | number>> | any;
  onChangeFormValue: Dispatch<SetStateAction<string | number>> | any;
};

const FormCotents = (props: Form) => {
  const { product, setProduct, onChangeFormValue } = props;
  const location = useLocation();

  return (
    <>
      <Styled.Fieldset>
        <Styled.Label htmlFor="name">상품 이름</Styled.Label>
        <Styled.TextInput
          id="name"
          type="text"
          name="name"
          value={product?.name}
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
          <option value="" selected disabled hidden>
            카테고리
          </option>
          {OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Styled.Selectd>
      </Styled.Fieldset>

      <Styled.Fieldset>
        <Styled.Label htmlFor="price">상품 가격</Styled.Label>
        <Styled.TextInput
          id="price"
          type="number"
          name="price"
          value={product?.price.toLocaleString("ko-KR")}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>

      <Styled.Fieldset>
        <Styled.Label htmlFor="quantity">수량</Styled.Label>
        <Styled.TextInput
          id="quantity"
          type="number"
          name="quantity"
          value={product?.quantity}
          onChange={onChangeFormValue}
        />
      </Styled.Fieldset>

      <Styled.Fieldset>
        <ImageUploader product={product} setProduct={setProduct} />
      </Styled.Fieldset>
      <Styled.SubmitButton type="submit" disabled={!validateForm(product)}>
        {location.pathname === "/product" ? "생성" : "변경"}
      </Styled.SubmitButton>
    </>
  );
};

export default FormCotents;
