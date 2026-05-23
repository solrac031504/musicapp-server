import { ProducerGroupModel } from "../../../../../domain/models/producer-group.model.ts";
import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class AddProducerGroupRequest extends BaseDTORequest<ProducerGroupDTO> {}

export class AddProducerGroupResponse extends BaseItemResponse<ProducerGroupDTO> {
	constructor(item: ProducerGroupDTO | null = null) {
		super(item);
	}
}

export class AddProducerGroupService extends BaseService<AddProducerGroupRequest, AddProducerGroupResponse> {
	private readonly repo;

	constructor(repo: ProducerGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddProducerGroupRequest,
	): Promise<AddProducerGroupResponse> {
		const model = {
			id: req.item.id,
			producerGroupName: req.item.producerGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupModel;

		const addedModel = await this.repo.add(model);

		return new AddProducerGroupResponse(new ProducerGroupDTO(addedModel));
	}
}
