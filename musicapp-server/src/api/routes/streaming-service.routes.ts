import { Hono } from "hono";
import { AddStreamingServiceRequest } from "../../application/logic/services/streaming-service/add/add-streaming-service.request.ts";
import { DeleteStreamingServiceRequest } from "../../application/logic/services/streaming-service/delete/delete-streaming-service.request.ts";
import { GetStreamingServiceRequest } from "../../application/logic/services/streaming-service/get/get-streaming-service.request.ts";
import { ListStreamingServicesRequest } from "../../application/logic/services/streaming-service/list/list-streaming-services.request.ts";
import { UpdateStreamingServiceRequest } from "../../application/logic/services/streaming-service/update/update-streaming-service.request.ts";
import { StreamingServiceController } from "../controllers/streaming-service.controller.ts";

export function streamingServiceRoutes(controller: StreamingServiceController): Hono {
	const router = new Hono();

	// POST /streaming-services — create a new streaming service
	router.post("/", async (c) => {
		const body = await c.req.json<AddStreamingServiceRequest>();

		const res = await controller.addStreamingService(body);

		return c.json(res, 201);
	});

	// GET /streaming-services — list all streaming services
	router.get("/", async (c) => {
		const res = await controller.listStreamingService(new ListStreamingServicesRequest());

		return c.json(res);
	});

	// GET /streaming-services/:id — get a single streaming service
	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetStreamingServiceRequest;

		const res = await controller.getStreamingService(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// PATCH /streaming-services/:id — update a streaming service
	router.patch("/", async (c) => {
		const body = await c.req.json<UpdateStreamingServiceRequest>();

		const res = await controller.updateStreamingService(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	// DELETE /streaming-services/:id — delete a streaming service
	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteStreamingServiceRequest;

		const res = await controller.deleteStreamingService(req);

		return c.json(res);
	});

	return router;
}
