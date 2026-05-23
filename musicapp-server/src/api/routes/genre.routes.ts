import { Hono } from "hono";
import { AddGenreRequest } from "../../application/logic/services/genre/add/add-genre.request.ts";
import { DeleteGenreRequest } from "../../application/logic/services/genre/delete/delete-genre.request.ts";
import { GetGenreRequest } from "../../application/logic/services/genre/get/get-genre.request.ts";
import { ListGenresRequest } from "../../application/logic/services/genre/list/list-genres.request.ts";
import { UpdateGenreRequest } from "../../application/logic/services/genre/update/update-genre.request.ts";
import { GenreController } from "../controllers/genre.controller.ts";

export function genreRoutes(controller: GenreController): Hono {
	const router = new Hono();

	// POST /genres — create a new genre
	router.post("/", async (c) => {
		const body = await c.req.json<AddGenreRequest>();

		const res = await controller.addGenre(body);

		return c.json(res, 201);
	});

	// GET /genres — list all genres
	router.get("/", async (c) => {
		const res = await controller.listGenres(new ListGenresRequest());

		return c.json(res);
	});

	// GET /genres/:id — get a single genre
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetGenreRequest;

		const res = await controller.getGenre(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /genres/:id — update a genre
	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateGenreRequest>();

		const res = await controller.updateGenre(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /genres/:id — delete a genre
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteGenreRequest;

		const res = await controller.deleteGenre(req);

		return c.json(res, 200);
	});

	return router;
}
