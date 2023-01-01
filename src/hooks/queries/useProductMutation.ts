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

const updateProduct = async (formInfo: { name: string; price: string }) => {
  const { data } = await axios.post<ProductMutationResponse>(
    "/products",
    formInfo,
  );
  console.log(data);
  return data.data;
};

export const useProductMutation = () => {
  return useMutation(updateProduct);
};
