import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddProducerRequest } from "../../services/producer/add/add-producer.request.ts";

export class AddProducerRequestMapper extends BaseRequestMapper<AddProducerRequest, ProducerModel> {
	public override map(req: AddProducerRequest): ProducerModel {
		return {
			id: req.item.id,
			producerName: req.item.producerName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerModel;
	}
}
