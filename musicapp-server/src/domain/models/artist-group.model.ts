import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ArtistGroupModel extends BaseIdModel {
	artistGroupName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}
