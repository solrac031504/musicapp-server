import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";

export class GetProducerRequest extends BaseIdRequest {}

export class GetProducerResponse extends BaseItemResponse<ProducerDTO> {
	constructor(item: ProducerDTO | null = null) {
		super(item);
	}
}

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
