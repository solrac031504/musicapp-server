import { StreamingServiceRepository } from "../../../../../infrastructure/data-access/repositories/streaming-service.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddStreamingServiceRequestMapper } from "../../../mappers/request-mappers/add-streaming-service.request-mapper.ts";
import { AddStreamingServiceResponseMapper } from "../../../mappers/response-mappers/add-streaming-service.response-mapper.ts";
import { AddStreamingServiceRequest } from "../add/add-streaming-service.request.ts";
import { AddStreamingServiceResponse } from "../add/add-streaming-service.response.ts";

export class AddStreamingServiceService extends BaseService<AddStreamingServiceRequest, AddStreamingServiceResponse> {
	private readonly repo;
	private readonly reqMapper = new AddStreamingServiceRequestMapper();
	private readonly resMapper = new AddStreamingServiceResponseMapper();

	constructor(repo: StreamingServiceRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: AddStreamingServiceRequest): Promise<AddStreamingServiceResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
