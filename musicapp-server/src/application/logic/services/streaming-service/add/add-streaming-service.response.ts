import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { StreamingServiceDTO } from "../../../../dto/streaming-service.dto.ts";

export class AddStreamingServiceResponse extends BaseItemResponse<StreamingServiceDTO> {
	constructor(item: StreamingServiceDTO | null = null) {
		super(item);
	}
}
