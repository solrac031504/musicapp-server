import { StreamingServiceModel } from "../../domain/models/streaming-service.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class StreamingServiceDTO extends BaseIdDTO {
	streamingServiceName!: string;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: StreamingServiceModel) {
		super();

		this.id = model.id;
		this.streamingServiceName = model.streamingServiceName;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
