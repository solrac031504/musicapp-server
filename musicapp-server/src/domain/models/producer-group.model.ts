import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProducerGroupModel extends BaseIdModel {
	producerGroupName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}
