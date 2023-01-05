export type ProductType = {
  id: number | string;
  name: string;
  thumbnail: string | null;
  price: number | string;
  category?: string;
};
