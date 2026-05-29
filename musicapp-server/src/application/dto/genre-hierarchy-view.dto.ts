import { GenreHierarchyViewModel } from "../../domain/models/genre-hierarchy-view.model.ts";
import { BaseDTO } from "../common/dto/base-dto.ts";

export class GenreHierarchyViewDTO extends BaseDTO {
	genreId!: number;

	genreName!: string;

	hierarchyPath!: string;

	parentGenreId!: number;

	level!: number;

	rootGenreName!: string;

	rootGenreId!: number;

	constructor(model: GenreHierarchyViewModel) {
		super();

		this.genreId = model.genreId;
		this.genreName = model.genreName;
		this.hierarchyPath = model.hierarchyPath;
		this.parentGenreId = model.parentGenreId;
		this.level = model.level;
		this.rootGenreName = model.rootGenreName;
		this.rootGenreId = model.rootGenreId;
	}
}
