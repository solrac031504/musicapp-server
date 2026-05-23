import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProducerGroupMembershipModel extends BaseIdModel {
	producerGroupId!: number;

	producerId!: number;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}
