import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { ProducerGroupMembershipModel } from "../../../../../domain/models/producer-group-membership.model.ts";
import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";

export class UpdateProducerGroupMembershipRequest extends BaseDTORequest<ProducerGroupMembershipDTO> {}

export class UpdateProducerGroupMembershipResponse extends BaseItemResponse<ProducerGroupMembershipDTO> {
	constructor(item: ProducerGroupMembershipDTO | null = null) {
		super(item);
	}
}

export class UpdateProducerGroupMembershipService extends BaseService<UpdateProducerGroupMembershipRequest, UpdateProducerGroupMembershipResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateProducerGroupMembershipRequest,
	): Promise<UpdateProducerGroupMembershipResponse> {
		const model = {
			id: req.item.id,
			producerGroupId: req.item.producerGroupId,
			producerId: req.item.producerId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupMembershipModel;

		const updatedModel = await this.repo.update(model);

		return new UpdateProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(updatedModel));
	}
}
