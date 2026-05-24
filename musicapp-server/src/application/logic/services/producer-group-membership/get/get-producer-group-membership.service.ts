import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetProducerGroupMembershipResponseMapper } from "../../../mappers/response-mappers/get-producer-group-membership.response-mapper.ts";
import { GetProducerGroupMembershipRequest } from "./get-producer-group-membership.request.ts";
import { GetProducerGroupMembershipResponse } from "./get-producer-group-membership.response.ts";

export class GetProducerGroupMembershipService extends BaseService<GetProducerGroupMembershipRequest, GetProducerGroupMembershipResponse> {
	private readonly repo;
	private readonly resMapper = new GetProducerGroupMembershipResponseMapper();

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: GetProducerGroupMembershipRequest): Promise<GetProducerGroupMembershipResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetProducerGroupMembershipResponse().notFound();

		return this.resMapper.map(model);
	}
}
