import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { ProducerGroupMembershipModel } from "../../../../../domain/models/producer-group-membership.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { UpdateProducerGroupMembershipRequest } from "./update-producer-group-membership.request.ts";
import { UpdateProducerGroupMembershipResponse } from "./update-producer-group-membership.response.ts";

export { UpdateProducerGroupMembershipRequest } from "./update-producer-group-membership.request.ts";
export { UpdateProducerGroupMembershipResponse } from "./update-producer-group-membership.response.ts";

export class UpdateProducerGroupMembershipService extends BaseService<UpdateProducerGroupMembershipRequest, UpdateProducerGroupMembershipResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupMembershipRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: UpdateProducerGroupMembershipRequest,
    ): Promise<UpdateProducerGroupMembershipResponse> {
        const model = {
            id: req.item.id,
            producerGroupId: req.item.producerGroupId,
            producerId: req.item.producerId,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProducerGroupMembershipModel;

        const updatedModel = await this.repo.update(model);

        return new UpdateProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(updatedModel));
    }
}
