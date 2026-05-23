import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ArtistModel extends BaseIdModel {
	artistName!: string;

	isActive!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}
