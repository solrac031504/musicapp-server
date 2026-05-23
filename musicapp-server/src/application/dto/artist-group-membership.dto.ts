import { ArtistGroupMembershipModel } from "../../domain/models/artist-group-membership.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class ArtistGroupMembershipDTO extends BaseIdDTO {
	artistGroupId!: number;

	artistId!: number;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: ArtistGroupMembershipModel) {
		super();

		this.id = model.id;
		this.artistGroupId = model.artistGroupId;
		this.artistId = model.artistId;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
