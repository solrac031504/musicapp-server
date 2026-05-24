import { DataSource } from "typeorm";
import { ProducerController } from "../../../api/controllers/producer.controller.ts";
import { AddProducerService } from "../../../application/logic/services/producer/add/add-producer.service.ts";
import { DeleteProducerService } from "../../../application/logic/services/producer/delete/delete-producer.service.ts";
import { GetProducerService } from "../../../application/logic/services/producer/get/get-producer.service.ts";
import { ListProducersService } from "../../../application/logic/services/producer/list/list-producers.service.ts";
import { UpdateProducerService } from "../../../application/logic/services/producer/update/update-producer.service.ts";
import { ProducerRepository } from "../../data-access/repositories/producer.repository.ts";

export function bootstrapProducer(dataSource: DataSource): ProducerController {
	const repo = new ProducerRepository(dataSource);

	return new ProducerController(
		new AddProducerService(repo),
		new DeleteProducerService(repo),
		new GetProducerService(repo),
		new ListProducersService(repo),
		new UpdateProducerService(repo),
	);
}
