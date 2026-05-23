import { ProducerModel } from "../../../../../domain/models/producer.model.ts";
import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";
import { AddProducerRequest } from "./add-producer.request.ts";
import { AddProducerResponse } from "./add-producer.response.ts";

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
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerModel;

		const addedModel = await this.repo.add(model);

		return new AddProducerResponse(new ProducerDTO(addedModel));
	}
}
