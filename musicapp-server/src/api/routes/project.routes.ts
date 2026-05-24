import { Hono } from "hono";
import { AddProjectRequest } from "../../application/logic/services/project/add/add-project.request.ts";
import { DeleteProjectRequest } from "../../application/logic/services/project/delete/delete-project.request.ts";
import { GetProjectRequest } from "../../application/logic/services/project/get/get-project.request.ts";
import { ListProjectsRequest } from "../../application/logic/services/project/list/list-projects.request.ts";
import { UpdateProjectRequest } from "../../application/logic/services/project/update/update-project.request.ts";
import { ProjectController } from "../controllers/project.controller.ts";

export function projectRoutes(controller: ProjectController): Hono {
	const router = new Hono();

	// POST /projects — create a new project
	router.post("/", async (c) => {
		const body = await c.req.json<AddProjectRequest>();

		const res = await controller.addProject(body);

		return c.json(res, 201);
	});

	// GET /projects — list all projects
	router.get("/", async (c) => {
		const res = await controller.listProject(new ListProjectsRequest());

		return c.json(res);
	});

	// GET /projects/:id — get a single project
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetProjectRequest;

		const res = await controller.getProject(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /projects/:id — update a project
	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateProjectRequest>();

		const res = await controller.updateProject(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /projects/:id — delete a project
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteProjectRequest;

		const res = await controller.deleteProject(req);

		return c.json(res);
	});

	return router;
}
