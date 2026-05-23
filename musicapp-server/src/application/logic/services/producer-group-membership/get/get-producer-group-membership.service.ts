import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";

export class GetProducerGroupMembershipRequest extends BaseIdRequest {}

export class GetProducerGroupMembershipResponse extends BaseItemResponse<ProducerGroupMembershipDTO> {
	constructor(item: ProducerGroupMembershipDTO | null = null) {
		super(item);
	}
}

export class GetProducerGroupMembershipService extends BaseService<GetProducerGroupMembershipRequest, GetProducerGroupMembershipResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetProducerGroupMembershipRequest,
	): Promise<GetProducerGroupMembershipResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetProducerGroupMembershipResponse().notFound();

		return new GetProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(model));
	}
}
