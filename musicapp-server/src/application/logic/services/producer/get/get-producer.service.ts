import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";
import { GetProducerRequest } from "./get-producer.request.ts";
import { GetProducerResponse } from "./get-producer.response.ts";

export class GetProducerService extends BaseService<GetProducerRequest, GetProducerResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetProducerRequest,
	): Promise<GetProducerResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetProducerResponse().notFound();

		return new GetProducerResponse(new ProducerDTO(model));
	}
}
