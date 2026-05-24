import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListProducerGroupsResponseMapper } from "../../../mappers/response-mappers/list-producer-groups.response-mapper.ts";
import { ListProducerGroupsRequest } from "./list-producer-groups.request.ts";
import { ListProducerGroupsResponse } from "./list-producer-groups.response.ts";

export class ListProducerGroupsService extends BaseService<ListProducerGroupsRequest, ListProducerGroupsResponse> {
	private readonly repo;
	private readonly resMapper = new ListProducerGroupsResponseMapper();

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(_req: ListProducerGroupsRequest): Promise<ListProducerGroupsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
