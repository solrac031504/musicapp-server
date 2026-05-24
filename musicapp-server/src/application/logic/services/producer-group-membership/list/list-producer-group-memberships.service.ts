import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListProducerGroupMembershipsResponseMapper } from "../../../mappers/response-mappers/list-producer-group-memberships.response-mapper.ts";
import { ListProducerGroupMembershipsRequest } from "./list-producer-group-memberships.request.ts";
import { ListProducerGroupMembershipsResponse } from "./list-producer-group-memberships.response.ts";

export class ListProducerGroupMembershipsService extends BaseService<ListProducerGroupMembershipsRequest, ListProducerGroupMembershipsResponse> {
	private readonly repo;
	private readonly resMapper = new ListProducerGroupMembershipsResponseMapper();

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: ListProducerGroupMembershipsRequest): Promise<ListProducerGroupMembershipsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
