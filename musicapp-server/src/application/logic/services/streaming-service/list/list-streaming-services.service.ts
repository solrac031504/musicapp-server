import { StreamingServiceRepository } from "../../../../../infrastructure/data-access/repositories/streaming-service.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListStreamingServicesResponseMapper } from "../../../mappers/response-mappers/list-streaming-services.response-mapper.ts";
import { ListStreamingServicesRequest } from "./list-streaming-services.request.ts";
import { ListStreamingServicesResponse } from "./list-streaming-services.response.ts";

export class ListStreamingServicesService extends BaseService<ListStreamingServicesRequest, ListStreamingServicesResponse> {
	private readonly repo;
	private readonly resMapper = new ListStreamingServicesResponseMapper();

	constructor(repo: StreamingServiceRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(_req: ListStreamingServicesRequest): Promise<ListStreamingServicesResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
