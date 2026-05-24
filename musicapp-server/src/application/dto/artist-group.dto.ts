import { ArtistGroupModel } from "../../domain/models/artist-group.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ArtistGroupDTO extends BaseIdDTO {
	artistGroupName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ArtistGroupModel) {
		super();

		this.id = model.id;
		this.artistGroupName = model.artistGroupName;
		this.isActive = model.isActive;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
