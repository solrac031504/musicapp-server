import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { StreamingServiceDTO } from "../../../../dto/streaming-service.dto.ts";

export class UpdateStreamingServiceResponse extends BaseItemResponse<StreamingServiceDTO> {
	constructor(dto: StreamingServiceDTO | null) {
		super(dto);
	}
}
