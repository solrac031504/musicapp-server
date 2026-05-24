import { StreamingServiceModel } from "../../../../domain/models/streaming-service.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { StreamingServiceDTO } from "../../../dto/streaming-service.dto.ts";
import { ListStreamingServicesResponse } from "../../services/streaming-service/list/list-streaming-services.response.ts";

export class ListStreamingServicesResponseMapper extends BaseListResponseMapper<ListStreamingServicesResponse, StreamingServiceModel> {
	public override map(models: StreamingServiceModel[]): ListStreamingServicesResponse {
		const dtos = models.map((m) => new StreamingServiceDTO(m));

		return new ListStreamingServicesResponse(dtos);
	}
}
