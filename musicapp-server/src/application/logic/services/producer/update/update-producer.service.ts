import { ProducerModel } from "../../../../../domain/models/producer.model.ts";
import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseDTORequest } from "../../../../common/requests/base-dto-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";

export class UpdateProducerRequest extends BaseDTORequest<ProducerDTO> {}

export class UpdateProducerResponse extends BaseItemResponse<ProducerDTO> {
	constructor(item: ProducerDTO | null = null) {
		super(item);
	}
}

export class UpdateProducerService extends BaseService<UpdateProducerRequest, UpdateProducerResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateProducerRequest,
	): Promise<UpdateProducerResponse> {
		const model = {
			id: req.item.id,
			producerName: req.item.producerName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerModel;

		const updatedModel = await this.repo.update(model);

		return new UpdateProducerResponse(new ProducerDTO(updatedModel));
	}
}
