import { GenreModel } from "../../domain/models/genre.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class GenreDTO extends BaseIdDTO {
	genreName!: string;

	description!: string;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: GenreModel) {
		super();

		this.id = model.id;
		this.genreName = model.genreName;
		this.description = model.description;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
