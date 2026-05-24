import { Hono } from "hono";
import { AddProducerRequest } from "../../application/logic/services/producer/add/add-producer.request.ts";
import { DeleteProducerRequest } from "../../application/logic/services/producer/delete/delete-producer.request.ts";
import { GetProducerRequest } from "../../application/logic/services/producer/get/get-producer.request.ts";
import { ListProducersRequest } from "../../application/logic/services/producer/list/list-producers.request.ts";
import { UpdateProducerRequest } from "../../application/logic/services/producer/update/update-producer.request.ts";
import { ProducerController } from "../controllers/producer.controller.ts";

export function producerRoutes(controller: ProducerController): Hono {
	const router = new Hono();

	router.post("/", async (c) => {
		const body = await c.req.json<AddProducerRequest>();

		const res = await controller.addProducer(body);

		return c.json(res, 201);
	});

	router.get("/", async (c) => {
		const res = await controller.listProducers(new ListProducersRequest());

		return c.json(res);
	});

	router.get("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as GetProducerRequest;

		const res = await controller.getProducer(req);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.patch("/:id", async (c) => {
		const body = await c.req.json<UpdateProducerRequest>();

		body.item.id = parseInt(c.req.param("id"));

		const res = await controller.updateProducer(body);

		return c.json(res, res.statusCode as 200 | 404);
	});

	router.delete("/:id", async (c) => {
		const req = { id: parseInt(c.req.param("id")) } as DeleteProducerRequest;

		const res = await controller.deleteProducer(req);

		return c.json(res, 200);
	});

	return router;
}
