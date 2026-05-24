import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { StreamingServiceDTO } from "../../../dto/streaming-service.dto.ts";
import { UpdateStreamingServiceResponse } from "../../services/streaming-service/update/update-streaming-service.response.ts";

export class UpdateStreamingServiceResponseMapper extends BaseResponseMapper<UpdateStreamingServiceResponse, StreamingServiceModel> {
	public override map(model: StreamingServiceModel): UpdateStreamingServiceResponse {
		return new UpdateStreamingServiceResponse(new StreamingServiceDTO(model));
	}
}
