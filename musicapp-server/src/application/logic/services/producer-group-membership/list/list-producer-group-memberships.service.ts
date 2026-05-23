import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { ListProducerGroupMembershipsRequest } from "./list-producer-group-memberships.request.ts";
import { ListProducerGroupMembershipsResponse } from "./list-producer-group-memberships.response.ts";

export { ListProducerGroupMembershipsRequest } from "./list-producer-group-memberships.request.ts";
export { ListProducerGroupMembershipsResponse } from "./list-producer-group-memberships.response.ts";

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
