import { ProductType } from "types/product";

export const validateForm = (product: ProductType) => {
  return Object.values(product).every((el) => el !== "");
};
