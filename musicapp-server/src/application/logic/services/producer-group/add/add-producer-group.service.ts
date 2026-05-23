import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { ProducerGroupModel } from "../../../../../domain/models/producer-group.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";
import { AddProducerGroupRequest } from "./add-producer-group.request.ts";
import { AddProducerGroupResponse } from "./add-producer-group.response.ts";

export { AddProducerGroupRequest } from "./add-producer-group.request.ts";
export { AddProducerGroupResponse } from "./add-producer-group.response.ts";

export class AddProducerGroupService extends BaseService<AddProducerGroupRequest, AddProducerGroupResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: AddProducerGroupRequest,
    ): Promise<AddProducerGroupResponse> {
        const model = {
            id: req.item.id,
            producerGroupName: req.item.producerGroupName,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProducerGroupModel;

        const addedModel = await this.repo.add(model);

        return new AddProducerGroupResponse(new ProducerGroupDTO(addedModel));
    }
}
