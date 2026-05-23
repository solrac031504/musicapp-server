import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseRequest } from "../../../../common/requests/base-request.ts";
import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class ListProducerGroupsRequest extends BaseRequest {}

export class ListProducerGroupsResponse extends BaseListResponse<ProducerGroupDTO> {
	constructor(items: ProducerGroupDTO[] = []) {
		super(items);
	}
}

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
