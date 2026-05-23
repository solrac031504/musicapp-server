import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { ProducerGroupMembershipModel } from "../../../../../domain/models/producer-group-membership.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { AddProducerGroupMembershipRequest } from "./add-producer-group-membership.request.ts";
import { AddProducerGroupMembershipResponse } from "./add-producer-group-membership.response.ts";

export { AddProducerGroupMembershipRequest } from "./add-producer-group-membership.request.ts";
export { AddProducerGroupMembershipResponse } from "./add-producer-group-membership.response.ts";

export class AddProducerGroupMembershipService extends BaseService<AddProducerGroupMembershipRequest, AddProducerGroupMembershipResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupMembershipRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: AddProducerGroupMembershipRequest,
    ): Promise<AddProducerGroupMembershipResponse> {
        const model = {
            id: req.item.id,
            producerGroupId: req.item.producerGroupId,
            producerId: req.item.producerId,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProducerGroupMembershipModel;

        const addedModel = await this.repo.add(model);

        return new AddProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(addedModel));
    }
}
