import { BaseIdModel } from "../common/models/base-id.model.ts";

export class StreamingServiceModel extends BaseIdModel {
	streamingServiceName!: string;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}
