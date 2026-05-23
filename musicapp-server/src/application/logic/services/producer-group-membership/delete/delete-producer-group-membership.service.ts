import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseResponse } from "../../../../common/responses/base-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";

export class DeleteProducerGroupMembershipRequest extends BaseIdRequest {}

export class DeleteProducerGroupMembershipResponse extends BaseResponse {}

export class DeleteProducerGroupMembershipService extends BaseService<DeleteProducerGroupMembershipRequest, DeleteProducerGroupMembershipResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteProducerGroupMembershipRequest,
	): Promise<DeleteProducerGroupMembershipResponse> {
		await this.repo.delete(req.id);

		return new DeleteProducerGroupMembershipResponse();
	}
}
