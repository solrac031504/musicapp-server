import { ArtistModel } from "../../domain/models/artist.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ArtistDTO extends BaseIdDTO {
	artistName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ArtistModel) {
		super();

		this.id = model.id;
		this.artistName = model.artistName;
		this.isActive = model.isActive;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
