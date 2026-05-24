import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { StreamingServiceDTO } from "../../../dto/streaming-service.dto.ts";
import { GetStreamingServiceResponse } from "../../services/streaming-service/get/get-streaming-service.response.ts";

export class GetStreamingServiceResponseMapper extends BaseResponseMapper<GetStreamingServiceResponse, StreamingServiceModel> {
	public override map(model: StreamingServiceModel): GetStreamingServiceResponse {
		return new GetStreamingServiceResponse(new StreamingServiceDTO(model));
	}
}
