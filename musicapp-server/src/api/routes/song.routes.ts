import { Hono } from "hono";
import { AddSongRequest } from "../../application/logic/services/song/add/add-song.request.ts";
import { DeleteSongRequest } from "../../application/logic/services/song/delete/delete-song.request.ts";
import { GetSongRequest } from "../../application/logic/services/song/get/get-song.request.ts";
import { ListSongsRequest } from "../../application/logic/services/song/list/list-songs.request.ts";
import { UpdateSongRequest } from "../../application/logic/services/song/update/update-song.request.ts";
import { SongController } from "../controllers/song.controller.ts";

export function songRoutes(controller: SongController): Hono {
	const router = new Hono();

	// POST /songs — create a new song
	router.post("/", async (c) => {
		const body = await c.req.json<AddSongRequest>();

		const res = await controller.addSong(body);

		return c.json(res, 201);
	});

	// GET /songs — list all songs
	router.get("/", async (c) => {
		const res = await controller.listSong(new ListSongsRequest());

		return c.json(res);
	});

	// GET /songs/:id — get a single song
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetSongRequest;

		const res = await controller.getSong(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /songs/:id — update a song
	router.patch("/:id", async (c) => {
		const body = await c.req.json<UpdateSongRequest>();

		body.item.id = parseInt(c.req.param("id"));

		const res = await controller.updateSong(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /songs/:id — delete a song
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteSongRequest;

		const res = await controller.deleteSong(req);

		return c.json(res);
	});

	return router;
}
