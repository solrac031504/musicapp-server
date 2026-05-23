import { GenreHierarchyModel } from "../../domain/models/genre-hierarchy.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class GenreHierarchyDTO extends BaseIdDTO {
	genreId!: number;

	parentGenreId!: number;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: GenreHierarchyModel) {
		super();

		this.id = model.id;
		this.genreId = model.genreId;
		this.parentGenreId = model.parentGenreId;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
