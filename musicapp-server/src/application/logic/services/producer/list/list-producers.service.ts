import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";
import { ListProducersRequest } from "./list-producers.request.ts";
import { ListProducersResponse } from "./list-producers.response.ts";

export { ListProducersRequest } from "./list-producers.request.ts";
export { ListProducersResponse } from "./list-producers.response.ts";

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
