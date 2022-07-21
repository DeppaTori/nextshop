import { rest } from "msw";
import { API_URL } from "../helpers/constant";

export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        usernmae: "admin",
      })
    );
  }),
  rest.get(`${API_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            name: "Minion Action Figure",
            description: "Yellow Action Figure",
            price: 12000,
          },
        ],
      })
    );
  }),
];
