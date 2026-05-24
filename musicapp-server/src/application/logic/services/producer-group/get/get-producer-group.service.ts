import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetProducerGroupResponseMapper } from "../../../mappers/response-mappers/get-producer-group.response-mapper.ts";
import { GetProducerGroupRequest } from "./get-producer-group.request.ts";
import { GetProducerGroupResponse } from "./get-producer-group.response.ts";

export class GetProducerGroupService extends BaseService<GetProducerGroupRequest, GetProducerGroupResponse> {
	private readonly repo;
	private readonly resMapper = new GetProducerGroupResponseMapper();

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: GetProducerGroupRequest): Promise<GetProducerGroupResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetProducerGroupResponse().notFound();

		return this.resMapper.map(model);
	}
}
