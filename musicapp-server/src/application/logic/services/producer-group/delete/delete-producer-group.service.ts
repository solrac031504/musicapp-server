import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteProducerGroupRequest } from "./delete-producer-group.request.ts";
import { DeleteProducerGroupResponse } from "./delete-producer-group.response.ts";

export class DeleteProducerGroupService extends BaseService<DeleteProducerGroupRequest, DeleteProducerGroupResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteProducerGroupRequest,
	): Promise<DeleteProducerGroupResponse> {
		await this.repo.delete(req.id);

		return new DeleteProducerGroupResponse();
	}
}
