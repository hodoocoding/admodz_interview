import React, { useState, ChangeEvent, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useProductQuery } from "hooks/useProductQuery";
import { useUpdateMutation } from "hooks/useProductMutation";
import { useProductStore } from "store/useProductStore";
import { useSidebarStore } from "store/useSidebarStore";

import { FormCotents } from "components/formCotents";

import { ProductType } from "types/product";
import * as Styled from "./ProductUpdateForm.style";

const ProductUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateProducts } = useProductStore();
  const { onClickToggle } = useSidebarStore();
  const { mutate } = useUpdateMutation();
  const { data: itemInformation } = useProductQuery(id as string);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [product, setProduct] = useState<ProductType>(itemInformation!.product);

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
    mutate(
      { id, product },
      {
        onSuccess: async (data) => {
          await updateProducts(data.products);
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
      },
    );
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

export default ProductUpdateForm;
