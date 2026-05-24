import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { StreamingServiceDTO } from "../../../../dto/streaming-service.dto.ts";

export class ListStreamingServicesResponse extends BaseListResponse<StreamingServiceDTO> {
	constructor(dtos: StreamingServiceDTO[]) {
		super(dtos);
	}
}
