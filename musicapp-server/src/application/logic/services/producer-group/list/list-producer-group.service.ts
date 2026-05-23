import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";
import { ListProducerGroupRequest } from "./list-producer-group.request.ts";
import { ListProducerGroupResponse } from "./list-producer-group.response.ts";

export { ListProducerGroupRequest } from "./list-producer-group.request.ts";
export { ListProducerGroupResponse } from "./list-producer-group.response.ts";

export class ListProducerGroupService extends BaseService<ListProducerGroupRequest, ListProducerGroupResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: ListProducerGroupRequest,
    ): Promise<ListProducerGroupResponse> {
        const models = await this.repo.list();

        return new ListProducerGroupResponse(models.map((model) => new ProducerGroupDTO(model)));
    }
}
