import { SceneModel } from "../../domain/models/scene.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class SceneDTO extends BaseIdDTO {
	sceneName!: string;

	description!: string;

	isGeographic!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: SceneModel) {
		super();

		this.id = model.id;
		this.sceneName = model.sceneName;
		this.description = model.description;
		this.isGeographic = model.isGeographic;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
