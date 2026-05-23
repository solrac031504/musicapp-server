import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseIdRequest } from "../../../../common/requests/base-id-request.ts";
import { BaseResponse } from "../../../../common/responses/base-response.ts";
import { BaseService } from "../../../../common/services/base-service.ts";

export class DeleteProducerRequest extends BaseIdRequest {}

export class DeleteProducerResponse extends BaseResponse {}

export class DeleteProducerService extends BaseService<DeleteProducerRequest, DeleteProducerResponse> {
	private readonly repo;

	constructor(repo: ProducerRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteProducerRequest,
	): Promise<DeleteProducerResponse> {
		await this.repo.delete(req.id);

		return new DeleteProducerResponse();
	}
}
