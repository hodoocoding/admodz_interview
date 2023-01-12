import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { ProductType } from "types/product";

type ProductStore = {
  products: ProductType[];
  fetchProducts: (products: ProductType[] | undefined) => void;
  createProduct: (item: ProductType) => void;
  deleteProduct: (id: string | number) => void;
  updateProducts: (products: ProductType[] | undefined) => void;
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
      createProduct: (item: ProductType) => {
        set((state) => ({
          ...state,
          products: [...state.products, { ...item }],
        }));
      },
      deleteProduct: (id) => {
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
      updateProducts: (products: ProductType[] | undefined) => {
        set((state) => ({
          ...state,
          products,
        }));
      },
    }),
    { name: "resist_products" },
  ),
);
