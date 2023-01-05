import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { ProductType } from "types/product";

type ProductStore = {
  products: ProductType[];
  fetchProducts: (products: ProductType[] | undefined) => void;
  registProduct: (item: ProductType) => void;
  eraseProduct: (id: string | number) => void;
  updataProducts: (products: ProductType[] | undefined) => void;
};

type PersistType = (
  config: StateCreator<ProductStore>,
  options: PersistOptions<ProductStore>,
) => StateCreator<ProductStore>;

export const useProductStore = create<ProductStore>(
  (persist as PersistType)(
    (set) => ({
      products: [],
      fetchProducts: (products: ProductType[] | undefined) => {
        set((state) => ({
          ...state,
          products,
        }));
      },
      registProduct: (item: ProductType) => {
        set((state) => ({
          ...state,
          products: [...state.products, { ...item }],
        }));
      },
      eraseProduct: (id) => {
        set((state) => {
          const filtered = state.products.filter(
            (product) => product.id !== id,
          );
          return {
            ...state,
            products: filtered,
          };
        });
      },
      updataProducts: (products: ProductType[] | undefined) => {
        console.log(products);
        set((state) => ({
          ...state,
          products,
        }));
      },
    }),
    { name: "resist_products" },
  ),
);
