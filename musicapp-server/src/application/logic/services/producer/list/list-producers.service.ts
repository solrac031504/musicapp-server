import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseRequest } from "../../../../common/requests/base-request.ts";
import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";

export class ListProducersRequest extends BaseRequest {}

export class ListProducersResponse extends BaseListResponse<ProducerDTO> {
	constructor(items: ProducerDTO[] = []) {
		super(items);
	}
}

export class ListProducersService extends BaseService<ListProducersRequest, ListProducersResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: ListProducersRequest,
	): Promise<ListProducersResponse> {
		const models = await this.repo.list();

		return new ListProducersResponse(models.map((model) => new ProducerDTO(model)));
	}
}
