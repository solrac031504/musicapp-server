import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateProducerGroupRequest } from "../../services/producer-group/update/update-producer-group.request.ts";

export class UpdateProducerGroupRequestMapper extends BaseRequestMapper<UpdateProducerGroupRequest, ProducerGroupModel> {
	public override map(req: UpdateProducerGroupRequest): ProducerGroupModel {
		return {
			id: req.item.id,
			producerGroupName: req.item.producerGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerGroupModel;
	}
}
