import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateProducerGroupRequestMapper } from "../../../mappers/request-mappers/update-producer-group.request-mapper.ts";
import { UpdateProducerGroupResponseMapper } from "../../../mappers/response-mappers/update-producer-group.response-mapper.ts";
import { UpdateProducerGroupRequest } from "./update-producer-group.request.ts";
import { UpdateProducerGroupResponse } from "./update-producer-group.response.ts";

export class UpdateProducerGroupService extends BaseService<UpdateProducerGroupRequest, UpdateProducerGroupResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateProducerGroupRequestMapper();
	private readonly resMapper = new UpdateProducerGroupResponseMapper();

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: UpdateProducerGroupRequest): Promise<UpdateProducerGroupResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
