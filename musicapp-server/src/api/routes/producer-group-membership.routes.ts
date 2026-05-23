import { Hono } from "hono";
import { AddProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/add/add-producer-group-membership.service.ts";
import { DeleteProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/delete/delete-producer-group-membership.service.ts";
import { GetProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/get/get-producer-group-membership.service.ts";
import { ListProducerGroupMembershipsRequest } from "../../application/logic/services/producer-group-membership/list/list-producer-group-memberships.service.ts";
import { UpdateProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/update/update-producer-group-membership.service.ts";
import { ProducerGroupMembershipController } from "../controllers/producer-group-membership.controller.ts";

export function producerGroupMembershipRoutes(controller: ProducerGroupMembershipController): Hono {
	const router = new Hono();

	router.post("/", async (c) => {
		const body = await c.req.json<AddProducerGroupMembershipRequest>();

		const res = await controller.addProducerGroupMembership(body);

		return c.json(res, 201);
	});

	router.get("/", async (c) => {
		const res = await controller.listProducerGroupMemberships(new ListProducerGroupMembershipsRequest());

		return c.json(res);
	});

	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetProducerGroupMembershipRequest;

		const res = await controller.getProducerGroupMembership(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateProducerGroupMembershipRequest>();

		const res = await controller.updateProducerGroupMembership(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteProducerGroupMembershipRequest;

		const res = await controller.deleteProducerGroupMembership(req);

		return c.json(res, 200);
	});

	return router;
}
