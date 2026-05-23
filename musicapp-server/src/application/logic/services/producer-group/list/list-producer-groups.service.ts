import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";
import { ListProducerGroupsRequest } from "./list-producer-groups.request.ts";
import { ListProducerGroupsResponse } from "./list-producer-groups.response.ts";

export class ListProducerGroupsService extends BaseService<ListProducerGroupsRequest, ListProducerGroupsResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: ListProducerGroupsRequest,
	): Promise<ListProducerGroupsResponse> {
		const models = await this.repo.list();

		return new ListProducerGroupsResponse(models.map((model) => new ProducerGroupDTO(model)));
	}
}
