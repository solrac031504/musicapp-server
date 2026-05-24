import { DataSource } from "typeorm";
import { StreamingServiceController } from "../../../api/controllers/streaming-service.controller.ts";
import { AddStreamingServiceService } from "../../../application/logic/services/streaming-service/add/add-streaming-service.service.ts";
import { DeleteStreamingServiceService } from "../../../application/logic/services/streaming-service/delete/delete-streaming-service.service.ts";
import { GetStreamingServiceService } from "../../../application/logic/services/streaming-service/get/get-streaming-service.service.ts";
import { ListStreamingServicesService } from "../../../application/logic/services/streaming-service/list/list-streaming-services.service.ts";
import { UpdateStreamingServiceService } from "../../../application/logic/services/streaming-service/update/update-streaming-service.service.ts";
import { StreamingServiceRepository } from "../../data-access/repositories/streaming-service.repository.ts";

export function bootstrapStreamingService(dataSource: DataSource): StreamingServiceController {
	const repo = new StreamingServiceRepository(dataSource);

	return new StreamingServiceController(
		new AddStreamingServiceService(repo),
		new DeleteStreamingServiceService(repo),
		new GetStreamingServiceService(repo),
		new ListStreamingServicesService(repo),
		new UpdateStreamingServiceService(repo),
	);
}
