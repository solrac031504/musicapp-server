import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { BaseResponse } from "../../../../common/responses/base-response.ts";
import { BaseRequest } from "../../../../common/requests/base-request.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";
import { ProducerModel } from "../../../../../domain/models/producer.model.ts";
import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";

export class AddProducerRequest extends BaseDTORequest<ProducerDTO> {}

export class AddProducerResponse extends BaseItemResponse<ProducerDTO> {
	constructor(item: ProducerDTO | null = null) {
		super(item);
	}
}

export class AddProducerService extends BaseService<AddProducerRequest, AddProducerResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddProducerRequest,
	): Promise<AddProducerResponse> {
		const model = {
			id: req.item.id,
			producerName: req.item.producerName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerModel;

		const addedModel = await this.repo.add(model);

		return new AddProducerResponse(new ProducerDTO(addedModel));
	}
}
