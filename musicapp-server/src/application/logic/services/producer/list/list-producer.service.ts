import { ProducerRepository } from "../../../../../infrastructure/data-access/repositories/producer.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";
import { ListProducerRequest } from "./list-producer.request.ts";
import { ListProducerResponse } from "./list-producer.response.ts";

export { ListProducerRequest } from "./list-producer.request.ts";
export { ListProducerResponse } from "./list-producer.response.ts";

export class ListProducerService extends BaseService<ListProducerRequest, ListProducerResponse> {
    private readonly repo;

    constructor(repo: ProducerRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: ListProducerRequest,
    ): Promise<ListProducerResponse> {
        const models = await this.repo.list();

        return new ListProducerResponse(models.map((model) => new ProducerDTO(model)));
    }
}
