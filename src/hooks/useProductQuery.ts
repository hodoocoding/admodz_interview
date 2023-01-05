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
type FetchProductsResult = any;

export const fetchProduct = async (id: string | undefined) => {
  try {
    const { data } = await axios.get<ProductResponse>(`/products/${id}`);
    return data.data.product;
  } catch (error) {
    console.log(error);
  }
};

export const useProductQuery = (productId: string | undefined) => {
  const queryResult = useQuery<FetchProductsResult>(
    [queryKeys.PRODUCT, productId],
    () => fetchProduct(productId),
    {
      enabled: !!productId,
    },
  );
  return queryResult;
};
