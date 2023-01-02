import { rest } from "msw";
import products from "./data/products.json";

export const handlers = [
  // 아이템 목록
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: { products } }));
  }),

  // 아이템 추가
  rest.post("/products", (req: any, res, ctx) => {
    products.push(req.body);
    return res(ctx.status(201));
  }),

  // 아이템 삭제
  rest.delete("/products/:id", (req, res, ctx) => {
    const { id } = req.params;
    const filtered = products.filter((product) => product.id !== id);
    return res(ctx.status(200), ctx.json({ data: { products: filtered } }));
  }),
];
