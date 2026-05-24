import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateProducerRequest } from "../../services/producer/update/update-producer.request.ts";

export class UpdateProducerRequestMapper extends BaseRequestMapper<UpdateProducerRequest, ProducerModel> {
	public override map(req: UpdateProducerRequest): ProducerModel {
		return {
			id: req.item.id,
			producerName: req.item.producerName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProducerModel;
	}
}
