import { StreamingServiceRepository } from "../../../../../infrastructure/data-access/repositories/streaming-service.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateStreamingServiceRequestMapper } from "../../../mappers/request-mappers/update-streaming-service.request-mapper.ts";
import { UpdateStreamingServiceResponseMapper } from "../../../mappers/response-mappers/update-streaming-service.response-mapper.ts";
import { UpdateStreamingServiceRequest } from "./update-streaming-service.request.ts";
import { UpdateStreamingServiceResponse } from "./update-streaming-service.response.ts";

export class UpdateStreamingServiceService extends BaseService<UpdateStreamingServiceRequest, UpdateStreamingServiceResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateStreamingServiceRequestMapper();
	private readonly resMapper = new UpdateStreamingServiceResponseMapper();

	constructor(repo: StreamingServiceRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateStreamingServiceRequest,
	): Promise<UpdateStreamingServiceResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
