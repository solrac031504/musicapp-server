import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddStreamingServiceRequest } from "../../services/streaming-service/add/add-streaming-service.request.ts";

export class AddStreamingServiceRequestMapper extends BaseRequestMapper<AddStreamingServiceRequest, StreamingServiceModel> {
	public override map(req: AddStreamingServiceRequest): StreamingServiceModel {
		return {
			id: req.item.id,
			streamingServiceName: req.item.streamingServiceName,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as StreamingServiceModel;
	}
}
