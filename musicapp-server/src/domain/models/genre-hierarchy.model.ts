import { BaseIdModel } from "../common/models/base-id.model.ts";

export class GenreHierarchyModel extends BaseIdModel { 
    genreId!: number;

    parentGenreId!: number;
}