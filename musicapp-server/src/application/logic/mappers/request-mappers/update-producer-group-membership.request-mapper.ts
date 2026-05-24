import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateProducerGroupMembershipRequest } from "../../services/producer-group-membership/update/update-producer-group-membership.request.ts";

export class UpdateProducerGroupMembershipRequestMapper extends BaseRequestMapper<UpdateProducerGroupMembershipRequest, ProducerGroupMembershipModel> {
    public override map(req: UpdateProducerGroupMembershipRequest): ProducerGroupMembershipModel {
        return {
            id: req.item.id,
            producerGroupId: req.item.producerGroupId,
            producerId: req.item.producerId,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProducerGroupMembershipModel;
    }
}
