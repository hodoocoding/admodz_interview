/* eslint-disable consistent-return */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import * as queryKeys from "constants/queryKeys";
import { ProductType } from "types/product";

interface ProductResponse {
  data: {
    product: ProductType;
  };
}

type FetchProductResult = ProductResponse["data"] | undefined;

export const fetchProduct = async (id: string) => {
  try {
    const { data } = await axios.get<ProductResponse>(`/products/${id}`);
    return data.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const useProductQuery = (productId: string) => {
  const queryResult = useQuery<FetchProductResult>(
    [queryKeys.PRODUCT, productId],
    () => fetchProduct(productId),
    {
      enabled: !!productId,
      cacheTime: 0,
      staleTime: 0,
    },
  );
  return queryResult;
};
