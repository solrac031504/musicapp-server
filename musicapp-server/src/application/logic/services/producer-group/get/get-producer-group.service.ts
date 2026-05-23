import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";
import { GetProducerGroupRequest } from "./get-producer-group.request.ts";
import { GetProducerGroupResponse } from "./get-producer-group.response.ts";

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
