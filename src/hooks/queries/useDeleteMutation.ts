import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Product = {
  id?: string;
  name: string;
  thumbnail?: string;
  price: number | string;
};

interface ProductMutationResponse {
  data: {
    products: Product[];
  };
}

const deleteProduct = async (id: string) => {
  const { data } = await axios.delete<ProductMutationResponse>(
    `/products/${id}`,
  );
  return data.data;
};

export const useDeleteMutation = () => {
  return useMutation(deleteProduct);
};
