import { Hono } from "hono";
import { AddGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/add/add-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.request.ts";
import { GetGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/get/get-genre-hierarchy.request.ts";
import { ListGenreHierarchiesRequest } from "../../application/logic/services/genre-hierarchy/list/list-genre-hierarchies.request.ts";
import { UpdateGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/update/update-genre-hierarchy.request.ts";
import { GenreHierarchyController } from "../controllers/genre-hierarchy.controller.ts";

export function genreHierarchyRoutes(
	controller: GenreHierarchyController,
): Hono {
	const router = new Hono();

	// POST /genre-hierarchies — create a new genre hierarchy record
	router.post("/", async (c) => {
		const body = await c.req.json<AddGenreHierarchyRequest>();

		const res = await controller.addGenreHierarchy(body);

		return c.json(res, 201);
	});

	// GET /genre-hierarchies — list all genre hierarchy records
	router.get("/", async (c) => {
		const res = await controller.listGenreHierarchies(
			new ListGenreHierarchiesRequest(),
		);

		return c.json(res);
	});

	// GET /genre-hierarchies/:id — get a single genre hierarchy record
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetGenreHierarchyRequest;

		const res = await controller.getGenreHierarchy(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /genre-hierarchies/:id — update a genre hierarchy record
	router.patch("/:id", async (c) => {
		const body = await c.req.json<UpdateGenreHierarchyRequest>();

		body.item.id = parseInt(c.req.param("id"));

		const res = await controller.updateGenreHierarchy(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /genre-hierarchies/:id — delete a genre hierarchy record
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteGenreHierarchyRequest;

		const res = await controller.deleteGenreHierarchy(req);

		return c.json(res, 200);
	});

	return router;
}
