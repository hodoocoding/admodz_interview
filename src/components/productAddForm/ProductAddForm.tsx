/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useProductQuery } from "hooks/useProductQuery";
import {
  useProductMutation,
  useUpdateMutation,
} from "hooks/useProductMutation";
import { ImageUploader } from "components/imageUploader";
import { useProductStore } from "store/useProductStore";
import { useSidebarStore } from "store/useSidebarStore";

import { validateForm } from "utilities";
import * as Styled from "./ProductAddForm.style";

const ProductAddForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { registProduct, updataProducts, products } = useProductStore();
  const nextId = useRef(products.length + 1);

  const [product, setProduct] = useState({
    id: nextId.current.toString(),
    name: "",
    thumbnail: "",
    price: "",
    quantity: "",
    category: "",
  });

  const { data: itemInformation, isLoading, isSuccess } = useProductQuery(id);
  const { onClickToggle } = useSidebarStore();
  const { mutate } = useProductMutation();
  const { mutate: updateMutate } = useUpdateMutation();

  const onChangeFormValue = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const mutateHandler = () => {
    if (itemInformation) {
      console.log("here");
      updateMutate(
        { id, product },
        {
          onSuccess: async (data) => {
            await updataProducts(data.products);
            await setProduct({
              ...product,
              id: nextId.current.toString(),
              name: "",
              thumbnail: "",
              price: "",
              category: "",
            });
            await onClickToggle();
            await navigate("/");
          },
        },
      );
    } else {
      mutate(product, {
        onSuccess: async () => {
          await registProduct(product);
          await setProduct({
            ...product,
            id: nextId.current.toString(),
            name: "",
            thumbnail: "",
            price: "",
            category: "",
          });
          await onClickToggle();
        },
      });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateHandler();
  };

  useEffect(() => {
    if (itemInformation) {
      console.log(itemInformation);
      setProduct(itemInformation);
    }
  }, [itemInformation, !isLoading, isSuccess]);

  return (
    <Styled.Form onSubmit={onSubmit}>
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
          placeholder="카테고리"
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
          value={product?.price}
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
        {itemInformation ? "변경" : "생성"}
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default ProductAddForm;

const OPTIONS = ["반지", "목걸이", "귀걸이", "이어커프", "팔찌", "발찌"];
