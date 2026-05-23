import { Hono } from "hono";
import { AddArtistGroupRequest } from "../../application/logic/services/artist-group/add/add-artist-group.request.ts";
import { DeleteArtistGroupRequest } from "../../application/logic/services/artist-group/delete/delete-artist-group.request.ts";
import { GetArtistGroupRequest } from "../../application/logic/services/artist-group/get/get-artist-group.request.ts";
import { ListArtistGroupsRequest } from "../../application/logic/services/artist-group/list/list-artist-groups.request.ts";
import { UpdateArtistGroupRequest } from "../../application/logic/services/artist-group/update/update-artist-group.request.ts";
import { ArtistGroupController } from "../controllers/artist-group.controller.ts";

export function artistGroupRoutes(controller: ArtistGroupController): Hono {
	const router = new Hono();

	// POST /artist-groups — create a new artist group
	router.post("/", async (c) => {
		const body = await c.req.json<AddArtistGroupRequest>();

		const res = await controller.addArtistGroup(body);

		return c.json(res, 201);
	});

	// GET /artist-groups — list all artist groups
	router.get("/", async (c) => {
		const res = await controller.listArtistGroups(new ListArtistGroupsRequest());

		return c.json(res);
	});

	// GET /artist-groups/:id — get a single artist group
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetArtistGroupRequest;

		const res = await controller.getArtistGroup(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /artist-groups/:id — update an artist group
	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateArtistGroupRequest>();

		const res = await controller.updateArtistGroup(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /artist-groups/:id — delete an artist group
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteArtistGroupRequest;

		const res = await controller.deleteArtistGroup(req);

		return c.json(res, 200);
	});

	return router;
}
