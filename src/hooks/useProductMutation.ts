import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "types/product";

interface ProductMutationResponse {
  data: {
    products: ProductType[];
  };
}

type ProductUpdate = {
  id: string | undefined;
  product: ProductType;
};

const addProduct = async (formInfo: ProductType) => {
  const { data } = await axios.post<ProductMutationResponse>(
    "/products",
    formInfo,
  );
  return data.data;
};

const updateProducts = async (payload: ProductUpdate) => {
  const { id, product } = payload;
  const { data } = await axios.put<ProductMutationResponse>(
    `/products/${id}`,
    product,
  );
  return data.data;
};

export const useProductMutation = () => {
  return useMutation(addProduct);
};

export const useUpdateMutation = () => {
  return useMutation(updateProducts);
};
