import { rest } from "msw";
import products from "./data/products.json";

export const handlers = [
  // 할일 목록
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: { products } }));
  }),

  // 할일 추가
  rest.post("/products", (req: any, res, ctx) => {
    products.push(req.body);
    return res(ctx.status(201));
  }),
];
