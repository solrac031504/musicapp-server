import { StreamingServiceRepository } from "../../../../../infrastructure/data-access/repositories/streaming-service.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetStreamingServiceResponseMapper } from "../../../mappers/response-mappers/get-streaming-service.response-mapper.ts";
import { GetStreamingServiceRequest } from "./get-streaming-service.request.ts";
import { GetStreamingServiceResponse } from "./get-streaming-service.response.ts";

export class GetStreamingServiceService extends BaseService<GetStreamingServiceRequest, GetStreamingServiceResponse> {
	private readonly repo;
	private readonly resMapper = new GetStreamingServiceResponseMapper();

	constructor(repo: StreamingServiceRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetStreamingServiceRequest,
	): Promise<GetStreamingServiceResponse> {
		const streamingServiceModel = await this.repo.getById(req.id);

		if (!streamingServiceModel) return new GetStreamingServiceResponse().notFound();

		return this.resMapper.map(streamingServiceModel!);
	}
}
