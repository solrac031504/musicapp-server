import { ProducerModel } from "../../domain/models/producer.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ProducerDTO extends BaseIdDTO {
	producerName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ProducerModel) {
		super();

		this.id = model.id;
		this.producerName = model.producerName;
		this.isActive = model.isActive;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
