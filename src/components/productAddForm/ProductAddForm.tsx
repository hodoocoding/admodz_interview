/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useProductMutation } from "hooks/useProductMutation";
import { useProductStore } from "store/useProductStore";
import { useSidebarStore } from "store/useSidebarStore";

import FormCotents from "components/formCotents/FormContents";

import * as Styled from "./ProductAddForm.style";

const ProductAddForm = () => {
  const navigate = useNavigate();
  const { createProduct, products } = useProductStore();
  const nextId = useRef(products.length + 1);

  const [product, setProduct] = useState({
    id: nextId.current.toString(),
    name: "",
    thumbnail: "",
    price: "",
    quantity: "",
    category: "",
  });

  const { onClickToggle } = useSidebarStore();
  const { mutate } = useProductMutation();

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
    mutate(product, {
      onSuccess: async () => {
        await createProduct(product);
        await setProduct({
          ...product,
          id: "",
          name: "",
          thumbnail: "",
          price: "",
          category: "",
        });
        await onClickToggle();
        await navigate("/");
      },
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateHandler();
  };

  return (
    <Styled.Form onSubmit={onSubmit}>
      <FormCotents
        product={product}
        setProduct={setProduct}
        onChangeFormValue={onChangeFormValue}
      />
    </Styled.Form>
  );
};

export default ProductAddForm;
