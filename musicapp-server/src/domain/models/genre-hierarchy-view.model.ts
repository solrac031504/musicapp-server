import { BaseModel } from "../common/models/base.model.ts";

export class GenreHierarchyViewModel extends BaseModel {
	genreId!: number;

	genreName!: string;

	hierarchyPath!: string;

	parentGenreId!: number;

	level!: number;

	rootGenreName!: string;

	rootGenreId!: number;
}
