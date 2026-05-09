import { Hono } from "hono";
import { AddArtistRequest } from "../../application/logic/services/artist/add/add-artist.request.ts";
import { DeleteArtistRequest } from "../../application/logic/services/artist/delete/delete-artist.request.ts";
import { GetArtistRequest } from "../../application/logic/services/artist/get/get-artist.request.ts";
import { ListArtistsRequest } from "../../application/logic/services/artist/list/list-artists.request.ts";
import { UpdateArtistRequest } from "../../application/logic/services/artist/update/update-artist.request.ts";
import { ArtistController } from "../controllers/artist.controller.ts";

export function artistRoutes(controller: ArtistController): Hono {
	const router = new Hono();

	// ADD artist
	router.post("/add", async (c) => {
		const body = await c.req.json<AddArtistRequest>();

		const res = await controller.addArtist(body);

		return c.json(res);
	});

	// DELETE artist
	router.delete("/delete", async (c) => {
		const req = { id: parseInt(c.req.query("id")!) } as DeleteArtistRequest;

		const res = await controller.deleteArtist(req);

		return c.json(res);
	});

	// GET artist
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetArtistRequest;

		const res = await controller.getArtist(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// LIST artists
	router.get("/list", async (c) => {
		const res = await controller.listArtist(new ListArtistsRequest());

		return c.json(res);
	});

	// UPDATE arts
	router.patch("/update", async (c) => {
		const body = await c.req.json<UpdateArtistRequest>();

		const res = await controller.updateArtist(body);

		return c.json(res);
	});

	return router;
}
