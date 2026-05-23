import { ProducerGroupMembershipModel } from "../../domain/models/producer-group-membership.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ProducerGroupMembershipDTO extends BaseIdDTO {
	producerGroupId!: number;

	producerId!: number;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ProducerGroupMembershipModel) {
		super();

		this.id = model.id;
		this.producerGroupId = model.producerGroupId;
		this.producerId = model.producerId;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
