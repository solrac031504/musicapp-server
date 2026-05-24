import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateStreamingServiceRequest } from "../../services/streaming-service/update/update-streaming-service.request.ts";

export class UpdateStreamingServiceRequestMapper extends BaseRequestMapper<UpdateStreamingServiceRequest, StreamingServiceModel> {
	public override map(req: UpdateStreamingServiceRequest): StreamingServiceModel {
		return {
			id: req.item.id,
			streamingServiceName: req.item.streamingServiceName,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as StreamingServiceModel;
	}
}
