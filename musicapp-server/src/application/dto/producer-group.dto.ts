import { ProducerGroupModel } from "../../domain/models/producer-group.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ProducerGroupDTO extends BaseIdDTO {
	producerGroupName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ProducerGroupModel) {
		super();

		this.id = model.id;
		this.producerGroupName = model.producerGroupName;
		this.isActive = model.isActive;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
