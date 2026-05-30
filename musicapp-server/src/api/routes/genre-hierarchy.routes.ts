import { GenreHierarchyController } from "@api/controllers/genre-hierarchy.controller.ts";
import { AddGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.request.ts";
import { ListGenreHierarchyByGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.request.ts";
import { ListGenreHierarchyByParentGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.request.ts";
import { UpdateGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.request.ts";
import { Hono } from "hono";

export function genreHierarchyRoutes(controller: GenreHierarchyController): Hono {
	const router = new Hono();

	// POST /genre-hierarchies — create a new genre hierarchy record
	router.post("/", async (c) => {
		const body = await c.req.json<AddGenreHierarchyRequest>();

		const res = await controller.addGenreHierarchy(body);

		return c.json(res, 201);
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

	//GET /genre-hierarchies?genreId OR ?parentGenreId - list genre hierarchies by the genreId
	router.get("/", async (c) => {
		const genreId = c.req.query("genreId");
		const parentGenreId = c.req.query("parentGenreId");

		if (genreId) {
			const res = await controller.listGenreHierarchiesByGenre({ id: parseInt(genreId) } as ListGenreHierarchyByGenreRequest);

			return c.json(res, res.statusCode as 200 | 404);
		} else if (parentGenreId) {
			const res = await controller.listGenreHierarchiesByParentGenre({ id: parseInt(parentGenreId) } as ListGenreHierarchyByParentGenreRequest);

			return c.json(res, res.statusCode as 200 | 404);
		} else {
			return c.status(404);
		}
	});

	return router;
}
