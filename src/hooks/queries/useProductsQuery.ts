/* eslint-disable consistent-return */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import * as queryKeys from "constants/queryKeys";
import { Product } from "types/product";

interface ProductsResponse {
  data: {
    products: Product[];
  };
}

type FetchProductsResult = ProductsResponse["data"] | null | undefined;

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get<ProductsResponse>("/products");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const useProductQuery = () => {
  const queryResult = useQuery<FetchProductsResult>([queryKeys.PRODUCT], () =>
    fetchProducts(),
  );
  return queryResult;
};
