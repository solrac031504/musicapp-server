import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseRequest } from "../../../../common/requests/base-request.ts";
import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";

export class ListProducerGroupMembershipsRequest extends BaseRequest {}

export class ListProducerGroupMembershipsResponse extends BaseListResponse<ProducerGroupMembershipDTO> {
	constructor(items: ProducerGroupMembershipDTO[] = []) {
		super(items);
	}
}

export class ListProducerGroupMembershipsService extends BaseService<ListProducerGroupMembershipsRequest, ListProducerGroupMembershipsResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: ListProducerGroupMembershipsRequest,
	): Promise<ListProducerGroupMembershipsResponse> {
		const models = await this.repo.list();

		return new ListProducerGroupMembershipsResponse(models.map((model) => new ProducerGroupMembershipDTO(model)));
	}
}
