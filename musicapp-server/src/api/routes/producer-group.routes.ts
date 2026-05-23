import { Hono } from "hono";
import { AddProducerGroupRequest } from "../../application/logic/services/producer-group/add/add-producer-group.request.ts";
import { DeleteProducerGroupRequest } from "../../application/logic/services/producer-group/delete/delete-producer-group.request.ts";
import { GetProducerGroupRequest } from "../../application/logic/services/producer-group/get/get-producer-group.request.ts";
import { ListProducerGroupsRequest } from "../../application/logic/services/producer-group/list/list-producer-groups.request.ts";
import { UpdateProducerGroupRequest } from "../../application/logic/services/producer-group/update/update-producer-group.request.ts";
import { ProducerGroupController } from "../controllers/producer-group.controller.ts";

export function producerGroupRoutes(controller: ProducerGroupController): Hono {
	const router = new Hono();

	router.post("/", async (c) => {
		const body = await c.req.json<AddProducerGroupRequest>();

		const res = await controller.addProducerGroup(body);

		return c.json(res, 201);
	});

	router.get("/", async (c) => {
		const res = await controller.listProducerGroups(new ListProducerGroupsRequest());

		return c.json(res);
	});

	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetProducerGroupRequest;

		const res = await controller.getProducerGroup(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateProducerGroupRequest>();

		const res = await controller.updateProducerGroup(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteProducerGroupRequest;

		const res = await controller.deleteProducerGroup(req);

		return c.json(res, 200);
	});

	return router;
}
