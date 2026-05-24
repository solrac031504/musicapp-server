import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteProducerRequest } from "./delete-producer.request.ts";
import { DeleteProducerResponse } from "./delete-producer.response.ts";

export class DeleteProducerService extends BaseService<DeleteProducerRequest, DeleteProducerResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: DeleteProducerRequest): Promise<DeleteProducerResponse> {
		await this.repo.delete(req.id);

		return new DeleteProducerResponse();
	}
}
