/* eslint-disable consistent-return */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import * as queryKeys from "constants/queryKeys";
import { ProductType } from "types/product";

interface ProductsResponse {
  data: {
    products: ProductType[];
  };
}

type FetchProductsResult = ProductsResponse["data"] | null | undefined;

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get<ProductsResponse>("/products");
    return data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const useProductsQuery = () => {
  const queryResult = useQuery<FetchProductsResult>([queryKeys.PRODUCTS], () =>
    fetchProducts(),
  );
  return queryResult;
};
