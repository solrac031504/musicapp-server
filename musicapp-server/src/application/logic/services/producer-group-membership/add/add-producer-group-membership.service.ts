import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddProducerGroupMembershipRequestMapper } from "../../../mappers/request-mappers/add-producer-group-membership.request-mapper.ts";
import { AddProducerGroupMembershipResponseMapper } from "../../../mappers/response-mappers/add-producer-group-membership.response-mapper.ts";
import { AddProducerGroupMembershipRequest } from "./add-producer-group-membership.request.ts";
import { AddProducerGroupMembershipResponse } from "./add-producer-group-membership.response.ts";

export class AddProducerGroupMembershipService extends BaseService<AddProducerGroupMembershipRequest, AddProducerGroupMembershipResponse> {
	private readonly repo;
	private readonly reqMapper = new AddProducerGroupMembershipRequestMapper();
	private readonly resMapper = new AddProducerGroupMembershipResponseMapper();

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: AddProducerGroupMembershipRequest): Promise<AddProducerGroupMembershipResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
