import { Hono } from "hono";
import { LoginUserRequest } from "../../application/logic/services/login-user/login/login-user.request.ts";
import { LoginController } from "../controllers/login.controller.ts";

export function loginRoutes(controller: LoginController): Hono {
	const router = new Hono();

	// Post /login - login user
	router.post("/login", async (c) => {
		const body = await c.req.json<LoginUserRequest>();

		const res = await controller.loginUser(body);

		return c.json(res);
	});

	return router;
}
