import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListProducersResponseMapper } from "../../../mappers/response-mappers/list-producers.response-mapper.ts";
import { ListProducersRequest } from "./list-producers.request.ts";
import { ListProducersResponse } from "./list-producers.response.ts";

export class ListProducersService extends BaseService<ListProducersRequest, ListProducersResponse> {
	private readonly repo;
	private readonly resMapper = new ListProducersResponseMapper();

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(_req: ListProducersRequest): Promise<ListProducersResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
