import { StreamingServiceRepository } from "../../../../../infrastructure/data-access/repositories/streaming-service.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteStreamingServiceRequest } from "./delete-streaming-service.request.ts";
import { DeleteStreamingServiceResponse } from "./delete-streaming-service.response.ts";

export class DeleteStreamingServiceService extends BaseService<DeleteStreamingServiceRequest, DeleteStreamingServiceResponse> {
	private readonly repo;

	constructor(repo: StreamingServiceRepository) {
		super();
		this.repo = repo;
	}

	override async execute(req: DeleteStreamingServiceRequest): Promise<DeleteStreamingServiceResponse> {
		await this.repo.delete(req.id);

		return new DeleteStreamingServiceResponse();
	}
}
