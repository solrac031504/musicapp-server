import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddProducerGroupRequest } from "../../services/producer-group/add/add-producer-group.request.ts";

export class AddProducerGroupRequestMapper extends BaseRequestMapper<AddProducerGroupRequest, ProducerGroupModel> {
	public override map(req: AddProducerGroupRequest): ProducerGroupModel {
		return {
			id: req.item.id,
			producerGroupName: req.item.producerGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupModel;
	}
}
