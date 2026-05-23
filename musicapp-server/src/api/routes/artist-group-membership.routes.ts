import { Hono } from "hono";
import { AddArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/add/add-artist-group-membership.request.ts";
import { DeleteArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/delete/delete-artist-group-membership.request.ts";
import { GetArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/get/get-artist-group-membership.request.ts";
import { ListArtistGroupMembershipsRequest } from "../../application/logic/services/artist-group-membership/list/list-artist-group-memberships.request.ts";
import { UpdateArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/update/update-artist-group-membership.request.ts";
import { ArtistGroupMembershipController } from "../controllers/artist-group-membership.controller.ts";

export function artistGroupMembershipRoutes(controller: ArtistGroupMembershipController): Hono {
	const router = new Hono();

	// POST /artist-group-memberships — create a new membership
	router.post("/", async (c) => {
		const body = await c.req.json<AddArtistGroupMembershipRequest>();

		const res = await controller.addArtistGroupMembership(body);

		return c.json(res, 201);
	});

	// GET /artist-group-memberships — list all memberships
	router.get("/", async (c) => {
		const res = await controller.listArtistGroupMemberships(new ListArtistGroupMembershipsRequest());

		return c.json(res);
	});

	// GET /artist-group-memberships/:id — get a single membership
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetArtistGroupMembershipRequest;

		const res = await controller.getArtistGroupMembership(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /artist-group-memberships/:id — update a membership
	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateArtistGroupMembershipRequest>();

		const res = await controller.updateArtistGroupMembership(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /artist-group-memberships/:id — delete a membership
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteArtistGroupMembershipRequest;

		const res = await controller.deleteArtistGroupMembership(req);

		return c.json(res, 200);
	});

	return router;
}
