import { ProjectTypeModel } from "../../domain/models/project-type.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ProjectTypeDTO extends BaseIdDTO {
	projectTypeName!: string;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ProjectTypeModel) {
		super();

		this.id = model.id;
		this.projectTypeName = model.projectTypeName;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
