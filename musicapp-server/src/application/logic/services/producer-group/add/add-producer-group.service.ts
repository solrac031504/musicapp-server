import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddProducerGroupRequestMapper } from "../../../mappers/request-mappers/add-producer-group.request-mapper.ts";
import { AddProducerGroupResponseMapper } from "../../../mappers/response-mappers/add-producer-group.response-mapper.ts";
import { AddProducerGroupRequest } from "./add-producer-group.request.ts";
import { AddProducerGroupResponse } from "./add-producer-group.response.ts";

export class AddProducerGroupService extends BaseService<AddProducerGroupRequest, AddProducerGroupResponse> {
	private readonly repo;
	private readonly reqMapper = new AddProducerGroupRequestMapper();
	private readonly resMapper = new AddProducerGroupResponseMapper();

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: AddProducerGroupRequest): Promise<AddProducerGroupResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
