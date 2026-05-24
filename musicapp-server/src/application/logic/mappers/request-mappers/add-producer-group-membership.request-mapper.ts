import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddProducerGroupMembershipRequest } from "../../services/producer-group-membership/add/add-producer-group-membership.request.ts";

export class AddProducerGroupMembershipRequestMapper extends BaseRequestMapper<AddProducerGroupMembershipRequest, ProducerGroupMembershipModel> {
	public override map(req: AddProducerGroupMembershipRequest): ProducerGroupMembershipModel {
		return {
			id: req.item.id,
			producerGroupId: req.item.producerGroupId,
			producerId: req.item.producerId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupMembershipModel;
	}
}
