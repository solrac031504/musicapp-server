import { BaseIdModel } from "../common/models/base-id.model.ts";

export class GenreModel extends BaseIdModel {
    genreName!: string;

    description!: string;
}
