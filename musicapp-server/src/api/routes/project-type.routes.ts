import { Hono } from "hono";
import { AddProjectTypeRequest } from "../../application/logic/services/project-type/add/add-project-type.request.ts";
import { DeleteProjectTypeRequest } from "../../application/logic/services/project-type/delete/delete-project-type.request.ts";
import { GetProjectTypeRequest } from "../../application/logic/services/project-type/get/get-project-type.request.ts";
import { ListProjectTypesRequest } from "../../application/logic/services/project-type/list/list-project-types.request.ts";
import { UpdateProjectTypeRequest } from "../../application/logic/services/project-type/update/update-project-type.request.ts";
import { ProjectTypeController } from "../controllers/project-type.controller.ts";

export function projectTypeRoutes(controller: ProjectTypeController): Hono {
	const router = new Hono();

	router.post("/", async (c) => {
		const body = await c.req.json<AddProjectTypeRequest>();

		const res = await controller.addProjectType(body);

		return c.json(res, 201);
	});

	router.get("/", async (c) => {
		const res = await controller.listProjectTypes(new ListProjectTypesRequest());

		return c.json(res);
	});

	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetProjectTypeRequest;

		const res = await controller.getProjectType(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateProjectTypeRequest>();

		const res = await controller.updateProjectType(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteProjectTypeRequest;

		const res = await controller.deleteProjectType(req);

		return c.json(res, 200);
	});

	return router;
}
