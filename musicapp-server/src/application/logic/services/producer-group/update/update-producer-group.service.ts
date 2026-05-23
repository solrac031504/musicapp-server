import { ProducerGroupRepository } from "../../../../../infrastructure/data-access/repositories/producer-group.repository.ts";
import { ProducerGroupModel } from "../../../../../domain/models/producer-group.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";
import { UpdateProducerGroupRequest } from "./update-producer-group.request.ts";
import { UpdateProducerGroupResponse } from "./update-producer-group.response.ts";

export { UpdateProducerGroupRequest } from "./update-producer-group.request.ts";
export { UpdateProducerGroupResponse } from "./update-producer-group.response.ts";

export class UpdateProducerGroupService extends BaseService<UpdateProducerGroupRequest, UpdateProducerGroupResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: UpdateProducerGroupRequest,
    ): Promise<UpdateProducerGroupResponse> {
        const model = {
            id: req.item.id,
            producerGroupName: req.item.producerGroupName,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProducerGroupModel;

        const updatedModel = await this.repo.update(model);

        return new UpdateProducerGroupResponse(new ProducerGroupDTO(updatedModel));
    }
}
