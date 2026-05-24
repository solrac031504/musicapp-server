import { Hono } from "hono";
import { AddSceneRequest } from "../../application/logic/services/scene/add/add-scene.request.ts";
import { DeleteSceneRequest } from "../../application/logic/services/scene/delete/delete-scene.request.ts";
import { GetSceneRequest } from "../../application/logic/services/scene/get/get-scene.request.ts";
import { ListScenesRequest } from "../../application/logic/services/scene/list/list-scenes.request.ts";
import { UpdateSceneRequest } from "../../application/logic/services/scene/update/update-scene.request.ts";
import { SceneController } from "../controllers/scene.controller.ts";

export function sceneRoutes(controller: SceneController): Hono {
	const router = new Hono();

	// POST /scenes — create a new scene
	router.post("/", async (c) => {
		const body = await c.req.json<AddSceneRequest>();

		const res = await controller.addScene(body);

		return c.json(res, 201);
	});

	// GET /scenes — list all scenes
	router.get("/", async (c) => {
		const res = await controller.listScene(new ListScenesRequest());

		return c.json(res);
	});

	// GET /scenes/:id — get a single scene
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetSceneRequest;

		const res = await controller.getScene(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /scenes/:id — update a scene
	router.patch("/:id", async (c) => {
		const body = await c.req.json<UpdateSceneRequest>();

		body.item.id = parseInt(c.req.param("id"));

		const res = await controller.updateScene(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /scenes/:id — delete a scene
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteSceneRequest;

		const res = await controller.deleteScene(req);

		return c.json(res);
	});

	return router;
}
