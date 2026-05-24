import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddProducerRequestMapper } from "../../../mappers/request-mappers/add-producer.request-mapper.ts";
import { AddProducerResponseMapper } from "../../../mappers/response-mappers/add-producer.response-mapper.ts";
import { AddProducerRequest } from "./add-producer.request.ts";
import { AddProducerResponse } from "./add-producer.response.ts";

export class AddProducerService extends BaseService<AddProducerRequest, AddProducerResponse> {
	private readonly repo;
	private readonly reqMapper = new AddProducerRequestMapper();
	private readonly resMapper = new AddProducerResponseMapper();

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: AddProducerRequest): Promise<AddProducerResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
