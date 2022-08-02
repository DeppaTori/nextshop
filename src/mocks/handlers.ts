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

  rest.post(`${API_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === "valid@user.com" && password === "validpassword") {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: "logged in",
          token: "ordinaryjwttoken",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: false,
        message: "failed",
      })
    );
  }),

  rest.get(`${API_URL}/user/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          id: 1,
          firstName: "Tiara",
          lastName: "Dewi",
          address: "Jakarta",
        },
      })
    );
  }),
];
