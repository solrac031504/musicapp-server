import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateProducerGroupMembershipRequestMapper } from "../../../mappers/request-mappers/update-producer-group-membership.request-mapper.ts";
import { UpdateProducerGroupMembershipResponseMapper } from "../../../mappers/response-mappers/update-producer-group-membership.response-mapper.ts";
import { UpdateProducerGroupMembershipRequest } from "./update-producer-group-membership.request.ts";
import { UpdateProducerGroupMembershipResponse } from "./update-producer-group-membership.response.ts";

export class UpdateProducerGroupMembershipService extends BaseService<UpdateProducerGroupMembershipRequest, UpdateProducerGroupMembershipResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateProducerGroupMembershipRequestMapper();
	private readonly resMapper = new UpdateProducerGroupMembershipResponseMapper();

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: UpdateProducerGroupMembershipRequest): Promise<UpdateProducerGroupMembershipResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
