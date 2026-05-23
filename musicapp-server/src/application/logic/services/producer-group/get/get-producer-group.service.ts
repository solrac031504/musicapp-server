import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class GetProducerGroupRequest extends BaseIdRequest {}

export class GetProducerGroupResponse extends BaseItemResponse<ProducerGroupDTO> {
	constructor(item: ProducerGroupDTO | null = null) {
		super(item);
	}
}

export class GetProducerGroupService extends BaseService<GetProducerGroupRequest, GetProducerGroupResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetProducerGroupRequest,
	): Promise<GetProducerGroupResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetProducerGroupResponse().notFound();

		return new GetProducerGroupResponse(new ProducerGroupDTO(model));
	}
}
