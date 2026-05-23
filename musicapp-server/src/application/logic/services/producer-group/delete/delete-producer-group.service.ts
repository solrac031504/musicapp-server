import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseResponse } from "../../../../common/responses/base-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";

export class DeleteProducerGroupRequest extends BaseIdRequest {}

export class DeleteProducerGroupResponse extends BaseResponse {}

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
