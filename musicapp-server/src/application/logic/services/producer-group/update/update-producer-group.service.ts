import { ProducerGroupModel } from "../../../../../domain/models/producer-group.model.ts";
import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class UpdateProducerGroupRequest extends BaseDTORequest<ProducerGroupDTO> {}

export class UpdateProducerGroupResponse extends BaseItemResponse<ProducerGroupDTO> {
	constructor(item: ProducerGroupDTO | null = null) {
		super(item);
	}
}

export class UpdateProducerGroupService extends BaseService<UpdateProducerGroupRequest, UpdateProducerGroupResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateProducerGroupRequest,
	): Promise<UpdateProducerGroupResponse> {
		const model = {
			id: req.item.id,
			producerGroupName: req.item.producerGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupModel;

		const updatedModel = await this.repo.update(model);

		return new UpdateProducerGroupResponse(new ProducerGroupDTO(updatedModel));
	}
}
