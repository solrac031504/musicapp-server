import { ProjectModel } from "../../domain/models/project.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ProjectDTO extends BaseIdDTO {
	projectName!: string;

	artistGroupId!: number;

	sceneId!: number | null;

	projectTypeId!: number;

	releaseDate!: Date;

	rating!: number;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ProjectModel) {
		super();

		this.id = model.id;
		this.projectName = model.projectName;
		this.artistGroupId = model.artistGroupId;
		this.sceneId = model.sceneId;
		this.projectTypeId = model.projectTypeId;
		this.releaseDate = model.releaseDate;
		this.rating = model.rating;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
