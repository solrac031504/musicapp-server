import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateProducerRequestMapper } from "../../../mappers/request-mappers/update-producer.request-mapper.ts";
import { UpdateProducerResponseMapper } from "../../../mappers/response-mappers/update-producer.response-mapper.ts";
import { UpdateProducerRequest } from "./update-producer.request.ts";
import { UpdateProducerResponse } from "./update-producer.response.ts";

export class UpdateProducerService extends BaseService<UpdateProducerRequest, UpdateProducerResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateProducerRequestMapper();
	private readonly resMapper = new UpdateProducerResponseMapper();

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: UpdateProducerRequest): Promise<UpdateProducerResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
