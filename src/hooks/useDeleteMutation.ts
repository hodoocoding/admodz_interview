import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "types/product";

interface ProductMutationResponse {
  data: {
    products: ProductType[];
  };
}

const deleteProduct = async (id: string | number) => {
  const { data } = await axios.delete<ProductMutationResponse>(
    `/products/${id}`,
  );
  return data.data;
};

export const useDeleteMutation = () => {
  return useMutation(deleteProduct);
};
