import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { StreamingServiceDTO } from "../../../dto/streaming-service.dto.ts";
import { AddStreamingServiceResponse } from "../../services/streaming-service/add/add-streaming-service.response.ts";

export class AddStreamingServiceResponseMapper extends BaseResponseMapper<AddStreamingServiceResponse, StreamingServiceModel> {
	public override map(model: StreamingServiceModel): AddStreamingServiceResponse {
		return new AddStreamingServiceResponse(new StreamingServiceDTO(model));
	}
}
